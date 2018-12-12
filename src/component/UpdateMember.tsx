import * as React from "react";
import * as ReactModal from "react-modal";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IupdateArgs } from "../action/action";
import { updateMember } from "../action/actionCreater";
// import { IMemberProps } from "../Interface";
import { IMemberState } from "../reducer/MemberReducer";

interface IUpdateProps {
  IupdateArgs: IupdateArgs;
  updateMemberList: (updateArgsObj: IupdateArgs) => void;
}
interface IUpdateState {
  modalboolean: boolean;
  addUpdateName: string;
  pushName: string;
  pushPerformance: number;
  pushTechnique: number;
  pushVisual: number;
}

class UpdateMember extends React.Component<IUpdateProps, IUpdateState> {
  constructor(props: IUpdateProps) {
    super(props);
    this.state = {
      addUpdateName: "",
      modalboolean: false,
      pushName: this.props.IupdateArgs.name,
      pushPerformance: this.props.IupdateArgs.paformance,
      pushTechnique: this.props.IupdateArgs.technique,
      pushVisual: this.props.IupdateArgs.visual
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.pushName = this.pushName.bind(this);
    this.pushPaformance = this.pushPaformance.bind(this);
    this.pushTechnique = this.pushTechnique.bind(this);
    this.pushVisual = this.pushVisual.bind(this);
  }

  public handleOpenModal() {
    this.setState({
      modalboolean: true
    });
  }
  public handleCloseModal() {
    this.setState({
      modalboolean: false
    });
  }
  public pushName(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      pushName: e.currentTarget.value
    });
  }
  public pushPaformance(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      pushPerformance: Number(e.currentTarget.value)
    });
  }
  public pushTechnique(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      pushTechnique: Number(e.currentTarget.value)
    });
  }
  public pushVisual(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      pushVisual: Number(e.currentTarget.value)
    });
  }
  public render() {
    // const x:IupdateArgs = {
    //   belong: "Roselllll";
    //   id: this.state.;
    //   name: string;
    //   paformance: number;
    //   technique: number;
    //   visual: number;
    // }
    return (
      <React.Fragment>
        <button onClick={this.handleOpenModal}>編集</button>
        <ReactModal isOpen={this.state.modalboolean}>
          <h1>編集</h1>
          <h2>名前</h2>
          <input
            type={"text"}
            value={this.state.pushName}
            onChange={this.pushName}
          />
          <h2>パフォーマンス</h2>
          <input
            type={"text"}
            value={this.state.pushPerformance}
            onChange={this.pushPaformance}
          />
          <h2>テクニック</h2>
          <input
            type={"text"}
            value={this.state.pushTechnique}
            onChange={this.pushTechnique}
          />
          <h2>ビジュアル</h2>
          <input
            type={"text"}
            value={this.state.pushVisual}
            onChange={this.pushVisual}
          />
          <h2>グループ</h2>
          <button>Poppin'Party</button>
          <button>After glow</button>
          <button>Pastel Palettes</button>
          <button>Roselia</button>
          <button>ハロハピ</button>
          <p />
          <button onClick={this.handleCloseModal}>閉じる</button>
          <button onClick={this.handleCloseModal}>変更</button>
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
    // addtodo: (
    //   name: string,
    //   paformance: number,
    //   technique: number,
    //   visual: number,
    //   belong: string,
    //   id: number
    // ) => dispatch(addmember(name, paformance, technique, visual, belong, id)),
    updateMemberList: (updateArgsObj: IupdateArgs) =>
      dispatch(updateMember(updateArgsObj))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateMember);
