import React, { Component } from "react";
import {
  Content,
  Bag,
  UpButton,
  DownButton,
  TotalPrice,
  CheckoutButton,
  Title,
  CloseButton,
  BagOutline
} from "./MiniBag-css";
import { connect } from "react-redux";
import { showMiniBag } from "../../store/actions";
import closeImage from "../../images/close.png";
import { Translation } from "react-i18next";

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
      <Content onMouseOver={this.openMiniBag} onMouseLeave={this.closeMiniBag}>
        <i className="fas fa-shopping-bag"></i>
        <BagOutline>
          <Bag active={active}>
            <Title>
              <h4>
                <Translation>{t => <>{t("miniBag.title")}</>}</Translation> (0)
              </h4>
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
            <TotalPrice>
              <Translation>{t => <>{t("miniBag.total")}</>}</Translation>:
              NT$3,000
            </TotalPrice>
            <CheckoutButton>
              <Translation>{t => <>{t("miniBag.checkout")}</>}</Translation>
            </CheckoutButton>
          </Bag>
        </BagOutline>
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

export default connect(mapStateToProps, mapDispatchToProps)(MiniBag);
