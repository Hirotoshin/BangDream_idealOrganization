import { combineReducers } from "redux";
import { IGroupMember, IMemberState } from "../Interface";
import GroupMemberReduce from "./GroupMemberReduce";
import MemberReducer from "./MemberReducer";

export interface IrootState {
  addmember: IMemberState[];
  membergroup: IGroupMember[];
}

export const rootReducer = combineReducers({
  addmember: MemberReducer,
  membergroup: GroupMemberReduce
});
