import React, { Component } from "react";
import { Body, BannerImage, CollecttionContent, Content, Text, GridContent, GridProductOne } from "./css";
import logo from "../../../images/logo-embrace.svg";
import { Translation } from "react-i18next";

class BrandStoryContent extends Component {
  render() {
    return (
      <>
        <Body>
          <BannerImage />
          <CollecttionContent>
            <Content>
              <Text>
                <img src={logo} alt="" />
                <h3>
                  <Translation>{t => <>{t("barndStory.text")}</>}</Translation>
                </h3>
              </Text>
              <GridContent>
                <GridProductOne>
                  <div></div>
                </GridProductOne>
                <div className="two"></div>
                <div className="three"></div>
                <div className="four">
                  <div>
                    <h1>用途廣泛</h1>
                    <p>適合自用搭配，亦是送禮之選，不同場合也能彰顯價值。</p>
                  </div>
                </div>
                <div className="five">123</div>
                <div className="six">123</div>
              </GridContent>
            </Content>
          </CollecttionContent>
        </Body>
      </>
    );
  }
}

export default BrandStoryContent;
