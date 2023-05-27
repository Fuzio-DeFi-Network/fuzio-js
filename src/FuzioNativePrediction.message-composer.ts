/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Addr, Decimal, Uint128, InstantiateMsg, Config, WalletInfo, ExecuteMsg, QueryMsg, MigrateMsg, Timestamp, Uint64, Direction, FinishedRound, AdminsResponse, ClaimInfoResponse, ClaimInfo, RoundUsersResponse, BetInfo, MyCurrentPositionResponse, MyGameResponse, PendingRewardResponse, StatusResponse, NextRound, LiveRound } from "./FuzioNativePrediction.types";
export interface FuzioNativePredictionMessage {
  contractAddress: string;
  sender: string;
  updateConfig: ({
    config
  }: {
    config: Config;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  betBull: ({
    amount,
    roundId
  }: {
    amount: Uint128;
    roundId: Uint128;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  betBear: ({
    amount,
    roundId
  }: {
    amount: Uint128;
    roundId: Uint128;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  closeRound: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  collectWinnings: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  collectionWinningRound: ({
    roundId
  }: {
    roundId: Uint128;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  halt: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  resume: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  addAdmin: ({
    newAdmin
  }: {
    newAdmin: Addr;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeAdmin: ({
    oldAdmin
  }: {
    oldAdmin: Addr;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  modifyDevWallet: ({
    newDevWallets
  }: {
    newDevWallets: WalletInfo[];
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class FuzioNativePredictionMessageComposer implements FuzioNativePredictionMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateConfig = this.updateConfig.bind(this);
    this.betBull = this.betBull.bind(this);
    this.betBear = this.betBear.bind(this);
    this.closeRound = this.closeRound.bind(this);
    this.collectWinnings = this.collectWinnings.bind(this);
    this.collectionWinningRound = this.collectionWinningRound.bind(this);
    this.halt = this.halt.bind(this);
    this.resume = this.resume.bind(this);
    this.addAdmin = this.addAdmin.bind(this);
    this.removeAdmin = this.removeAdmin.bind(this);
    this.modifyDevWallet = this.modifyDevWallet.bind(this);
  }

  updateConfig = ({
    config
  }: {
    config: Config;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_config: {
            config
          }
        })),
        funds
      })
    };
  };
  betBull = ({
    amount,
    roundId
  }: {
    amount: Uint128;
    roundId: Uint128;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          bet_bull: {
            amount,
            round_id: roundId
          }
        })),
        funds
      })
    };
  };
  betBear = ({
    amount,
    roundId
  }: {
    amount: Uint128;
    roundId: Uint128;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          bet_bear: {
            amount,
            round_id: roundId
          }
        })),
        funds
      })
    };
  };
  closeRound = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          close_round: {}
        })),
        funds
      })
    };
  };
  collectWinnings = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          collect_winnings: {}
        })),
        funds
      })
    };
  };
  collectionWinningRound = ({
    roundId
  }: {
    roundId: Uint128;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          collection_winning_round: {
            round_id: roundId
          }
        })),
        funds
      })
    };
  };
  halt = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          halt: {}
        })),
        funds
      })
    };
  };
  resume = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          resume: {}
        })),
        funds
      })
    };
  };
  addAdmin = ({
    newAdmin
  }: {
    newAdmin: Addr;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          add_admin: {
            new_admin: newAdmin
          }
        })),
        funds
      })
    };
  };
  removeAdmin = ({
    oldAdmin
  }: {
    oldAdmin: Addr;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_admin: {
            old_admin: oldAdmin
          }
        })),
        funds
      })
    };
  };
  modifyDevWallet = ({
    newDevWallets
  }: {
    newDevWallets: WalletInfo[];
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          modify_dev_wallet: {
            new_dev_wallets: newDevWallets
          }
        })),
        funds
      })
    };
  };
}