export interface IMemberState {
  name: string; // メンバーの名前
  paformance: number; // パフォーマンス値
  technique: number; // テクニック値
  visual: number; // ビジュアル値
  belong: string; // 所属しているバンド名
  id: number;
  detail: string; // カードの詳細文
  typeId: number; // パワフル、クール、ビジュアル、ハッピーのどれかを判断するid
}

export interface IMemberProps1 {
  memberList: IMemberState[];
  membergroup: string[];
  addtodo: (
    name: string, // メンバーの名前
    paformance: number, // パフォーマンス値
    technique: number, // テクニック値
    visual: number, // ビジュアル値
    belong: string, // 所属しているバンド名
    id: number,
    detail: string, // カードの詳細文
    typeId: number // パワフル、クール、ビジュアル、ハッピーのどれかを判断するid
  ) => void;
}

export interface IMemberProps2 {
  memberList: IMemberState[];
  addtodo: (
    name: string, // メンバーの名前
    paformance: number, // パフォーマンス値
    technique: number, // テクニック値
    visual: number, // ビジュアル値
    belong: string, // 所属しているバンド名
    id: number,
    detail: string, // カードの詳細文
    typeId: number // パワフル、クール、ビジュアル、ハッピーのどれかを判断するid
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
  typeContent: string;
}

export const bandGroup = {
  afterglow: [
    "美竹 蘭",
    "青葉 モカ",
    "上原 ひまり",
    "宇田川 巴",
    "羽沢 つぐみ"
  ],
  hallowHappyworld: [
    "弦巻 こころ",
    "瀬田 薫",
    "北沢 はぐみ",
    "松原 花音",
    "奥沢 美咲"
  ],
  pastelPalettes: [
    "丸山 彩",
    "氷川 日菜",
    "白鷺 千聖",
    "大和 麻弥",
    "若宮 イヴ"
  ],
  poppinParty: [
    "戸山 香澄",
    "花園 たえ",
    "牛込 りみ",
    "山吹 沙綾",
    "市ヶ谷 有咲"
  ],
  roselia: ["湊 友希那", "氷川 紗夜", "今井 リサ", "宇田川 あこ", "白金 燐子"]
};
