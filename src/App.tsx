import * as React from "react";
import * as ReactModal from "react-modal";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addmember } from "./action/actionCreater";
import { IState } from "./reducer/index";
import { IMemberState } from "./reducer/MemberReducer";

interface IMemberProps {
  memberList: IMemberState[];
}
interface IMemberComponentState {
  inputText: string;
  inputId: number;
  modalboolean: boolean;
}
class App extends React.Component<IMemberProps, IMemberComponentState> {
  constructor(props: IMemberProps) {
    super(props);
    this.state = {
      inputId: 0,
      inputText: "",
      modalboolean: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
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
  public render() {
    const clickClose = () => this.handleCloseModal();
    return (
      <React.Fragment>
        <h1>BangDream! 理想編成計算</h1>
        <h2>メンバー追加</h2>
        <button onClick={this.handleOpenModal}>追加</button>
        <ReactModal
          isOpen={this.state.modalboolean}
          contentLabel="Minimal Modal Example"
        >
          <div>メンバー追加</div>
          <button onClick={clickClose}>ModalModalModalModal</button>
        </ReactModal>
        <h2>編成条件</h2>
        <button>編成</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    memberList: state.memberState
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addtodo: (
      name: string,
      powerful: number,
      pure: number,
      cool: number,
      belong: string,
      id: number
    ) => dispatch(addmember(name, powerful, pure, cool, belong, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
