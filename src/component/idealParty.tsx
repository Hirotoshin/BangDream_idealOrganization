import * as React from "react";
import * as ReactModal from "react-modal";
import Member from "./Member";

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
        <button onClick={this.indealpartyonclick}> 計算 </button>
        <ReactModal
          isOpen={this.state.modalBoolean}
          contentLabel="Minimal Modal Example"
        >
          <h1>理想編成</h1>
          <h2>タイプ</h2>
          <select id="maintype">
            <option>パワフル</option>
            <option>ピュア</option>
            <option>クール</option>
          </select>
          <h2>ピックアップメンバー</h2>
          <Member />
          <button onClick={this.modalClose}>close</button>
        </ReactModal>
      </React.Fragment>
    );
  }
}

export default IdealParty;
