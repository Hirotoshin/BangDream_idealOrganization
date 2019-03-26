import { addAction } from "../action/action";
import { ActionType } from "../action/actionType";
import { IMemberState } from "../Interface";

const initialState: IMemberState[] = [
  {
    belong: "PoppinParty",
    detail: "みんなで遊園地！",
    id: 0,
    name: "戸山 香澄",
    paformance: 13427,
    technique: 10382,
    typeId: 1,
    visual: 8558
  },
  {
    belong: "PoppinParty",
    detail: "しあわせの共有",
    id: 0,
    name: "花園 たえ",
    paformance: 8098,
    technique: 14113,
    typeId: 1,
    visual: 9982
  },
  {
    belong: "PoppinParty",
    detail: "チョココロネな時間",
    id: 0,
    name: "牛込 りみ",
    paformance: 8098,
    technique: 10103,
    typeId: 1,
    visual: 13990
  },
  {
    belong: "PoppinParty",
    detail: "おそろいのシュシュ",
    id: 0,
    name: "山吹 沙綾",
    paformance: 14050,
    technique: 8038,
    typeId: 1,
    visual: 10042
  },
  {
    belong: "PoppinParty",
    detail: "満開の桜の下で",
    id: 0,
    name: "市ヶ谷 有咲",
    paformance: 10496,
    technique: 11831,
    typeId: 2,
    visual: 11415
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
        typeId: action.typeId,
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
        typeId: action.updateArgsObj.typeId,
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
