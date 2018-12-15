import * as React from "react";
import { Checkbox } from "react-bootstrap";

class Member extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div>
        <Checkbox>戸山香澄</Checkbox>
        <Checkbox>花園たえ</Checkbox>
        <h1>test</h1>
        <h2>test2</h2>
      </div>
    );
  }
}

export default Member;
