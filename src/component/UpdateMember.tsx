import * as React from "react";
import * as ReactModal from "react-modal";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { updateMember } from "../action/actionCreater";
import { addmember } from "../action/actionCreater";
// import { IMemberProps } from "../Interface";
import { IMemberState } from "../reducer/MemberReducer";

interface IUpdateState {
  modalboolean: boolean;
  addUpdateName: string;
}
interface IUpdateProps {
  name: string;
  paformance: number;
  technique: number;
  visual: number;
  belong: string;
  id: number;
}
class UpdateMember extends React.Component<IUpdateProps, IUpdateState> {
  constructor(props: IUpdateProps) {
    super(props);
    this.state = {
      addUpdateName: "",
      modalboolean: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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
  // public addUpdateNamePush() {
  //   this.setState({
  //     addUpdateName: this.
  //   });
  // }
  public render() {
    // const updateAddMember = () => {
    //   this.props.addtodo(this.state.addUpdateName, 0, 0, 0, "poppin party", 0);
    // };
    return (
      <React.Fragment>
        <button onClick={this.handleOpenModal}>編集</button>
        <ReactModal isOpen={this.state.modalboolean}>
          <h1>編集</h1>
          <h2>名前</h2>
          <input type={"text"} value={this.props.name} />
          <h2>パフォーマンス</h2>
          <input type={"text"} value={this.props.paformance} />
          <h2>テクニック</h2>
          <input type={"text"} value={this.props.technique} />
          <h2>ビジュアル</h2>
          <input type={"text"} value={this.props.visual} />
          <h2>グループ</h2>
          {this.props.name}
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
    addtodo: (
      name: string,
      paformance: number,
      technique: number,
      visual: number,
      belong: string,
      id: number
    ) => dispatch(addmember(name, paformance, technique, visual, belong, id)),
    updateMemberList: (id: number) => dispatch(updateMember(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateMember);
