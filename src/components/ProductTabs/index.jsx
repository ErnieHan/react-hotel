import React, { Component } from "react";
import { TabsContent, TabTitle, TabBody } from "./ProductTabs-css";
import Information from "./Information";
import DeliveryAndReturn from "./DeliveryAndReturn";

class ProductTabs extends Component {
  state = {
    active: 1
  };

  handleClick = index => {
    this.setState({
      active: index
    });
  };
  render() {
    const tabLists = [
      { name: "產品資訊" },
      { name: "配送及退換" },
      { name: "稅項及關稅" }
    ];
    const tabBodyLists = [
      { body: <Information /> },
      { body: <DeliveryAndReturn /> },
      { body: <div>3</div> }
    ];
    return (
      <>
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
      </>
    );
  }
}

export default ProductTabs;
