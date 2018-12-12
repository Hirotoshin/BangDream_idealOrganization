import { IAddMember, IupdateArgs, IUpdateMember } from "./action";
import { ActionType } from "./actionType";

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

export function updateMember(updateArgsObj: IupdateArgs): IUpdateMember {
  return {
    type: ActionType.UPDATEMEMBER,
    updateArgsObj
  };
}
