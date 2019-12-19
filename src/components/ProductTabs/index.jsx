import React, { Component } from "react";
import { TabsContent, TabTitle, TabBody, TabsLayout } from "./ProductTabs-css";
import Information from "./Information";
import DeliveryAndReturn from "./DeliveryAndReturn";
import { Translation } from "react-i18next";

class ProductTabs extends Component {
  state = {
    active: 0
  };

  handleClick = index => {
    this.setState({
      active: index
    });
  };
  render() {
    const tabLists = [
      { name: <Translation>{t => <>{t("tabs.title01")}</>}</Translation> },
      { name: <Translation>{t => <>{t("tabs.title02")}</>}</Translation> }
      // { name: <Translation>{t => <>{t("tabs.title03")}</>}</Translation> }
    ];
    const tabBodyLists = [
      { body: <Information /> },
      { body: <DeliveryAndReturn /> }
      // { body: <div>3</div> }
    ];
    return (
      <TabsLayout>
        <TabsContent>
          {tabLists.map((data, index) => (
            <TabTitle
              key={index}
              active={index === this.state.active}
              onClick={this.handleClick.bind(this, index)}
            >
              {data.name}
            </TabTitle>
          ))}
        </TabsContent>
        {tabBodyLists.map((data, index) => (
          <TabBody key={index} active={index === this.state.active}>
            {data.body}
          </TabBody>
        ))}
      </TabsLayout>
    );
  }
}

export default ProductTabs;
