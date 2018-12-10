import * as React from "react";
import * as ReactModal from "react-modal";

interface IUpdateState {
  modalboolean: boolean;
}
class UpdateMember extends React.Component<{}, IUpdateState> {
  constructor(props: any) {
    super(props);
    this.state = {
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
  public render() {
    return (
      <React.Fragment>
        <button onClick={this.handleOpenModal}>編集</button>
        <ReactModal isOpen={this.state.modalboolean}>
          <h1>編集</h1>
          <button onClick={this.handleCloseModal}>閉じる</button>
        </ReactModal>
      </React.Fragment>
    );
  }
}

export default UpdateMember;
