import { IMemberState } from "../Interface";
import { IAddMember, IGroupMemberAction, IUpdateMember } from "./action";
import { ActionGroupType, ActionType } from "./actionType";

export function addmember(
  name: string,
  paformance: number,
  technique: number,
  visual: number,
  belong: string,
  id: number
): IAddMember {
  return {
    belong,
    id,
    name,
    paformance,
    technique,
    type: ActionType.ADDMEMBER,
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

export function groupMember(id: number, name: string): IGroupMemberAction {
  return {
    id,
    name,
    type: ActionGroupType.GROUPMEMBER
  };
}
