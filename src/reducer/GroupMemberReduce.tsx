import { groupMemberAction } from "../action/action";
import { ActionGroupType } from "../action/actionType";
import { IGroupMember } from "../Interface";

const initialState: IGroupMember[] = [
  {
    id: 0,
    name: "test"
  }
];

function GroupMemberReduce(
  state: IGroupMember[] = initialState,
  action: groupMemberAction
) {
  switch (action.type) {
    case ActionGroupType.GROUPMEMBER:
      const afterState: IGroupMember = {
        id: action.id,
        name: action.name
      };
      state.push(afterState);
      return state;
    default:
      return state;
  }
}

export default GroupMemberReduce;
