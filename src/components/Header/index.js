import React, { Component, PureComponent } from "react";
import {
  Content,
  Left,
  Right,
  Center,
  Buttom,
  Item,
  SubItem
} from "./Header-css";
import logoImage from "../../images/logo-black.25b6dfd5.svg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login, changeLanguage } from "../../store/actions";
import { Translation } from "react-i18next";
import MiniBag from "../MiniBag";
import LanguageSwitch from "../LanguageSwitch";
import MiniMemberInfo from "../MiniMemberInfo";

class Header extends PureComponent {
  goHomePage = () => {
    this.props.history.push("/");
  };

  shouldComponentUpdate(nextProp, nextState) {
    console.log(nextProp, this.props);
    if (nextProp.isLogin !== this.props.isLogin) return true;
    return false;
  }

  render() {
    // const { isLogin } = this.props;
    const isLogin = false;
    return (
      <Content>
        <Left></Left>
        <Center onClick={this.goHomePage}>
          <img src={logoImage} alt="" />
        </Center>
        <Right>
          {isLogin ? (
            <Item>
              <MiniMemberInfo />
            </Item>
          ) : (
            <Item>
              <Link to="/login">
                <span>
                  <Translation>{t => <>{t("header.login")}</>}</Translation>
                </span>
              </Link>
              /
              <Link to="/register">
                <span>
                  <Translation>{t => <>{t("header.register")}</>}</Translation>
                </span>
              </Link>
            </Item>
          )}
          <Item>
            <i className="fas fa-heart" />
          </Item>
          <Item>
            <MiniBag />
          </Item>
          <Item>
            <LanguageSwitch />
          </Item>
        </Right>
        <Buttom>
          <SubItem>
            <Translation>{t => <>{t("header.spotlight")}</>}</Translation>
          </SubItem>
          <SubItem>
            <Translation>{t => <>{t("header.collections")}</>}</Translation>
          </SubItem>
          <SubItem>
            <Translation>{t => <>{t("header.jewellery")}</>}</Translation>
          </SubItem>
          <SubItem>
            <Translation>{t => <>{t("header.services")}</>}</Translation>
          </SubItem>
        </Buttom>
      </Content>
    );
  }
}

const withRouterHeader = withRouter(Header);

const mapStateToProps = state => ({
  isLogin: state.app.login.isLogin,
  getLoginSuccessfully: state.app.login.getLoginSuccessfully,
  memberInfo: state.app.memberInfo.memberInfo,
  getMemberInfoSuccessfully: state.app.memberInfo.getMemberInfoSuccessfully,
  language: state.app.language.language
});

const mapDispatchToProps = dispatch => {
  return {
    login: bool => {
      dispatch(login(bool));
    },
    changeLanguage: language => {
      dispatch(changeLanguage(language));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouterHeader);
