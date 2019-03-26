import * as React from "react";
import { Panel } from "react-bootstrap";
import { connect } from "react-redux";
import { Dispatch } from "redux";
// import { IGroupMemberAction } from "../action/action";
import { groupMember } from "../action/actionCreater";
import { bandGroup } from "../Interface";
// import { IGroupMember } from "../Interface";
import { IrootState } from "../reducer/index";

interface IGroupMemberState {
  poppin: boolean[];
  afterglow: boolean[];
  roselia: boolean[];
  pasupare: boolean[];
  halohapi: boolean[];
  groupMember: string[];
  test: string;
  count: number;
}

// interface IGroupMemberProps {
//   groupMemberList: IGroupMemberAction[];
//   groupmember: (id: number, name: string) => void;
// }

interface ICloseModal {
  closemodal: () => void;
  groupMember: (name: string[]) => void;
}

class Member extends React.Component<ICloseModal, IGroupMemberState> {
  constructor(props: any) {
    super(props);
    this.state = {
      afterglow: [false, false, false, false, false, false],
      count: 0,
      groupMember: [],
      halohapi: [false, false, false, false, false, false],
      pasupare: [false, false, false, false, false, false],
      poppin: [false, false, false, false, false, false],
      roselia: [false, false, false, false, false, false],
      test: ""
    };
    this.allCheckedPoppin = this.allCheckedPoppin.bind(this);
    this.checkBoxHandler = this.checkBoxHandler.bind(this);
    this.allCheckedAfterglow = this.allCheckedAfterglow.bind(this);
    this.allCheckedHellohappy = this.allCheckedHellohappy.bind(this);
    this.allCheckedPastel = this.allCheckedPastel.bind(this);
    this.allCheckedRoselia = this.allCheckedRoselia.bind(this);
    this.onclickedConfirm = this.onclickedConfirm.bind(this);
    this.checktest = this.checktest.bind(this);
  }

  public allCheckedPoppin() {
    if (this.state.poppin[0]) {
      this.setState({
        count: 0,
        poppin: [false, false, false, false, false, false]
      });
    } else {
      this.setState({
        count: 5,
        poppin: [true, true, true, true, true, true]
      });
    }
  }

  public allCheckedAfterglow() {
    if (this.state.afterglow[0]) {
      this.setState({
        afterglow: [false, false, false, false, false, false],
        count: 5
      });
    } else {
      this.setState({
        afterglow: [true, true, true, true, true, true],
        count: 0
      });
    }
  }

  public allCheckedHellohappy() {
    if (this.state.halohapi[0]) {
      this.setState({
        count: 0,
        halohapi: [false, false, false, false, false, false]
      });
    } else {
      this.setState({
        count: 5,
        halohapi: [true, true, true, true, true, true]
      });
    }
  }

  public allCheckedRoselia() {
    if (this.state.roselia[0]) {
      this.setState({
        count: 0,
        roselia: [false, false, false, false, false, false]
      });
    } else {
      this.setState({
        count: 5,
        roselia: [true, true, true, true, true, true]
      });
    }
  }

