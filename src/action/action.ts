import { ActionType } from "./actionType";

export interface IAddMember {
  type: ActionType.ADDMEMBER;
  name: string;
  paformance: number;
  technique: number;
  visual: number;
  belong: string;
  id: string;
}

export type addAction = IAddMember;
