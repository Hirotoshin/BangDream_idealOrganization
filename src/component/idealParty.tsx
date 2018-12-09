import * as React from "react";
import * as ReactModal from "react-modal";

interface IidealParty {
  modalBoolean: boolean;
}
class IdealParty extends React.Component<{}, IidealParty> {
  constructor(props: any) {
    super(props);
    this.state = {
      modalBoolean: false
    };
    this.indealpartyonclick = this.indealpartyonclick.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  public indealpartyonclick() {
    this.setState({
      modalBoolean: true
    });
  }

  public modalClose() {
    this.setState({
      modalBoolean: false
    });
  }

  public render() {
    return (
      <React.Fragment>
        <button onClick={this.indealpartyonclick}> test </button>
        <ReactModal
          isOpen={this.state.modalBoolean}
          contentLabel="Minimal Modal Example"
        >
          <h1>hoge</h1>
          <button onClick={this.modalClose}>close</button>
        </ReactModal>
      </React.Fragment>
      // <ReactModal
      //   isOpen={this.props.indealpartyonclick}
      //   contentLabel="Minimal Modal Example"
      // >
      //   <h1>hogehoge</h1>
      // </ReactModal>
    );
  }
}

export default IdealParty;
