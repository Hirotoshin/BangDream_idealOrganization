import * as React from "react";
import * as ReactModal from "react-modal";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addmember } from "../action/actionCreater";
import { IMemberProps2 } from "../Interface";
import { IrootState } from "../reducer/index";
// import { IMemberState } from "../reducer/MemberReducer";

interface IAddMemberModalState {
  modalBoolean: boolean;
  paformanceId: number;
  techniqueId: number;
  visualId: number;
  inputText: string;
  bandName: string;
  detail: string;
  typeId: number;
}
class MemberAdd extends React.Component<IMemberProps2, IAddMemberModalState> {
  constructor(props: IMemberProps2) {
    super(props);
    this.state = {
      bandName: "",
      detail: "",
      inputText: "",
      modalBoolean: false,
      paformanceId: 0,
      techniqueId: 0,
      typeId: 0,
      visualId: 0
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleInputText = this.handleInputText.bind(this);
    this.handleInputPerformanceNumber = this.handleInputPerformanceNumber.bind(
      this
    );
    this.handleInputTechniqueNumber = this.handleInputTechniqueNumber.bind(
      this
    );
    this.handleInputVisualNumber = this.handleInputVisualNumber.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.handleInputDetail = this.handleInputDetail.bind(this);
    this.onChangeSelectTypeId = this.onChangeSelectTypeId.bind(this);
  }

  public handleOpenModal() {
    this.setState({
      modalBoolean: true
    });
  }
  public handleCloseModal() {
    this.setState({
      modalBoolean: false
    });
  }
  public handleInputPerformanceNumber(
    e: React.FormEvent<HTMLInputElement>
  ): void {
    this.setState({
      paformanceId: Number(e.currentTarget.value)
    });
  }
  public handleInputTechniqueNumber(
    e: React.FormEvent<HTMLInputElement>
  ): void {
    this.setState({
      techniqueId: Number(e.currentTarget.value)
    });
  }
  public handleInputVisualNumber(e: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      visualId: Number(e.currentTarget.value)
    });
  }
  public handleInputText(e: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      inputText: e.currentTarget.value
    });
  }
  public onChangeSelect(e: React.FormEvent<HTMLSelectElement>): void {
    this.setState({
      bandName: e.currentTarget.value
    });
  }
  public onChangeSelectTypeId(e: React.FormEvent<HTMLSelectElement>): void {
    if (e.currentTarget.value === "パワフル") {
      this.setState({
        typeId: 1
      });
    } else if (e.currentTarget.value === "ピュア") {
      this.setState({
        typeId: 2
      });
    } else if (e.currentTarget.value === "クール") {
      this.setState({
        typeId: 3
      });
    } else if (e.currentTarget.value === "ハッピー") {
      this.setState({
        typeId: 4
      });
    }
    console.log(this.state.typeId);
  }
  public handleInputDetail(e: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      detail: e.currentTarget.value
    });
  }
  public render() {
    const clickClose = () => {
      this.props.addtodo(
        this.state.inputText,
        this.state.paformanceId,
        this.state.techniqueId,
        this.state.visualId,
        this.state.bandName,
        0,
        this.state.detail,
        this.state.typeId
      );
      this.handleCloseModal();
    };
    return (
      <React.Fragment>
        <button onClick={this.handleOpenModal}>追加</button>
        <ReactModal
          isOpen={this.state.modalBoolean}
          contentLabel="Minimal Modal Example"
        >
          <h1>メンバー追加</h1>
          <h2>名前</h2>
          <input type={"text"} onChange={this.handleInputText} />
          <h2>詳細</h2>
          <input type={"text"} onChange={this.handleInputDetail} />
          <h2>タイプ</h2>
          <select onChange={this.onChangeSelectTypeId}>
            <option>パワフル</option>
            <option>ピュア</option>
            <option>クール</option>
            <option>ハッピー</option>
          </select>
          <h2>パフォーマンス</h2>
          <input type={"text"} onChange={this.handleInputPerformanceNumber} />
          <h2>テクニック</h2>
          <input type={"text"} onChange={this.handleInputTechniqueNumber} />
          <h2>ビジュアル</h2>
          <input type={"text"} onChange={this.handleInputVisualNumber} />
          <h2>グループ</h2>
          <select onChange={this.onChangeSelect}>
            <option>Poppin'Party</option>
            <option>After glow</option>
            <option>Pastel Palettes</option>
            <option>Roselia</option>
            <option>ハロハピ</option>
          </select>
          <p />
          <button onClick={this.handleCloseModal}>戻る</button>
          <button onClick={clickClose}>確定</button>
        </ReactModal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IrootState) => {
  return {
    memberList: state.addmember
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addtodo: (
      name: string,
      paformance: number,
      technique: number,
      visual: number,
      belong: string,
      id: number,
      detail: string,
      typeId: number
    ) =>
      dispatch(
        addmember(
          name,
          paformance,
          technique,
          visual,
          belong,
          id,
          detail,
          typeId
        )
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAdd);
