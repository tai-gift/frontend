import { useConfig, useReadContract, useWriteContract } from "wagmi";
import { Address, formatEther } from "viem";
import Token from "@/artifacts/Token.json";
import Raffle from "@/artifacts/Raffle.json";
import { useAppAccount } from "@/contexts/AccountProvider";
import { waitForTransaction } from "@wagmi/core";
import { useEffect, useMemo } from "react";

export function useRaffle(address: Address) {
  const config = useConfig();
  const { chain } = useAppAccount();
  const { writeContractAsync } = useWriteContract();

  // Read contract hooks
  const { data: _raffleStatus } = useReadContract({
    address,
    abi: Raffle.abi,
    functionName: "status",
  });

  const { data: _raffleConfig } = useReadContract({
    address,
    abi: Raffle.abi,
    functionName: "config",
  });

  const raffleStatus = useMemo(() => {
    return _raffleStatus
      ? {
          currentPrizePool: _raffleStatus[0],
          totalTickets: Number(_raffleStatus[1]),
          isActive: _raffleStatus[2],
          isComplete: _raffleStatus[3],
          formattedPrizePool: formatEther(_raffleStatus[0]),
        }
      : {};
  }, [_raffleStatus]);

  // Format config for easy use// Format config for easy use
  const raffleConfig = useMemo(() => {
    return _raffleConfig
      ? {
          guaranteedPrize: _raffleConfig[0],
          ticketPrice: _raffleConfig[1],
          startTime: Number(_raffleConfig[2]),
          endTime: Number(_raffleConfig[3]),
          charityWallet: _raffleConfig[4],
          managementWallet: _raffleConfig[5],
          minTickets: Number(_raffleConfig[6]),
          maxTicketsPerUser: Number(_raffleConfig[7]),
          tokenAddress: _raffleConfig[8],
          formattedTicketPrice: formatEther(_raffleConfig[1]),
        }
      : {};
  }, [_raffleConfig]);

  function checkDrawRequirements() {
    if (!raffleStatus || !raffleConfig) {
      throw new Error("Unable to fetch raffle status or config");
    }

    // Check if draw is active
    if (!raffleStatus.isActive) {
      throw new Error("Draw is not active");
    }

    // Check if draw is complete
    if (raffleStatus.isComplete) {
      throw new Error("Draw is already complete");
    }

    // Check if within time window
    const currentTime = Math.floor(Date.now() / 1000);
    if (
      currentTime < raffleConfig.startTime ||
      currentTime >= raffleConfig.endTime
    ) {
      throw new Error("Not within draw period");
    }

    return true;
  }

  async function buyTicket(units: number, price: number) {
    if (!chain?.tokenAddress) {
      throw new Error("Token address not configured");
    }

    checkDrawRequirements();

    const approveTx = await writeContractAsync({
      abi: Token.abi,
      address: chain?.tokenAddress,
      functionName: "approve",
      args: [address, BigInt(price)?.toString()],
    });
    console.log("Waiting for approval transaction...");
    await waitForTransaction(config, { hash: approveTx });

    const hash = await writeContractAsync({
      abi: Raffle.abi,
      address: address,
      functionName: "buyTickets",
      args: [units],
    });

    return waitForTransaction(config, { hash });
  }

  return {
    buyTicket,
    status: raffleStatus,
    config: raffleConfig,
  };
}
