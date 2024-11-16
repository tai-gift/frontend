import { Draw } from "@/types";

export function serializeRaffle(raffle: unknown): Draw {
  return {
    ...(raffle as unknown as Draw),
    guaranteedPrize: raffle.guaranteedPrize.toString(),
    ticketPrice: raffle.ticketPrice.toString(),
    currentPrizePool: raffle.currentPrizePool.toString(),
  };
}
