import { Chain } from "@rainbow-me/rainbowkit";

export interface AppAccount {
  id?: string;
  address: string;
  username?: string;
}

export interface AccountContextType {
  account: AppAccount | null;
  chain: Chain & {
    unsupported?: true;
    tokenAddress: string;
    factoryAddress: string;
  };
  connected: boolean;
  openConnectModal?: () => void;
  openAccountModal?: () => void;
  openChainModal?: () => void;
}

// Draw Types
export enum DrawType {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
}

export interface Draw {
  id: string;
  type: "DAILY" | "WEEKLY" | "MONTHLY";
  address: string;
  charityWallet: string;
  managementWallet: string;
  guaranteedPrize: number;
  ticketPrice: number;
  currentPrizePool: number;
  minTickets: bigint;
  maxTicketsPerUser: bigint;
  startTime: bigint;
  endTime: bigint;
  isActive: boolean;
  isComplete: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Props interface for the DrawsList component
export interface DrawsListProps {
  draws: Draw[];
  currentTab: DrawType;
}

// Helper type for filtering draws
export type DrawFilter = {
  type?: DrawType;
  isActive?: boolean;
  isComplete?: boolean;
};

// Response type for API endpoints
export interface DrawResponse {
  draws: Draw[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
}

// Type for draw creation
export interface CreateDrawInput {
  type: DrawType;
  address: string;
  guaranteedPrize: bigint;
  ticketPrice: bigint;
  startTime: bigint;
  endTime: bigint;
  charityWallet: string;
  managementWallet: string;
  minTickets: bigint;
  maxTicketsPerUser: bigint;
}

// Type for updating draw
export interface UpdateDrawInput {
  id: string;
  isActive?: boolean;
  isComplete?: boolean;
  currentPrizePool?: bigint;
  totalTickets?: bigint;
}

// Utility type for draw statistics
export interface DrawStats {
  totalPrizePool: bigint;
  totalParticipants: number;
  averageTicketsPerUser: number;
  timeRemaining: number;
}

// Custom error types
export class DrawError extends Error {
  constructor(
    message: string,
    public code: string,
    public status: number,
  ) {
    super(message);
    this.name = "DrawError";
  }
}

// Utility functions
export const isDrawActive = (draw: Draw): boolean => {
  const now = BigInt(Math.floor(Date.now() / 1000));
  return draw.isActive && now >= draw.startTime && now <= draw.endTime;
};

export const formatBigIntToString = (value: bigint): string => {
  return value.toString();
};
