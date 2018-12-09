import * as React from "react";
import * as ReactModal from "react-modal";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addmember } from "../action/actionCreater";
import { IMemberProps } from "../Interface";
import { IMemberState } from "../reducer/MemberReducer";
// import { IMemberState } from "../reducer/MemberReducer";

interface IAddMemberModalState {
  modalBoolean: boolean;
  paformanceId: number;
  techniqueId: number;
  visualId: number;
  inputText: string;
}
class MemberAdd extends React.Component<IMemberProps, IAddMemberModalState> {
  constructor(props: IMemberProps) {
    super(props);
    this.state = {
      inputText: "",
      modalBoolean: false,
      paformanceId: 0,
      techniqueId: 0,
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
  public render() {
    const clickClose = () => {
      this.props.addtodo(
        this.state.inputText,
        this.state.paformanceId,
        this.state.techniqueId,
        this.state.visualId,
        "poppin party",
        "test id"
      );
      this.handleCloseModal();
    };
    return (
      <React.Fragment>
        <button onClick={this.handleOpenModal}>tuika</button>
        <ReactModal
          isOpen={this.state.modalBoolean}
          contentLabel="Minimal Modal Example"
        >
          <h1>メンバー追加</h1>
          <h2>名前</h2>
          <input type={"text"} onChange={this.handleInputText} />
          <h2>パフォーマンス</h2>
          <input type={"text"} onChange={this.handleInputPerformanceNumber} />
          <h2>テクニック</h2>
          <input type={"text"} onChange={this.handleInputTechniqueNumber} />
          <h2>ビジュアル</h2>
          <input type={"text"} onChange={this.handleInputVisualNumber} />
          <h2>グループ</h2>
          <button>Poppin'Party</button>
          <button>After glow</button>
          <button>Pastel Palettes</button>
          <button>Roselia</button>
          <button>ハロハピ</button>
          <p />
          <button onClick={clickClose}>確定</button>
        </ReactModal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IMemberState[]) => {
  return {
    memberList: state
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
      id: string
    ) => dispatch(addmember(name, paformance, technique, visual, belong, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAdd);
