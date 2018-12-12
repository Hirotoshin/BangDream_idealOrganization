import { IMemberState } from "./reducer/MemberReducer";

export interface IMemberProps {
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
