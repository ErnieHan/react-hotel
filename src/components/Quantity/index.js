import React, { Component } from "react";
import { Translation } from "react-i18next";
import { QuantityFlex, Content, Sub, Plus, Number, Minus } from "./css";

export class index extends Component {
  state = {
    quantity: 1
  };

  addQuantity = () => {
    if (this.state.quantity < 5) {
      this.setState({
        quantity: this.state.quantity + 1
      });
    }
  };

  minusQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }
  };
  render() {
    const { quantity } = this.state;
    return (
      <Content>
        <Sub>
          <Translation>{t => <>{t("product.7")}</>}</Translation>
        </Sub>
        <QuantityFlex>
          <Minus onClick={this.minusQuantity} />
          <Number>{quantity}</Number>
          <Plus onClick={this.addQuantity} />
        </QuantityFlex>
      </Content>
    );
  }
}

export default index;
