/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { WalletInfo, Chain, Coin, ConfigResp, PoolsResp, TokensResp } from "./FuzioPoolList.types";
import { FuzioPoolListQueryClient, FuzioPoolListClient } from "./FuzioPoolList.client";
export declare const fuzioPoolListQueryKeys: {
    contract: readonly [{
        readonly contract: "fuzioPoolList";
    }];
    address: (contractAddress: string) => readonly [{
        readonly address: string;
        readonly contract: "fuzioPoolList";
    }];
    tokens: (contractAddress: string, args?: Record<string, unknown>) => readonly [{
        readonly method: "tokens";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string;
        readonly contract: "fuzioPoolList";
    }];
    pools: (contractAddress: string, args?: Record<string, unknown>) => readonly [{
        readonly method: "pools";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string;
        readonly contract: "fuzioPoolList";
    }];
    config: (contractAddress: string, args?: Record<string, unknown>) => readonly [{
        readonly method: "config";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string;
        readonly contract: "fuzioPoolList";
    }];
};
export declare const fuzioPoolListQueries: {
    tokens: <TData = TokensResp>({ client, options }: FuzioPoolListTokensQuery<TData>) => UseQueryOptions<TokensResp, Error, TData>;
    pools: <TData_1 = PoolsResp>({ client, options }: FuzioPoolListPoolsQuery<TData_1>) => UseQueryOptions<PoolsResp, Error, TData_1>;
    config: <TData_2 = ConfigResp>({ client, options }: FuzioPoolListConfigQuery<TData_2>) => UseQueryOptions<ConfigResp, Error, TData_2>;
};
export interface FuzioPoolListReactQuery<TResponse, TData = TResponse> {
    client: FuzioPoolListQueryClient;
    options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
}
export interface FuzioPoolListConfigQuery<TData> extends FuzioPoolListReactQuery<ConfigResp, TData> {
}
export declare function useFuzioPoolListConfigQuery<TData = ConfigResp>({ client, options }: FuzioPoolListConfigQuery<TData>): any;
export interface FuzioPoolListPoolsQuery<TData> extends FuzioPoolListReactQuery<PoolsResp, TData> {
}
export declare function useFuzioPoolListPoolsQuery<TData = PoolsResp>({ client, options }: FuzioPoolListPoolsQuery<TData>): any;
export interface FuzioPoolListTokensQuery<TData> extends FuzioPoolListReactQuery<TokensResp, TData> {
}
export declare function useFuzioPoolListTokensQuery<TData = TokensResp>({ client, options }: FuzioPoolListTokensQuery<TData>): any;
export interface FuzioPoolListChangeConfigMutation {
    client: FuzioPoolListClient;
    msg: {
        burnFeePercent: number;
        devWalletLists: WalletInfo[];
        poolCreationFee: Coin;
        tokenListingFee: Coin;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useFuzioPoolListChangeConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FuzioPoolListChangeConfigMutation>, "mutationFn">): any;
export interface FuzioPoolListListTokenMutation {
    client: FuzioPoolListClient;
    msg: {
        chain: Chain;
        decimal: number;
        denom: string;
        fullName: string;
        isIbcCoin: boolean;
        isNativeCoin: boolean;
        logoUri: string;
        symbol: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useFuzioPoolListListTokenMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FuzioPoolListListTokenMutation>, "mutationFn">): any;
export interface FuzioPoolListCreatePoolMutation {
    client: FuzioPoolListClient;
    msg: {
        burnRatio: number;
        swapFee: string;
        token1: string;
        token2: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useFuzioPoolListCreatePoolMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FuzioPoolListCreatePoolMutation>, "mutationFn">): any;