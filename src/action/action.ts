import { ActionType } from "./actionType";

export interface IAddMember {
  type: ActionType.ADDMEMBER;
  name: string;
  powerful: number;
  pure: number;
  cool: number;
  belong: string;
  id: number;
}

export type addAction = IAddMember;
