import React, { Component } from "react";
import {
  Content,
  Bag,
  UpButton,
  DownButton,
  TotalPrice,
  CheckoutButton,
  Title,
  CloseButton
} from "./MiniBag-css";
import { connect } from "react-redux";
import { showMiniBag } from "../../store/actions";
import closeImage from "../../images/close.png";

class MiniBag extends Component {
  openMiniBag = () => {
    this.props.showMiniBag(true);
  };
  closeMiniBag = () => {
    this.props.showMiniBag(false);
  };
  render() {
    const { active } = this.props;
    return (
      <Content onMouseOver={this.openMiniBag}>
        <i className="fas fa-shopping-bag"></i>
        <Bag active={active} onMouseLeave={this.closeMiniBag}>
          <Title>
            <h4>My Bag(0)</h4>
            <CloseButton onClick={this.closeMiniBag}>
              <img src={closeImage} alt="" />
            </CloseButton>
          </Title>
          <UpButton>
            <i className="fas fa-angle-up"></i>
          </UpButton>
          <DownButton>
            <i className="fas fa-angle-down"></i>
          </DownButton>
          <TotalPrice>Total: NT$3,000</TotalPrice>
          <CheckoutButton>Checkout</CheckoutButton>
        </Bag>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  active: state.app.miniBag.active
});

const mapDispatchToProps = dispatch => {
  return {
    showMiniBag: bool => {
      dispatch(showMiniBag(bool));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniBag);
