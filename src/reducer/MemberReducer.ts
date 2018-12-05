import { addAction } from "../action/action";
import { ActionType } from "../action/actionType";

export interface IMemberState {
  name: string;
  powerful: number;
  pure: number;
  cool: number;
  belong: string;
  id: number;
}
const initialState: IMemberState[] = [];

function MemberReducer(
  state: IMemberState[] = initialState,
  action: addAction
) {
  const afterState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ActionType.ADDMEMBER:
      const memberState: IMemberState = {
        belong: action.belong,
        cool: action.cool,
        id: action.id,
        name: action.name,
        powerful: action.powerful,
        pure: action.pure
      };
      afterState.push(memberState);
      return afterState;
    default:
      return state;
  }
}

export default MemberReducer;
