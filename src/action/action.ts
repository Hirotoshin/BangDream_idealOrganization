import { ActionType } from "./actionType";

export interface IAddMember {
  type: ActionType.ADDMEMBER;
  name: string;
  paformance: number;
  technique: number;
  visual: number;
  belong: string;
  id: number;
}

export interface IupdateArgs {
  belong: string;
  id: number;
  name: string;
  paformance: number;
  technique: number;
  visual: number;
}

export interface IUpdateMember {
  type: ActionType.UPDATEMEMBER;
  updateArgsObj: IupdateArgs;
}

export type addAction = IAddMember | IUpdateMember;
