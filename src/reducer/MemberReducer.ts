import { addAction } from "../action/action";
import { ActionType } from "../action/actionType";

export interface IMemberState {
  name: string;
  paformance: number;
  technique: number;
  visual: number;
  belong: string;
  id: number;
}
const initialState: IMemberState[] = [
  {
    belong: "Roselia",
    id: 0,
    name: "TestMember",
    paformance: 100,
    technique: 100,
    visual: 100
  }
];

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
    case ActionType.UPDATEMEMBER:
      return afterState[action.id];
    default:
      return state;
  }
}

export default MemberReducer;
