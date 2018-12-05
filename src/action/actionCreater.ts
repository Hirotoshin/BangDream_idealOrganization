import { addAction, IAddMember } from "./action";
import { ActionType } from "./actionType";

export function addmember(
  name: string,
  powerful: number,
  pure: number,
  cool: number,
  belong: string
): IAddMember {
  return {
    belong,
    cool,
    name,
    powerful,
    pure,
    type: ActionType.ADDMEMBER
  };
}
