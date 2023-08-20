/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Uint128, InstantiateMsg, IdoInfo, Description, Product, Socials, Team, TeamMember, Coin, ExecuteMsg, QueryMsg, TimeInfo, SaleInfo, Addr, Decimal, State, WalletInfo, UserInfoResponse, UserInfo, UserInfosResponse } from "./FuzioNativeIDO.types";
import { FuzioNativeIDOQueryClient, FuzioNativeIDOClient } from "./FuzioNativeIDO.client";
export const fuzioNativeIDOQueryKeys = {
  contract: ([{
    contract: "fuzioNativeIDO"
  }] as const),
  address: (contractAddress: string) => ([{ ...fuzioNativeIDOQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  getStateInfo: (contractAddress: string, args?: Record<string, unknown>) => ([{ ...fuzioNativeIDOQueryKeys.address(contractAddress)[0],
    method: "get_state_info",
    args
  }] as const),
  getUserInfo: (contractAddress: string, args?: Record<string, unknown>) => ([{ ...fuzioNativeIDOQueryKeys.address(contractAddress)[0],
    method: "get_user_info",
    args
  }] as const),
  getSaleInfo: (contractAddress: string, args?: Record<string, unknown>) => ([{ ...fuzioNativeIDOQueryKeys.address(contractAddress)[0],
    method: "get_sale_info",
    args
  }] as const),
  getClaimableAmount: (contractAddress: string, args?: Record<string, unknown>) => ([{ ...fuzioNativeIDOQueryKeys.address(contractAddress)[0],
    method: "get_claimable_amount",
    args
  }] as const),
  getClaimableTime: (contractAddress: string, args?: Record<string, unknown>) => ([{ ...fuzioNativeIDOQueryKeys.address(contractAddress)[0],
    method: "get_claimable_time",
    args
  }] as const),
  getUserInfos: (contractAddress: string, args?: Record<string, unknown>) => ([{ ...fuzioNativeIDOQueryKeys.address(contractAddress)[0],
    method: "get_user_infos",
    args
  }] as const)
};
export const fuzioNativeIDOQueries = {
  getStateInfo: <TData = State,>({
    client,
    options
  }: FuzioNativeIDOGetStateInfoQuery<TData>): UseQueryOptions<State, Error, TData> => ({
    queryKey: fuzioNativeIDOQueryKeys.getStateInfo(client?.contractAddress),
    queryFn: () => client.getStateInfo(),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  getUserInfo: <TData = UserInfoResponse,>({
    client,
    args,
    options
  }: FuzioNativeIDOGetUserInfoQuery<TData>): UseQueryOptions<UserInfoResponse, Error, TData> => ({
    queryKey: fuzioNativeIDOQueryKeys.getUserInfo(client?.contractAddress, args),
    queryFn: () => client.getUserInfo({
      address: args.address
    }),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  getSaleInfo: <TData = SaleInfo,>({
    client,
    options
  }: FuzioNativeIDOGetSaleInfoQuery<TData>): UseQueryOptions<SaleInfo, Error, TData> => ({
    queryKey: fuzioNativeIDOQueryKeys.getSaleInfo(client?.contractAddress),
    queryFn: () => client.getSaleInfo(),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  getClaimableAmount: <TData = Uint128,>({
    client,
    args,
    options
  }: FuzioNativeIDOGetClaimableAmountQuery<TData>): UseQueryOptions<Uint128, Error, TData> => ({
    queryKey: fuzioNativeIDOQueryKeys.getClaimableAmount(client?.contractAddress, args),
    queryFn: () => client.getClaimableAmount({
      address: args.address
    }),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  getClaimableTime: <TData = TimeInfo,>({
    client,
    args,
    options
  }: FuzioNativeIDOGetClaimableTimeQuery<TData>): UseQueryOptions<TimeInfo, Error, TData> => ({
    queryKey: fuzioNativeIDOQueryKeys.getClaimableTime(client?.contractAddress, args),
    queryFn: () => client.getClaimableTime({
      address: args.address
    }),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  getUserInfos: <TData = UserInfosResponse,>({
    client,
    args,
    options
  }: FuzioNativeIDOGetUserInfosQuery<TData>): UseQueryOptions<UserInfosResponse, Error, TData> => ({
    queryKey: fuzioNativeIDOQueryKeys.getUserInfos(client?.contractAddress, args),
    queryFn: () => client.getUserInfos({
      limit: args.limit,
      startAfter: args.startAfter
    }),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface FuzioNativeIDOReactQuery<TResponse, TData = TResponse> {
  client: FuzioNativeIDOQueryClient;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface FuzioNativeIDOGetUserInfosQuery<TData> extends FuzioNativeIDOReactQuery<UserInfosResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useFuzioNativeIDOGetUserInfosQuery<TData = UserInfosResponse>({
  client,
  args,
  options
}: FuzioNativeIDOGetUserInfosQuery<TData>) {
  return useQuery<UserInfosResponse, Error, TData>(fuzioNativeIDOQueryKeys.getUserInfos(client.contractAddress, args), () => client.getUserInfos({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface FuzioNativeIDOGetClaimableTimeQuery<TData> extends FuzioNativeIDOReactQuery<TimeInfo, TData> {
  args: {
    address: string;
  };
}
export function useFuzioNativeIDOGetClaimableTimeQuery<TData = TimeInfo>({
  client,
  args,
  options
}: FuzioNativeIDOGetClaimableTimeQuery<TData>) {
  return useQuery<TimeInfo, Error, TData>(fuzioNativeIDOQueryKeys.getClaimableTime(client.contractAddress, args), () => client.getClaimableTime({
    address: args.address
  }), options);
}
export interface FuzioNativeIDOGetClaimableAmountQuery<TData> extends FuzioNativeIDOReactQuery<Uint128, TData> {
  args: {
    address: string;
  };
}
export function useFuzioNativeIDOGetClaimableAmountQuery<TData = Uint128>({
  client,
  args,
  options
}: FuzioNativeIDOGetClaimableAmountQuery<TData>) {
  return useQuery<Uint128, Error, TData>(fuzioNativeIDOQueryKeys.getClaimableAmount(client.contractAddress, args), () => client.getClaimableAmount({
    address: args.address
  }), options);
}
export interface FuzioNativeIDOGetSaleInfoQuery<TData> extends FuzioNativeIDOReactQuery<SaleInfo, TData> {}
export function useFuzioNativeIDOGetSaleInfoQuery<TData = SaleInfo>({
  client,
  options
}: FuzioNativeIDOGetSaleInfoQuery<TData>) {
  return useQuery<SaleInfo, Error, TData>(fuzioNativeIDOQueryKeys.getSaleInfo(client.contractAddress), () => client.getSaleInfo(), options);
}
export interface FuzioNativeIDOGetUserInfoQuery<TData> extends FuzioNativeIDOReactQuery<UserInfoResponse, TData> {
  args: {
    address: string;
  };
}
export function useFuzioNativeIDOGetUserInfoQuery<TData = UserInfoResponse>({
  client,
  args,
  options
}: FuzioNativeIDOGetUserInfoQuery<TData>) {
  return useQuery<UserInfoResponse, Error, TData>(fuzioNativeIDOQueryKeys.getUserInfo(client.contractAddress, args), () => client.getUserInfo({
    address: args.address
  }), options);
}
export interface FuzioNativeIDOGetStateInfoQuery<TData> extends FuzioNativeIDOReactQuery<State, TData> {}
export function useFuzioNativeIDOGetStateInfoQuery<TData = State>({
  client,
  options
}: FuzioNativeIDOGetStateInfoQuery<TData>) {
  return useQuery<State, Error, TData>(fuzioNativeIDOQueryKeys.getStateInfo(client.contractAddress), () => client.getStateInfo(), options);
}
export interface FuzioNativeIDOWithdrawTokenNotSoldByAdminMutation {
  client: FuzioNativeIDOClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useFuzioNativeIDOWithdrawTokenNotSoldByAdminMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FuzioNativeIDOWithdrawTokenNotSoldByAdminMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, FuzioNativeIDOWithdrawTokenNotSoldByAdminMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.withdrawTokenNotSoldByAdmin(fee, memo, funds), options);
}
export interface FuzioNativeIDOChangeAdminMutation {
  client: FuzioNativeIDOClient;
  msg: {
    address: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useFuzioNativeIDOChangeAdminMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FuzioNativeIDOChangeAdminMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, FuzioNativeIDOChangeAdminMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.changeAdmin(msg, fee, memo, funds), options);
}
export interface FuzioNativeIDOClaimTokenMutation {
  client: FuzioNativeIDOClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useFuzioNativeIDOClaimTokenMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FuzioNativeIDOClaimTokenMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, FuzioNativeIDOClaimTokenMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.claimToken(fee, memo, funds), options);
}
export interface FuzioNativeIDOBuyTokenMutation {
  client: FuzioNativeIDOClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useFuzioNativeIDOBuyTokenMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FuzioNativeIDOBuyTokenMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, FuzioNativeIDOBuyTokenMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.buyToken(fee, memo, funds), options);
}