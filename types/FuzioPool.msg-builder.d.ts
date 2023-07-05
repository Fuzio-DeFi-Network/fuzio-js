/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { ExecuteMsg, QueryMsg } from "./FuzioPool.types";
import { CamelCasedProperties } from "type-fest";
export declare abstract class FuzioPoolExecuteMsgBuilder {
    static addLiquidity: ({ expiration, maxToken2, minLiquidity, token1Amount }: CamelCasedProperties<Extract<ExecuteMsg, {
        add_liquidity: unknown;
    }>["add_liquidity"]>) => ExecuteMsg;
    static removeLiquidity: ({ amount, expiration, minToken1, minToken2 }: CamelCasedProperties<Extract<ExecuteMsg, {
        remove_liquidity: unknown;
    }>["remove_liquidity"]>) => ExecuteMsg;
    static swap: ({ expiration, inputAmount, inputToken, minOutput }: CamelCasedProperties<Extract<ExecuteMsg, {
        swap: unknown;
    }>["swap"]>) => ExecuteMsg;
    static passThroughSwap: ({ expiration, inputToken, inputTokenAmount, outputAmmAddress, outputMinToken }: CamelCasedProperties<Extract<ExecuteMsg, {
        pass_through_swap: unknown;
    }>["pass_through_swap"]>) => ExecuteMsg;
    static swapAndSendTo: ({ expiration, inputAmount, inputToken, minToken, recipient }: CamelCasedProperties<Extract<ExecuteMsg, {
        swap_and_send_to: unknown;
    }>["swap_and_send_to"]>) => ExecuteMsg;
    static updateConfig: ({ devWalletLists, feePercentDenominator, feePercentNumerator, owner }: CamelCasedProperties<Extract<ExecuteMsg, {
        update_config: unknown;
    }>["update_config"]>) => ExecuteMsg;
}
export declare abstract class FuzioPoolQueryMsgBuilder {
    static balance: ({ address }: CamelCasedProperties<Extract<QueryMsg, {
        balance: unknown;
    }>["balance"]>) => QueryMsg;
    static info: () => QueryMsg;
    static token1ForToken2Price: ({ token1Amount }: CamelCasedProperties<Extract<QueryMsg, {
        token1_for_token2_price: unknown;
    }>["token1_for_token2_price"]>) => QueryMsg;
    static token2ForToken1Price: ({ token2Amount }: CamelCasedProperties<Extract<QueryMsg, {
        token2_for_token1_price: unknown;
    }>["token2_for_token1_price"]>) => QueryMsg;
    static fee: () => QueryMsg;
}