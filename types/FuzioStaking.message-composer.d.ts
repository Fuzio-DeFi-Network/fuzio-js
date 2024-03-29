/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { Uint128, Denom, Schedule, Binary } from "./FuzioStaking.types";
export interface FuzioStakingMsg {
    contractAddress: string;
    sender: string;
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    unbond: ({ amount }: {
        amount: Uint128;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    withdraw: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    redeem: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateAdmin: ({ admin }: {
        admin: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateConfig: ({ distributionSchedule }: {
        distributionSchedule: Schedule[];
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateTokenContract: ({ lpTokenContract, rewardToken }: {
        lpTokenContract: string;
        rewardToken: Denom[];
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateTokensAndDistribution: ({ distributionSchedule, lpTokenContract, rewardToken }: {
        distributionSchedule: Schedule[];
        lpTokenContract: string;
        rewardToken: Denom[];
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateLockDuration: ({ lockDuration }: {
        lockDuration: number;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class FuzioStakingMsgComposer implements FuzioStakingMsg {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    unbond: ({ amount }: {
        amount: Uint128;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    withdraw: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    redeem: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateAdmin: ({ admin }: {
        admin: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateConfig: ({ distributionSchedule }: {
        distributionSchedule: Schedule[];
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateTokenContract: ({ lpTokenContract, rewardToken }: {
        lpTokenContract: string;
        rewardToken: Denom[];
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateTokensAndDistribution: ({ distributionSchedule, lpTokenContract, rewardToken }: {
        distributionSchedule: Schedule[];
        lpTokenContract: string;
        rewardToken: Denom[];
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateLockDuration: ({ lockDuration }: {
        lockDuration: number;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
