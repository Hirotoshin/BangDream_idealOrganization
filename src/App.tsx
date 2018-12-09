import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import * as React from "react";
import * as ReactModal from "react-modal";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addmember } from "./action/actionCreater";
import IdealParty from "./component/idealParty";
import { IMemberComponentState, IMemberProps } from "./Interface";
import { IMemberState } from "./reducer/MemberReducer";

ReactModal.setAppElement(document.getElementById("root") as HTMLElement);

class App extends React.Component<IMemberProps, IMemberComponentState> {
  constructor(props: IMemberProps) {
    super(props);
    this.state = {
      idealpartymodal: false,
      inputId: 0,
      inputText: "",
      isMemberDone: false,
      modalboolean: false,
      paformanceId: 0,
      techniqueId: 0,
      visualId: 0
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleInputText = this.handleInputText.bind(this);
    this.handleInputPerformanceNumber = this.handleInputPerformanceNumber.bind(
      this
    );
    this.handleInputTechniqueNumber = this.handleInputTechniqueNumber.bind(
      this
    );
    this.handleInputVisualNumber = this.handleInputVisualNumber.bind(this);
    this.pushAllMember = this.pushAllMember.bind(this);
    this.indealpartyonclick = this.indealpartyonclick.bind(this);
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
  public pushAllMember() {
    this.setState({
      isMemberDone: !this.state.isMemberDone
    });
  }
  public indealpartyonclick() {
    this.setState({
      idealpartymodal: !this.state.idealpartymodal
    });
  }
  public handleInputText(e: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      inputText: e.currentTarget.value
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
    const memberlist = this.props.memberList;
    const memberListJSX = memberlist.map((item: IMemberState, i) => {
      return (
        <div key={i}>
          {this.state.isMemberDone ? (
            <Card>
              member
              <br />
              name:{item.name}
              <br /> Performance:{item.paformance}
              <br />
              Technique:{item.technique}
              <br />
              Visual:{item.visual}
            </Card>
          ) : null}
        </div>
      );
    });

    return (
      <React.Fragment>
        <h1>BangDream! 理想編成計算</h1>
        <h2>メンバー追加</h2>
        <button onClick={this.handleOpenModal}>追加</button>
        <ReactModal
          isOpen={this.state.modalboolean}
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
        <h2>編成条件</h2>
        <button>編成</button>
        <h2>手持ちメンバー一覧</h2>
        <button onClick={this.pushAllMember}>表示</button>

        <h3>testDebug</h3>
        {memberListJSX}
        <IdealParty />
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
)(App);
