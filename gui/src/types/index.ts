import { Address } from "viem";

export interface TokenBalance {
  contract: Address;
  balance: string;
  metadata: TokenMetadata;
}

export interface TokenMetadata {
  name: string;
  symbol: string;
  decimals: number;
}

export interface Tx {
  hash: `0x${string}`;
  from: Address;
  to: Address;
  value: string;
  data: string;
  blockNumber: number;
  position: number;
  status: number;
}

export interface Peer {
  origin: string;
  tab_id?: number;
  title?: string;
  socket: string;
  url: string;
  favicon: string;
}

export interface Pagination {
  page?: number;
  page_size?: number;
}

export interface Paginated<T> {
  pagination: Pagination;
  items: T[];
  last: boolean;
  total: number;
}

export type Affinity = { sticky: number } | "global" | "unset";
