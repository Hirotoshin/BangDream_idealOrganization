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
    this.consoleLog = this.consoleLog.bind(this);
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
  public consoleLog(e: React.FormEvent<HTMLSelectElement>) {
    console.log(e.currentTarget.value);
  }

  public render() {
    const memberType = [
      { name: "選択してください" },
      { name: "パワフル" },
      { name: "ピュア" },
      { name: "クール" },
      { name: "ハッピー" }
    ];
    const memberTypeMap = memberType.map(e => {
      return <option key={e.name}>{e.name}</option>;
    });

    return (
      <React.Fragment>
        <button onClick={this.indealpartyonclick}> 計算 </button>
        <ReactModal
          isOpen={this.state.modalBoolean}
          contentLabel="Minimal Modal Example"
        >
          <h1>理想編成</h1>
          <h2>タイプ</h2>
          <select id="maintype" onChange={this.consoleLog}>
            {memberTypeMap}
          </select>
          <h2>ピックアップメンバー</h2>
          <Member closemodal={this.modalClose} />
        </ReactModal>
      </React.Fragment>
    );
  }
}

export default IdealParty;
