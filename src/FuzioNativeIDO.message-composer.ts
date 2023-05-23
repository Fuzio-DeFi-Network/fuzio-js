/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Uint128, InstantiateMsg, IdoInfo, Description, Product, Socials, Team, TeamMember, Coin, ExecuteMsg, QueryMsg, TimeInfo, SaleInfo, Addr, Decimal, State, WalletInfo, UserInfoResponse, UserInfo, UserInfosResponse } from "./FuzioNativeIDO.types";
export interface FuzioNativeIDOMessage {
  contractAddress: string;
  sender: string;
  buyToken: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  claimToken: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  changeAdmin: ({
    address
  }: {
    address: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  withdrawTokenNotSoldByAdmin: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class FuzioNativeIDOMessageComposer implements FuzioNativeIDOMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.buyToken = this.buyToken.bind(this);
    this.claimToken = this.claimToken.bind(this);
    this.changeAdmin = this.changeAdmin.bind(this);
    this.withdrawTokenNotSoldByAdmin = this.withdrawTokenNotSoldByAdmin.bind(this);
  }

  buyToken = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          buy_token: {}
        })),
        funds
      })
    };
  };
  claimToken = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          claim_token: {}
        })),
        funds
      })
    };
  };
  changeAdmin = ({
    address
  }: {
    address: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          change_admin: {
            address
          }
        })),
        funds
      })
    };
  };
  withdrawTokenNotSoldByAdmin = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          withdraw_token_not_sold_by_admin: {}
        })),
        funds
      })
    };
  };
}