import { IAddMember } from "./action";
import { ActionType } from "./actionType";

export function addmember(
  name: string,
  powerful: number,
  pure: number,
  cool: number,
  belong: string,
  id: number
): IAddMember {
  return {
    belong,
    cool,
    id,
    name,
    powerful,
    pure,
    type: ActionType.ADDMEMBER
  };
}