  public allCheckedPastel() {
    if (this.state.pasupare[0]) {
      this.setState({
        count: 0,
        pasupare: [false, false, false, false, false, false]
      });
    } else {
      this.setState({
        count: 5,
        pasupare: [true, true, true, true, true, true]
      });
    }
  }
  // e: React.FormEvent<HTMLInputElement>,
  public checktest(e: React.FormEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value);
  }
  public checkBoxHandler(group: string, index: number) {
    return () => {
      const afterState = JSON.parse(JSON.stringify(this.state));
      switch (group) {
        case "poppin":
          afterState[group][index] = !this.state.poppin[index];
          return this.setState(afterState);
        case "roselia":
          afterState[group][index] = !this.state.roselia[index];
          return this.setState(afterState);
        case "pastel":
          afterState[group][index] = !this.state.pasupare[index];
          return this.setState(afterState);
        case "afterglow":
          afterState[group][index] = !this.state.afterglow[index];
          return this.setState(afterState);
        case "halohapi":
          afterState[group][index] = !this.state.halohapi[index];
          return this.setState(afterState);
        default:
          return this.state;
      }
    };
  }
  public onclickedConfirm() {
    const groupMemberInonclicked = [];
    for (let i = 1; i < 6; i++) {
      if (this.state.poppin[i] === true) {
        groupMemberInonclicked.push(bandGroup.poppinParty[i - 1]);
      } else if (this.state.roselia[i] === true) {
        groupMemberInonclicked.push(bandGroup.roselia[i - 1]);
      } else if (this.state.pasupare[i] === true) {
        groupMemberInonclicked.push(bandGroup.pastelPalettes[i - 1]);
      } else if (this.state.afterglow[i] === true) {
        groupMemberInonclicked.push(bandGroup.afterglow[i - 1]);
      } else if (this.state.halohapi[i] === true) {
        groupMemberInonclicked.push(bandGroup.hallowHappyworld[i - 1]);
      }
    }
    this.props.groupMember(groupMemberInonclicked);
    // console.log(this.state);
    this.props.closemodal();
  }

  // public testHandlle() {
  //   this.console.log();
  // }
  public render() {
    return (
      <div className="container">
        <Panel>
          <Panel.Heading>
            <Panel.Title>
              <input
                type="checkbox"
                onChange={this.allCheckedPoppin}
                checked={this.state.poppin[0]}
                onClick={this.checktest}
                value="Poppin'Party"
              />
              Poppin'Party
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <input
              type="checkbox"
              checked={this.state.poppin[1]}
              onChange={this.checkBoxHandler("poppin", 1)}
              onClick={this.checktest}
              value="戸山 香澄"
            />
            戸山 香澄
            <p />
            <input
              type="checkbox"
              checked={this.state.poppin[2]}
              onChange={this.checkBoxHandler("poppin", 2)}
              onClick={this.checktest}
              value="花園 たえ"
            />
            花園 たえ
            <p />
            <input
              type="checkbox"
              checked={this.state.poppin[3]}
              onChange={this.checkBoxHandler("poppin", 3)}
              onClick={this.checktest}
              value="牛込 りみ"
            />
            牛込 りみ
            <p />
            <input
              type="checkbox"
              checked={this.state.poppin[4]}
              onChange={this.checkBoxHandler("poppin", 4)}
              onClick={this.checktest}
              value="山吹 沙綾"
            />
            山吹 沙綾
            <p />
            <input
              type="checkbox"
              checked={this.state.poppin[5]}
              onChange={this.checkBoxHandler("poppin", 5)}
              onClick={this.checktest}
              value="市ヶ谷 有咲"
            />
            市ヶ谷 有咲
          </Panel.Body>
        </Panel>
        {/* <Panel>
          <Panel.Heading>
            <Panel.Title>
              <Checkbox
                checked={this.state.roselia[0]}
                onChange={this.allCheckedRoselia}
              >
                Roselia
              </Checkbox>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Checkbox
              checked={this.state.roselia[1]}
              onChange={this.checkBoxHandler("roselia", 1)}
            >
              湊 友希那
            </Checkbox>
            <Checkbox
              checked={this.state.roselia[2]}
              onChange={this.checkBoxHandler("roselia", 2)}
            >
              氷川 紗夜
            </Checkbox>
            <Checkbox
              checked={this.state.roselia[3]}
              onChange={this.checkBoxHandler("roselia", 3)}
            >
              今井 リサ
            </Checkbox>
            <Checkbox
              checked={this.state.roselia[4]}
              onChange={this.checkBoxHandler("roselia", 4)}
            >
              宇田川 あこ
            </Checkbox>
            <Checkbox
              checked={this.state.roselia[5]}
              onChange={this.checkBoxHandler("roselia", 5)}
            >
              白金 燐子
            </Checkbox>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title>
              <Checkbox
                checked={this.state.afterglow[0]}
                onChange={this.allCheckedAfterglow}
              >
                Afterglow
              </Checkbox>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Checkbox
              checked={this.state.afterglow[1]}
              onChange={this.checkBoxHandler("afterglow", 1)}
            >
              美竹 蘭
            </Checkbox>
            <Checkbox
              checked={this.state.afterglow[2]}
              onChange={this.checkBoxHandler("afterglow", 2)}
            >
              青葉 モカ
            </Checkbox>
            <Checkbox
              checked={this.state.afterglow[3]}
              onChange={this.checkBoxHandler("afterglow", 3)}
            >
              上原 ひまり
            </Checkbox>
            <Checkbox
              checked={this.state.afterglow[4]}
              onChange={this.checkBoxHandler("afterglow", 4)}
            >
              宇田川 巴
            </Checkbox>
            <Checkbox
              checked={this.state.afterglow[5]}
              onChange={this.checkBoxHandler("afterglow", 5)}
            >
              羽沢 つぐみ
            </Checkbox>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title>
              <Checkbox
                checked={this.state.pasupare[0]}
                onChange={this.allCheckedPastel}
              >
                Pastel*Palettes
              </Checkbox>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Checkbox
              checked={this.state.pasupare[1]}
              onChange={this.checkBoxHandler("pastel", 1)}
            >
              丸山 彩
            </Checkbox>
            <Checkbox
              checked={this.state.pasupare[2]}
              onChange={this.checkBoxHandler("pastel", 2)}
            >
              氷川 日菜
            </Checkbox>
            <Checkbox
              checked={this.state.pasupare[3]}
              onChange={this.checkBoxHandler("pastel", 3)}
            >
              白鷺 千聖
            </Checkbox>
            <Checkbox
              checked={this.state.pasupare[4]}
              onChange={this.checkBoxHandler("pastel", 4)}
            >
              大和 麻弥
            </Checkbox>
            <Checkbox
              checked={this.state.pasupare[5]}
              onChange={this.checkBoxHandler("pastel", 5)}
            >
              若宮 イヴ
            </Checkbox>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title>
              <Checkbox
                checked={this.state.halohapi[0]}
                onChange={this.allCheckedHellohappy}
              >
                ハロー、ハッピーワールド!
              </Checkbox>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Checkbox
              checked={this.state.halohapi[1]}
              onChange={this.checkBoxHandler("halohapi", 1)}
            >
              弦巻 こころ
            </Checkbox>
            <Checkbox
              checked={this.state.halohapi[2]}
              onChange={this.checkBoxHandler("halohapi", 2)}
            >
              瀬田 薫
            </Checkbox>
            <Checkbox
              checked={this.state.halohapi[3]}
              onChange={this.checkBoxHandler("halohapi", 3)}
            >
              北沢 はぐみ
            </Checkbox>
            <Checkbox
              checked={this.state.halohapi[4]}
              onChange={this.checkBoxHandler("halohapi", 4)}
            >
              松原 花音
            </Checkbox>
            <Checkbox
              checked={this.state.halohapi[5]}
              onChange={this.checkBoxHandler("halohapi", 5)}
            >
              奥沢 美咲
            </Checkbox>
          </Panel.Body>
        </Panel> */}
        <button onClick={this.props.closemodal}>close</button>
        <button onClick={this.onclickedConfirm}>確定</button>
      </div>
    );
  }
}

const mapStateToProps = (state: IrootState) => {
  return {
    addgroupMember: state.membergroup
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    groupMember: (name: string[]) => dispatch(groupMember(name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Member);
