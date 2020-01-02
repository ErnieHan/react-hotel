import React, { Component } from "react";
import { Translation } from "react-i18next";
import { Content, FlexContent, OpitionButton, SubTitle } from "./css";

export class LevelOption extends Component {
  state = {
    style: 0,
    length: 0
  };
  changeStyle = index => {
    this.setState({
      style: index,
      length: 0
    });
  };

  changeLength = index => {
    this.setState({
      length: index
    });
  };

  render() {
    const styleLists = [
      {
        name: (
          <Translation>{t => <>{t("leveloptions.chrysoprase")}</>}</Translation>
        )
      },
      {
        name: (
          <Translation>{t => <>{t("leveloptions.carnelian")}</>}</Translation>
        )
      }
    ];
    const lengthLists = [
      {
        name: <Translation>{t => <>{t("leveloptions.17")}</>}</Translation>
      },
      { name: <Translation>{t => <>{t("leveloptions.19")}</>}</Translation> },
      { name: <Translation>{t => <>{t("leveloptions.21")}</>}</Translation> }
    ];
    return (
      <>
        <Content>
          <SubTitle>
            <Translation>{t => <>{t("leveloptions.style")}</>}</Translation>
          </SubTitle>
          <FlexContent>
            {styleLists.map((data, index) => (
              <OpitionButton
                key={index}
                active={this.state.style === index}
                onClick={this.changeStyle.bind(this, index)}
              >
                {data.name}
              </OpitionButton>
            ))}
          </FlexContent>
        </Content>
        <Content>
          <SubTitle>
            <Translation>{t => <>{t("leveloptions.length")}</>}</Translation>
          </SubTitle>
          <FlexContent>
            {lengthLists.map((data, index) => (
              <OpitionButton
                key={index}
                active={this.state.length === index}
                onClick={this.changeLength.bind(this, index)}
              >
                {data.name}
              </OpitionButton>
            ))}
          </FlexContent>
        </Content>
      </>
    );
  }
}

export default LevelOption;
