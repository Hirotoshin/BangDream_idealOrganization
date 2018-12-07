import { addAction } from "../action/action";
import { ActionType } from "../action/actionType";

export interface IMemberState {
  name: string;
  paformance: number;
  technique: number;
  visual: number;
  belong: string;
  id: string;
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
        id: action.id,
        name: action.name,
        paformance: action.paformance,
        technique: action.technique,
        visual: action.visual
      };
      afterState.push(memberState);
      return afterState;
    default:
      return state;
  }
}

export default MemberReducer;
