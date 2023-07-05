/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export type Uint128 = string;
export type Denom = {
    native: string;
} | {
    cw20: Addr;
};
export type Addr = string;
export interface InstantiateMsg {
    distribution_schedule: Schedule[];
    lock_duration: number;
    lp_token_contract: string;
    reward_token: Denom[];
}
export interface Schedule {
    amount: Uint128;
    end_time: number;
    start_time: number;
    [k: string]: unknown;
}
export type ExecuteMsg = {
    receive: Cw20ReceiveMsg;
} | {
    unbond: {
        amount: Uint128;
    };
} | {
    withdraw: {};
} | {
    redeem: {};
} | {
    update_admin: {
        admin: string;
    };
} | {
    update_config: {
        distribution_schedule: Schedule[];
    };
} | {
    update_token_contract: {
        lp_token_contract: string;
        reward_token: Denom[];
    };
} | {
    update_tokens_and_distribution: {
        distribution_schedule: Schedule[];
        lp_token_contract: string;
        reward_token: Denom[];
    };
} | {
    update_lock_duration: {
        lock_duration: number;
    };
};
export type Binary = string;
export interface Cw20ReceiveMsg {
    amount: Uint128;
    msg: Binary;
    sender: string;
}
export type QueryMsg = {
    config: {};
} | {
    state: {
        block_time?: number | null;
    };
} | {
    staker_info: {
        staker: string;
    };
} | {
    all_stakers: {
        limit?: number | null;
        start_after?: string | null;
    };
} | {
    unbonding_info: {
        limit?: number | null;
        staker: string;
        start_after?: number | null;
    };
};
export type Decimal = string;
export interface StakersListResponse {
    stakers_list: StakerInfo[];
}
export interface StakerInfo {
    address: string;
    bond_amount: Uint128;
    pending_reward: Uint128[];
    reward_index: Decimal[];
    [k: string]: unknown;
}
export interface ConfigResponse {
    admin: string;
    distribution_schedule: Schedule[];
    lock_duration: number;
    lp_token_contract: string;
    reward_token: Denom[];
}
export interface StakerInfoResponse {
    bond_amount: Uint128;
    pending_reward: Uint128[];
    reward_index: Decimal[];
    staker: string;
    total_earned: Uint128[];
}
export interface StateResponse {
    global_reward_index: Decimal[];
    last_distributed: number;
    total_bond_amount: Uint128;
}
export interface UnbondingInfoResponse {
    crr_time: number;
    unbonding_info: UnbondingInfo[];
}
export interface UnbondingInfo {
    address: string;
    amount: Uint128;
    time: number;
    [k: string]: unknown;
}
export type FuzioStakingExecuteMsg = ExecuteMsg;
