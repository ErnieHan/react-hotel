import React, { Component } from "react";
import { Translation } from "react-i18next";
import {
  Content,
  FlexContent,
  OpitionButton,
  OpitionDisableButton,
  SubTitle
} from "./css";

const leveloptions = [
  {
    lv1Title: "Style",
    lv1Options: [
      {
        name: "Chrysoprase",
        lv2Options: [
          { name: "17cm", quantity: 5 },
          { name: "19cm", quantity: 0 },
          { name: "21cm", quantity: 5 }
        ],
        quantity: 5
      },
      {
        name: "Carnelian",
        lv2Options: [
          { name: "19cm", quantity: 5 },
          { name: "21cm", quantity: 5 }
        ],
        quantity: 5
      },
      {
        name: "Topaz",
        lv2Options: [
          { name: "19cm", quantity: 5 },
          { name: "21cm", quantity: 5 }
        ],
        quantity: 0
      }
    ]
  }
];

export class index extends Component {
  state = {
    lv1Default: null,
    lv1Lengths: null
  };

  componentDidMount() {
    // 找出Lv1預設值
    const lv1 = leveloptions[0].lv1Options[0];
    const lv2Default = lv1.lv2Options[0].name;
    this.setState({
      lv1Default: lv1.name,
      lv1Lengths: lv1.lv2Options,
      lv2Default: lv2Default
    });
  }

  selectLv1 = lv1 => {
    this.setState({
      lv1Default: lv1.name,
      lv1Lengths: lv1.lv2Options,
      lv2Default: lv1.lv2Options[0].name
    });
  };

  selectLv2 = lv2 => {
    this.setState({
      lv2Default: lv2.name
    });
  };

  render() {
    const { lv1Default, lv1Lengths, lv2Default } = this.state;
    return (
      <>
        <Content>
          {leveloptions.map((item, index) => (
            <React.Fragment key={index}>
              <SubTitle>{item.lv1Title}</SubTitle>
              <FlexContent>
                {item.lv1Options.map((lv1, jndex) =>
                  lv1.quantity > 0 ? (
                    <OpitionButton
                      key={jndex}
                      onClick={this.selectLv1.bind(this, lv1)}
                      active={lv1Default === lv1.name}
                    >
                      {lv1.name}
                    </OpitionButton>
                  ) : (
                    <OpitionDisableButton key={jndex}>
                      {lv1.name}
                    </OpitionDisableButton>
                  )
                )}
              </FlexContent>
            </React.Fragment>
          ))}
        </Content>
        <Content>
          <SubTitle>Length</SubTitle>
          <FlexContent>
            {lv1Default &&
              lv1Lengths.map((data, index) =>
                data.quantity > 0 ? (
                  <OpitionButton
                    key={index}
                    active={lv2Default === data.name}
                    onClick={this.selectLv2.bind(this, data)}
                  >
                    {data.name}
                  </OpitionButton>
                ) : (
                  <OpitionDisableButton key={index}>
                    {data.name}
                  </OpitionDisableButton>
                )
              )}
          </FlexContent>
        </Content>
      </>
    );
  }
}

export default index;
