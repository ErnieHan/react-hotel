import React, { Component } from "react";
import { Content, Left, Right, Center, Buttom, Item } from "./Header-css";
import logoImage from "../../images/logo-black.25b6dfd5.svg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../store/actions";
import { Translation } from "react-i18next";
import i18n from "i18next";

class Header extends Component {
  logout = () => {
    window.location = "./";
    localStorage.removeItem("user");
    this.props.login(false);
  };

  goHomePage = () => {
    this.props.history.push("/");
  };

  changeLanguage = () => {
    i18n.changeLanguage("en");
  };

  render() {
    const { isLogin, memberInfo, getMemberInfoSuccessfully } = this.props;
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
              你好,
              {getMemberInfoSuccessfully && memberInfo.gsx$name.$t}
              {console.log(memberInfo, getMemberInfoSuccessfully)}
            </Item>
          ) : (
            <Item>
              <Link to="/login">
                <span>登入</span>
              </Link>
              /
              <Link to="/register">
                <span>註冊</span>
              </Link>
            </Item>
          )}
          <Item>
            <i className="fas fa-heart" />
          </Item>
          <Item>
            <i className="fas fa-shopping-bag" />
          </Item>
          <Item onClick={this.changeLanguage}>繁</Item>
          {isLogin && <Item onClick={this.logout}>登出</Item>}
        </Right>
        <Buttom>品牌概念 產品系列 珠寶產品 購物體驗</Buttom>
      </Content>
    );
  }
}

const withRouterHeader = withRouter(Header);

const mapStateToProps = state => ({
  isLogin: state.app.login.isLogin,
  getLoginSuccessfully: state.app.login.getLoginSuccessfully,
  memberInfo: state.app.memberInfo.memberInfo,
  getMemberInfoSuccessfully: state.app.memberInfo.getMemberInfoSuccessfully
});

const mapDispatchToProps = dispatch => {
  return {
    login: bool => {
      dispatch(login(bool));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouterHeader);
