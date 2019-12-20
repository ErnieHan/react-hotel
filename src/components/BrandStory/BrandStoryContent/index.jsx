import React, { Component } from "react";
import {
  Body,
  BannerImage,
  CollecttionContent,
  Content,
  FlexContent,
  Box,
  Text
} from "./css";
import logo from "../../../images/logo-embrace.svg";
import { Translation } from "react-i18next";
import image from "../../../images/img-designer-product.png";

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
              <FlexContent>
                <Box></Box>
              </FlexContent>
            </Content>
          </CollecttionContent>
        </Body>
      </>
    );
  }
}

export default BrandStoryContent;
