import React, { Component } from "react";
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
import i18n from "i18next";
import writeCookie from "../../function/writeCookie";
import MiniBag from "../MiniBag";

class Header extends Component {
  logout = () => {
    localStorage.removeItem("user");
    this.props.login(false);
    this.props.history.push("/");
  };

  goHomePage = () => {
    this.props.history.push("/");
  };

  changeLanguage = () => {
    // 判斷目前的語系
    const { language, changeLanguage } = this.props;
    if (language === "zhTW") {
      // 切換為英文
      writeCookie("language", "en");
      i18n.changeLanguage("en");
      changeLanguage("en");
    } else {
      // 切換為中文
      writeCookie("language", "zhTW");
      i18n.changeLanguage("zhTW");
      changeLanguage("zhTW");
    }
  };

  render() {
    const {
      isLogin,
      memberInfo,
      getMemberInfoSuccessfully,
      language
    } = this.props;
    return (
      <Content>
        <Left>
          TW / NTD$ | <i className="fas fa-map-marker-alt" />
        </Left>
        <Center onClick={this.goHomePage}>
          <img src={logoImage} alt="" />
        </Center>
        <Right>
          {isLogin ? (
            <Item>
              <Translation>{t => <>{t("header.hello")}</>}</Translation>,
              {getMemberInfoSuccessfully && memberInfo.gsx$name.$t}
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
          <Item onClick={this.changeLanguage}>
            {language === "zhTW" ? "繁" : "EN"}
          </Item>
          {isLogin && (
            <Item onClick={this.logout}>
              <Translation>{t => <>{t("header.logout")}</>}</Translation>
            </Item>
          )}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouterHeader);
