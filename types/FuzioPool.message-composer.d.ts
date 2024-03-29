/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { Uint128, WalletInfo, Expiration, TokenSelect } from "./FuzioPool.types";
export interface FuzioPoolMsg {
    contractAddress: string;
    sender: string;
    addLiquidity: ({ expiration, maxToken2, minLiquidity, token1Amount }: {
        expiration?: Expiration;
        maxToken2: Uint128;
        minLiquidity: Uint128;
        token1Amount: Uint128;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeLiquidity: ({ amount, expiration, minToken1, minToken2 }: {
        amount: Uint128;
        expiration?: Expiration;
        minToken1: Uint128;
        minToken2: Uint128;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    swap: ({ expiration, inputAmount, inputToken, minOutput }: {
        expiration?: Expiration;
        inputAmount: Uint128;
        inputToken: TokenSelect;
        minOutput: Uint128;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    passThroughSwap: ({ expiration, inputToken, inputTokenAmount, outputAmmAddress, outputMinToken }: {
        expiration?: Expiration;
        inputToken: TokenSelect;
        inputTokenAmount: Uint128;
        outputAmmAddress: string;
        outputMinToken: Uint128;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    swapAndSendTo: ({ expiration, inputAmount, inputToken, minToken, recipient }: {
        expiration?: Expiration;
        inputAmount: Uint128;
        inputToken: TokenSelect;
        minToken: Uint128;
        recipient: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateConfig: ({ devWalletLists, feePercentDenominator, feePercentNumerator, owner }: {
        devWalletLists: WalletInfo[];
        feePercentDenominator: Uint128;
        feePercentNumerator: Uint128;
        owner?: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class FuzioPoolMsgComposer implements FuzioPoolMsg {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    addLiquidity: ({ expiration, maxToken2, minLiquidity, token1Amount }: {
        expiration?: Expiration | undefined;
        maxToken2: Uint128;
        minLiquidity: Uint128;
        token1Amount: Uint128;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeLiquidity: ({ amount, expiration, minToken1, minToken2 }: {
        amount: Uint128;
        expiration?: Expiration | undefined;
        minToken1: Uint128;
        minToken2: Uint128;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    swap: ({ expiration, inputAmount, inputToken, minOutput }: {
        expiration?: Expiration | undefined;
        inputAmount: Uint128;
        inputToken: TokenSelect;
        minOutput: Uint128;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    passThroughSwap: ({ expiration, inputToken, inputTokenAmount, outputAmmAddress, outputMinToken }: {
        expiration?: Expiration | undefined;
        inputToken: TokenSelect;
        inputTokenAmount: Uint128;
        outputAmmAddress: string;
        outputMinToken: Uint128;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    swapAndSendTo: ({ expiration, inputAmount, inputToken, minToken, recipient }: {
        expiration?: Expiration | undefined;
        inputAmount: Uint128;
        inputToken: TokenSelect;
        minToken: Uint128;
        recipient: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateConfig: ({ devWalletLists, feePercentDenominator, feePercentNumerator, owner }: {
        devWalletLists: WalletInfo[];
        feePercentDenominator: Uint128;
        feePercentNumerator: Uint128;
        owner?: string | undefined;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
