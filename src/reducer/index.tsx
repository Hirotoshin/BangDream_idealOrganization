import { combineReducers } from "redux";
import { IMemberState } from "../Interface";
import GroupMemberReduce from "./GroupMemberReduce";
import MemberReducer from "./MemberReducer";

export interface IrootState {
  addmember: IMemberState[];
  membergroup: string[];
}

export const rootReducer = combineReducers({
  addmember: MemberReducer,
  membergroup: GroupMemberReduce
});
