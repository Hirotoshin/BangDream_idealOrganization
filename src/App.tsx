import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import * as React from "react";
import * as ReactModal from "react-modal";
import { connect } from "react-redux";
import { Dispatch } from "redux";
// import { IupdateArgs } from "./action/action";
import { addmember } from "./action/actionCreater";
import Calculate from "./component/calculate";
import IdealParty from "./component/idealParty";
import MemberAdd from "./component/memberAdd";
import UpdateMember from "./component/UpdateMember";
import { IMemberComponentState, IMemberProps1 } from "./Interface";
import { IMemberState } from "./Interface";
import { IrootState } from "./reducer/index";

ReactModal.setAppElement(document.getElementById("root") as HTMLElement);

class App extends React.Component<IMemberProps1, IMemberComponentState> {
  constructor(props: IMemberProps1) {
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

    this.pushAllMember = this.pushAllMember.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  public pushAllMember() {
    this.setState({
      isMemberDone: !this.state.isMemberDone
    });
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
    const memberlist = this.props.memberList;
    const memberListJSX = memberlist.map((item: IMemberState, i) => {
      const x: IMemberState = {
        belong: item.belong,
        detail: item.detail,
        id: i,
        name: item.name,
        paformance: item.paformance,
        technique: item.technique,
        visual: item.visual
      };
      return (
        <div key={i}>
          {this.state.isMemberDone ? (
            <Card>
              member
              <br />
              name:{item.name}
              <br />
              detail:{item.detail}
              <br />
              Performance:{item.paformance}
              <br />
              Technique:{item.technique}
              <br />
              Visual:{item.visual}
              <p />
              BandGroup:{item.belong}
              <br />
              <UpdateMember IupdateArgs={x} />
            </Card>
          ) : null}
        </div>
      );
    });

    return (
      <React.Fragment>
        <h1>BangDream! 理想編成計算</h1>
        <h2>メンバー追加</h2>
        <MemberAdd />
        <h2>編成条件</h2>
        <IdealParty />
        {this.props.membergroup}
        <h2>手持ちメンバー一覧</h2>
        <button onClick={this.pushAllMember}>表示</button>
        <h3>以下、testDebug</h3>
        {memberListJSX}
        <div>以下calculate</div>
        <Calculate />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IrootState) => {
  return {
    memberList: state.addmember,
    membergroup: state.membergroup
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
      detail: string
    ) =>
      dispatch(
        addmember(name, paformance, technique, visual, belong, id, detail)
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
