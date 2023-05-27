/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { WalletInfo, Chain, Coin } from "./FuzioPoolList.types";
export interface FuzioPoolListMessage {
    contractAddress: string;
    sender: string;
    createPool: ({ burnRatio, swapFee, token1, token2 }: {
        burnRatio: number;
        swapFee: string;
        token1: string;
        token2: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    listToken: ({ chain, decimal, denom, fullName, isIbcCoin, isNativeCoin, logoUri, symbol }: {
        chain: Chain;
        decimal: number;
        denom: string;
        fullName: string;
        isIbcCoin: boolean;
        isNativeCoin: boolean;
        logoUri: string;
        symbol: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    changeConfig: ({ burnFeePercent, devWalletLists, poolCreationFee, tokenListingFee }: {
        burnFeePercent: number;
        devWalletLists: WalletInfo[];
        poolCreationFee: Coin;
        tokenListingFee: Coin;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class FuzioPoolListMessageComposer implements FuzioPoolListMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    createPool: ({ burnRatio, swapFee, token1, token2 }: {
        burnRatio: number;
        swapFee: string;
        token1: string;
        token2: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    listToken: ({ chain, decimal, denom, fullName, isIbcCoin, isNativeCoin, logoUri, symbol }: {
        chain: Chain;
        decimal: number;
        denom: string;
        fullName: string;
        isIbcCoin: boolean;
        isNativeCoin: boolean;
        logoUri: string;
        symbol: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    changeConfig: ({ burnFeePercent, devWalletLists, poolCreationFee, tokenListingFee }: {
        burnFeePercent: number;
        devWalletLists: WalletInfo[];
        poolCreationFee: Coin;
        tokenListingFee: Coin;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
