import { ActionType } from "./actionType";

export interface IAddMember {
  type: ActionType.ADDMEMBER;
  name: string;
  powerful: number;
  pure: number;
  cool: number;
  belong: string;
}

export type addAction = IAddMember;
