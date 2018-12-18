export interface IMemberState {
  name: string;
  paformance: number;
  technique: number;
  visual: number;
  belong: string;
  id: number;
}

export interface IMemberProps1 {
  memberList: IMemberState[];
  membergroup: string[];
  addtodo: (
    name: string,
    paformance: number,
    technique: number,
    visual: number,
    belong: string,
    id: number
  ) => void;
}

export interface IMemberProps2 {
  memberList: IMemberState[];
  addtodo: (
    name: string,
    paformance: number,
    technique: number,
    visual: number,
    belong: string,
    id: number
  ) => void;
}

export interface IUpdateProps {
  memberList: IMemberState[];
  IupdateArgs: IMemberState;
  updateMemberList: (updateArgsObj: IMemberState, id: number) => void;
}
export interface IMemberComponentState {
  idealpartymodal: boolean;
  inputText: string;
  inputId: number;
  modalboolean: boolean;
  paformanceId: number;
  techniqueId: number;
  visualId: number;
  isMemberDone: boolean;
}

export const bandGroup = {
  poppinParty: [
    "戸山 香澄",
    "花園 たえ",
    "牛込 りみ",
    "山吹 沙綾",
    "市ヶ谷 有咲"
  ],
  roselia: ["湊 友希那", "氷川 紗夜", "今井 リサ", "宇田川 あこ", "白金 燐子"]
};
