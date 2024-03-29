/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { ExecuteMsg, QueryMsg } from "./FuzioNativeIDO.types";
export declare abstract class FuzioNativeIDOExecuteMsgBuilder {
    static buyToken: () => ExecuteMsg;
    static claimToken: () => ExecuteMsg;
    static changeAdmin: ({ address }: CamelCasedProperties<{
        address: string;
    }>) => ExecuteMsg;
    static withdrawTokenNotSoldByAdmin: () => ExecuteMsg;
}
export declare abstract class FuzioNativeIDOQueryMsgBuilder {
    static getStateInfo: () => QueryMsg;
    static getUserInfo: ({ address }: CamelCasedProperties<{
        address: string;
    }>) => QueryMsg;
    static getSaleInfo: () => QueryMsg;
    static getClaimableAmount: ({ address }: CamelCasedProperties<{
        address: string;
    }>) => QueryMsg;
    static getClaimableTime: ({ address }: CamelCasedProperties<{
        address: string;
    }>) => QueryMsg;
    static getUserInfos: ({ limit, startAfter }: CamelCasedProperties<{
        limit?: number | null | undefined;
        start_after?: string | null | undefined;
    }>) => QueryMsg;
}
