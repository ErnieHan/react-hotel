import React, { Component } from "react";
import { Content, Title } from "./css";
import $ from "jquery";
import { Translation } from "react-i18next";
import BrandStoryContent from "./BrandStoryContent";
import downarrowImage from "../../images/down-arrow.png";

class BrandStory extends Component {
  scrollToBrandStory = () => {
    const offsetTop = $("#brand-story").offset().top;
    const headerHeight = 60;
    window.scrollTo({
      top: offsetTop - headerHeight,
      behavior: "smooth"
    });
  };
  render() {
    return (
      <Content>
        <Title onClick={this.scrollToBrandStory}>
          <h3>
            <Translation>{t => <>{t("barndStory.explore")}</>}</Translation>
          </h3>
          <img src={downarrowImage} alt="down-arrow" />
        </Title>
        <div id="brand-story">
          <BrandStoryContent />
        </div>
      </Content>
    );
  }
}

export default BrandStory;
