import { IMemberState } from "../Interface";
import { IAddMember, IGroupMemberAction, IUpdateMember } from "./action";
import { ActionGroupType, ActionType } from "./actionType";

export function addmember(
  name: string,
  paformance: number,
  technique: number,
  visual: number,
  belong: string,
  id: number,
  detail: string,
  typeId: number
): IAddMember {
  return {
    belong,
    detail,
    id,
    name,
    paformance,
    technique,
    type: ActionType.ADDMEMBER,
    typeId,
    visual
  };
}

export function updateMember(
  updateArgsObj: IMemberState,
  id: number
): IUpdateMember {
  return {
    id,
    type: ActionType.UPDATEMEMBER,
    updateArgsObj
  };
}

export function groupMember(Members: string[]): IGroupMemberAction {
  return {
    Members,
    type: ActionGroupType.GROUPMEMBER
  };
}
