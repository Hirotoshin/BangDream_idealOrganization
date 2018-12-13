import { addAction } from "../action/action";
import { ActionType } from "../action/actionType";
import { IMemberState } from "../Interface";

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
      const updateMemberState: IMemberState = {
        belong: action.updateArgsObj.belong,
        id: action.updateArgsObj.id,
        name: action.updateArgsObj.name,
        paformance: action.updateArgsObj.paformance,
        technique: action.updateArgsObj.technique,
        visual: action.updateArgsObj.visual
      };
      console.log("object::" + afterState[action.updateArgsObj.id].name);
      afterState.splice(action.updateArgsObj.id, 1, updateMemberState);
      return afterState;
    default:
      return state;
  }
}

export default MemberReducer;
