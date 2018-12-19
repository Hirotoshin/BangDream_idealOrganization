import * as React from "react";
import { connect } from "react-redux";
import { IMemberState } from "../Interface";
import { IrootState } from "../reducer/index";
// import memberAdd from "./memberAdd";

interface ICalculateProps {
  memberList: IMemberState[];
}
interface ICalculateState {
  sameMember: string;
  totalPower: number;
}
interface ITest {
  test: ICalculateState[];
}

class Calculate extends React.Component<ICalculateProps, ITest> {
  constructor(props: ICalculateProps) {
    super(props);
    this.state = {
      test: []
    };
    this.calculate = this.calculate.bind(this);
  }
  public calculate() {
    const arrayMember: ICalculateState[] = [];
    this.props.memberList.forEach(member => {
      const total: number =
        member.paformance + member.technique + member.visual;
      const calculate: ICalculateState = {
        sameMember: member.name,
        totalPower: total
      };
      const king = arrayMember.findIndex(
        item => item.sameMember === member.name
      );
      if (king < 0) {
        arrayMember.push(calculate);
      } else {
        if (arrayMember[king].totalPower < calculate.totalPower) {
          arrayMember.splice(king, 1, calculate);
        }
      }
    });
    arrayMember.sort((a, b) => {
      if (a.totalPower < b.totalPower) {
        return 1;
      } else if (a.totalPower > b.totalPower) {
        return -1;
      } else {
        return 0;
      }
    });

    this.setState({
      test: arrayMember
    });
  }
  public render() {
    return (
      <div>
        <h1>理想編成は以下の通りです</h1>
        {this.state.test.map((item, key) => {
          return (
            <div key={key}>
              {item.sameMember}
              {item.totalPower}
            </div>
          );
        })}
        <button onClick={this.calculate}>編成</button>
      </div>
    );
  }
}

const mapStateToProps = (state: IrootState) => {
  return {
    memberList: state.addmember
  };
};

// const mapDispatchToProps = () => {
//   return {};
// };
export default connect(
  mapStateToProps,
  {}
)(Calculate);
