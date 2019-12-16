import React, { Component } from "react";
import { Content, Image, Text } from "./Information-css";
import { Translation } from "react-i18next";

export class Information extends Component {
  render() {
    return (
      <Content>
        <Image>
          <img
            src="https://cdn.chowsangsang.com/dfs/ivCssModelImages/90792/bc877aad82665ceeff76581ae2f9ec6b.jpg"
            alt=""
          />
        </Image>
        <Text>
          <p>
            <Translation>{t => <>{t("tabs.1-1")}</>}</Translation>
          </p>
          <p>
            <Translation>{t => <>{t("tabs.1-2")}</>}</Translation>#
            85194E-18KR-DD
          </p>
          <ul>
            <li>
              <Translation>{t => <>{t("tabs.1-3")}</>}</Translation>
            </li>
            <li>
              <Translation>{t => <>{t("tabs.1-4")}</>}</Translation>
            </li>
          </ul>
        </Text>
      </Content>
    );
  }
}

export default Information;
