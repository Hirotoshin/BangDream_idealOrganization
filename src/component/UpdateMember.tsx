import * as React from "react";
import * as ReactModal from "react-modal";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { updateMember } from "../action/actionCreater";
// import { IMemberProps } from "../Interface";
import { IMemberState, IUpdateProps } from "../Interface";

interface IUpdateState {
  modalboolean: boolean;
  addUpdateName: string;
  pushName: string;
  pushPerformance: number;
  pushTechnique: number;
  pushVisual: number;
  pushId: number;
  belong: string;
  pushDetail: string;
  detail: string;
  typeId: number;
}

class UpdateMember extends React.Component<IUpdateProps, IUpdateState> {
  constructor(props: IUpdateProps) {
    super(props);
    this.state = {
      addUpdateName: "",
      belong: "",
      detail: "",
      modalboolean: false,
      pushDetail: this.props.IupdateArgs.detail,
      pushId: this.props.IupdateArgs.id,
      pushName: this.props.IupdateArgs.name,
      pushPerformance: this.props.IupdateArgs.paformance,
      pushTechnique: this.props.IupdateArgs.technique,
      pushVisual: this.props.IupdateArgs.visual,
      typeId: this.props.IupdateArgs.typeId
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.pushName = this.pushName.bind(this);
    this.pushPaformance = this.pushPaformance.bind(this);
    this.pushTechnique = this.pushTechnique.bind(this);
    this.pushVisual = this.pushVisual.bind(this);
    this.onChangeBandGroup = this.onChangeBandGroup.bind(this);
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
  public onChangeBandGroup(e: React.FormEvent<HTMLSelectElement>) {
    this.setState({
      belong: e.currentTarget.value
    });
  }
  public handleInputDetail(e: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      detail: e.currentTarget.value
    });
  }
  public onChangeSelectTypeId(e: React.FormEvent<HTMLSelectElement>): void {
    if (e.currentTarget.value === "パワフル") {
      this.setState({
        typeId: 1
      });
    } else if (e.currentTarget.value === "ピュア") {
      this.setState({
        typeId: 2
      });
    } else if (e.currentTarget.value === "クール") {
      this.setState({
        typeId: 3
      });
    } else if (e.currentTarget.value === "ハッピー") {
      this.setState({
        typeId: 4
      });
    }
    console.log(this.state.typeId);
  }
  public render() {
    const x: IMemberState = {
      belong: this.state.belong,
      detail: this.state.pushDetail,
      id: this.state.pushId,
      name: this.state.pushName,
      paformance: this.state.pushPerformance,
      technique: this.state.pushTechnique,
      typeId: this.state.typeId,
      visual: this.state.pushVisual
    };
    const confirmUpdate = () => {
      console.log("name::" + this.state.pushName);
      this.props.updateMemberList(x, this.props.IupdateArgs.id);
      this.handleCloseModal();
    };
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
          <h2>詳細</h2>
          <input type={"text"} onChange={this.handleInputDetail} />
          <h2>タイプ</h2>
          <select onChange={this.onChangeSelectTypeId}>
            <option>パワフル</option>
            <option>ピュア</option>
            <option>クール</option>
            <option>ハッピー</option>
          </select>
          <h2>パフォーマンス</h2>
          <input
            type={"number"}
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
          <select onChange={this.onChangeBandGroup}>
            <option>Poppin'Party</option>
            <option>After glow</option>
            <option>Pastel Palettes</option>
            <option>Roselia</option>
            <option>ハロハピ</option>
          </select>
          <p />
          <button onClick={this.handleCloseModal}>閉じる</button>
          <button onClick={confirmUpdate}>変更</button>
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
    updateMemberList: (updateArgsObj: IMemberState, id: number) =>
      dispatch(updateMember(updateArgsObj, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateMember);
