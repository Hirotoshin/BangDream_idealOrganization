import { IAddMember } from "./action";
import { ActionType } from "./actionType";

export function addmember(
  name: string,
  paformance: number,
  technique: number,
  visual: number,
  belong: string,
  id: string
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
