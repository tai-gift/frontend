import { useAccount, useConfig } from "wagmi";
import { Address } from "viem";
import { readContract } from "@wagmi/core";
import RaffleFactory from "@/artifacts/RaffleFactory.json";

export async function useRaffleFactory() {
  const account = useAccount();
  const config = useConfig();
  console.log(config);

  function raffleFactoryRead(functionName: string, ...args: any[]) {
    return readContract(config, {
      abi: RaffleFactory.abi,
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512" as Address,
      functionName: functionName,
      args: args,
    }) as Promise<any>;
  }
}

export async function useUser() {}
