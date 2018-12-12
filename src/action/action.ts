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

export interface IUpdateMember {
  type: ActionType.UPDATEMEMBER;
  id: number;
}

export type addAction = IAddMember | IUpdateMember;
