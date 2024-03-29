/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { WalletInfo, Chain, Coin } from "./FuzioPoolList.types";
export interface FuzioPoolListMsg {
    contractAddress: string;
    sender: string;
    createPool: ({ burnRatio, swapFee, token1, token2 }: {
        burnRatio: number;
        swapFee: string;
        token1: string;
        token2: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    listToken: ({ chain, decimal, denom, fullName, isIbcCoin, isNativeCoin, logoUri, symbol }: {
        chain: Chain;
        decimal: number;
        denom: string;
        fullName: string;
        isIbcCoin: boolean;
        isNativeCoin: boolean;
        logoUri: string;
        symbol: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    changeConfig: ({ burnFeePercent, devWalletLists, poolCreationFee, tokenListingFee }: {
        burnFeePercent: number;
        devWalletLists: WalletInfo[];
        poolCreationFee: Coin;
        tokenListingFee: Coin;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class FuzioPoolListMsgComposer implements FuzioPoolListMsg {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    createPool: ({ burnRatio, swapFee, token1, token2 }: {
        burnRatio: number;
        swapFee: string;
        token1: string;
        token2: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    listToken: ({ chain, decimal, denom, fullName, isIbcCoin, isNativeCoin, logoUri, symbol }: {
        chain: Chain;
        decimal: number;
        denom: string;
        fullName: string;
        isIbcCoin: boolean;
        isNativeCoin: boolean;
        logoUri: string;
        symbol: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    changeConfig: ({ burnFeePercent, devWalletLists, poolCreationFee, tokenListingFee }: {
        burnFeePercent: number;
        devWalletLists: WalletInfo[];
        poolCreationFee: Coin;
        tokenListingFee: Coin;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
