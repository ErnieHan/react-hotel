import React, { Component } from "react";
import Information from "../ProductTabs/Information";
import DeliveryAndReturn from "../ProductTabs/DeliveryAndReturn";
import { Translation } from "react-i18next";
import { Content, Button, Plus, Tab, TabLayout, TabContent } from "./css";
import $ from "jquery";
import BrandStoryContent from "../BrandStory/BrandStoryContent";

class ProductTabsMobile extends Component {
  state = {
    active: 2
  };
  handleClick = index => {
    if (this.state.active === index) {
      // 全部關閉
      this.setState({
        active: null
      });
    } else {
      // 打開自己
      this.setState({
        active: index
      });
      setTimeout(() => {
        const offsetTop = $(`#product-tabs-mobile-${index}`).offset().top;
        console.log(offsetTop, "offsetTop");
        // window.scrollTo({
        //   top: offsetTop - 100,
        //   behavior: "smooth"
        // });
      }, 800);
    }
  };
  render() {
    const { active } = this.state;
    const tabLists = [
      {
        name: <Translation>{t => <>{t("tabs.title01")}</>}</Translation>,
        body: <Information />
      },
      {
        name: <Translation>{t => <>{t("tabs.title02")}</>}</Translation>,
        body: <DeliveryAndReturn />
      },
      {
        name: <Translation>{t => <>{t("barndStory.explore")}</>}</Translation>,
        body: <BrandStoryContent />
      }
    ];
    // const tabBodyLists = [
    //   { body: <Information /> },
    //   { body: <DeliveryAndReturn /> }
    // ];
    return (
      <Content>
        {tabLists.map((data, index) => (
          <Tab key={index} id={`product-tabs-mobile-${index}`}>
            <Button
              onClick={this.handleClick.bind(this, index)}
              active={active === index}
            >
              {data.name}
              <Plus active={active === index} />
            </Button>
            <TabLayout active={active === index}>
              <TabContent>{data.body}</TabContent>
            </TabLayout>
          </Tab>
        ))}
      </Content>
    );
  }
}

export default ProductTabsMobile;
