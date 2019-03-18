import { addAction } from "../action/action";
import { ActionType } from "../action/actionType";
import { IMemberState } from "../Interface";

const initialState: IMemberState[] = [
  {
    belong: "PoppinParty",
    detail: "",
    id: 0,
    name: "戸山 香澄",
    paformance: 80,
    technique: 100,
    visual: 90
  },
  {
    belong: "PoppinParty",
    detail: "",
    id: 0,
    name: "花園 たえ",
    paformance: 100,
    technique: 100,
    visual: 80
  },
  {
    belong: "PoppinParty",
    detail: "",
    id: 0,
    name: "牛込 りみ",
    paformance: 60,
    technique: 80,
    visual: 90
  },
  {
    belong: "PoppinParty",
    detail: "",
    id: 0,
    name: "山吹 沙綾",
    paformance: 90,
    technique: 90,
    visual: 90
  },
  {
    belong: "PoppinParty",
    detail: "",
    id: 0,
    name: "市ヶ谷 有咲",
    paformance: 60,
    technique: 50,
    visual: 120
  },
  {
    belong: "PoppinParty",
    detail: "",
    id: 0,
    name: "市ヶ谷 有咲",
    paformance: 60,
    technique: 50,
    visual: 1120
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
        detail: action.detail,
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
        detail: action.updateArgsObj.detail,
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
