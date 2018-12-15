import * as React from "react";
import { Checkbox, Panel } from "react-bootstrap";

class Member extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div className="row">
        <Panel>
          <Panel.Heading>
            <Panel.Title>
              <Checkbox>Poppin'Party</Checkbox>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Checkbox>戸山 香澄</Checkbox>
            <Checkbox>花園 たえ</Checkbox>
            <Checkbox>牛込 りみ</Checkbox>
            <Checkbox>山吹 沙綾</Checkbox>
            <Checkbox>市ヶ谷 有咲</Checkbox>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title>
              <Checkbox>Roselia</Checkbox>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Checkbox>湊 友希那</Checkbox>
            <Checkbox>氷川 紗夜</Checkbox>
            <Checkbox>今井 リサ</Checkbox>
            <Checkbox>宇田川 あこ</Checkbox>
            <Checkbox>白金 燐子</Checkbox>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title>
              <Checkbox>Afterglow</Checkbox>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Checkbox>美竹 蘭</Checkbox>
            <Checkbox>青葉 モカ</Checkbox>
            <Checkbox>上原 ひまり</Checkbox>
            <Checkbox>宇田川 巴</Checkbox>
            <Checkbox>羽沢 つぐみ</Checkbox>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title>
              <Checkbox>Pastel*Palettes</Checkbox>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Checkbox>丸山 彩</Checkbox>
            <Checkbox>氷川 日菜</Checkbox>
            <Checkbox>白鷺 千聖</Checkbox>
            <Checkbox>大和 麻弥</Checkbox>
            <Checkbox>若宮 イヴ</Checkbox>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title>
              <Checkbox>ハロー、ハッピーワールド!</Checkbox>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Checkbox>弦巻 こころ</Checkbox>
            <Checkbox>瀬田 薫</Checkbox>
            <Checkbox>北沢 はぐみ</Checkbox>
            <Checkbox>松原 花音</Checkbox>
            <Checkbox>奥沢 美咲</Checkbox>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default Member;
