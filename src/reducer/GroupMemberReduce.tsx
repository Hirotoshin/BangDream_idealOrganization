import { groupMemberAction } from "../action/action";
import { ActionGroupType } from "../action/actionType";

const initialState: string[] = [];

function GroupMemberReduce(
  state: string[] = initialState,
  action: groupMemberAction
) {
  switch (action.type) {
    case ActionGroupType.GROUPMEMBER:
      const afterState: string[] = action.Members;
      return afterState;
    default:
      return state;
  }
}

export default GroupMemberReduce;
