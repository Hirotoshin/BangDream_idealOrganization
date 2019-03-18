import { IMemberState } from "../Interface";
import { ActionGroupType, ActionType } from "./actionType";

export interface IAddMember {
  type: ActionType.ADDMEMBER;
  name: string;
  paformance: number;
  technique: number;
  visual: number;
  belong: string;
  id: number;
  detail: string;
}

export interface IUpdateMember {
  type: ActionType.UPDATEMEMBER;
  updateArgsObj: IMemberState;
  id: number;
}
export interface IGroupMemberAction {
  type: ActionGroupType.GROUPMEMBER;
  Members: string[];
}

export type addAction = IAddMember | IUpdateMember;
export type groupMemberAction = IGroupMemberAction;
