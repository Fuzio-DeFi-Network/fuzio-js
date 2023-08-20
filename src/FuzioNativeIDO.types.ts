/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Uint128 = string;
export interface InstantiateMsg {
  admin: string;
  claim_start: number;
  ido_page: IdoInfo;
  is_native: boolean;
  presale_period: number;
  presale_start: number;
  token_address_or_denom: string;
  token_cost: Coin;
  total_supply: Uint128;
  vesting_step_period: number;
}
export interface IdoInfo {
  problem: Description;
  product: Product;
  socials?: Socials | null;
  solution: Description;
  team: Team;
  website?: string | null;
  whitepaper?: string | null;
}
export interface Description {
  desc: string;
  header: string;
}
export interface Product {
  banner_images: string[];
  full_name: string;
  header: string;
  highlights: string[];
  logo: string;
  long_desc: string;
  short_desc: string;
  token_symbol: string;
}
export interface Socials {
  discord: string;
  telegram: string;
  twitter: string;
}
export interface Team {
  header: string;
  members: TeamMember[];
}
export interface TeamMember {
  member_desc: string;
  member_name: string;
  member_role: string;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  buy_token: {};
} | {
  claim_token: {};
} | {
  change_admin: {
    address: string;
  };
} | {
  withdraw_token_not_sold_by_admin: {};
};
export type QueryMsg = {
  get_state_info: {};
} | {
  get_user_info: {
    address: string;
  };
} | {
  get_sale_info: {};
} | {
  get_claimable_amount: {
    address: string;
  };
} | {
  get_claimable_time: {
    address: string;
  };
} | {
  get_user_infos: {
    limit?: number | null;
    start_after?: string | null;
  };
};
export interface TimeInfo {
  claimable_time: number;
  crr_time: number;
}
export interface SaleInfo {
  earned_amount: Uint128;
  token_sold_amount: Uint128;
}
export type Addr = string;
export type Decimal = string;
export interface State {
  admin: string;
  claim_start: number;
  contract_admin: string;
  dev_wallet_list: WalletInfo[];
  fee: Uint128;
  ido_page: IdoInfo;
  is_native: boolean;
  presale_period: number;
  presale_start: number;
  token_address_or_denom: string;
  token_cost: Coin;
  total_supply: Uint128;
  vesting_step_period: number;
  withdrawn_not_sold: boolean;
}
export interface WalletInfo {
  address: Addr;
  ratio: Decimal;
}
export interface UserInfoResponse {
  user_info: UserInfo;
}
export interface UserInfo {
  address: string;
  claimed_amount: Uint128;
  last_received: number;
  sent_amount: Uint128;
  total_claim_amount: Uint128;
  vesting_step: number;
}
export interface UserInfosResponse {
  user_info: UserInfo[];
}
export type FuzioNativeIDOExecuteMsg = ExecuteMsg;