import React, { Component } from "react";
import { Grid, ResignButton, LoginButton } from "../Register/Register-css.js";
import { Content, Title, ImageDiv } from "./Login-css";
import base64 from "base-64";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login, updateMemberInfo, showLoading } from "../../store/actions";
import { Translation } from "react-i18next";
import { withTranslation } from "react-i18next";
import image from "../../images/logo-site.png";

class Login extends Component {
  state = {
    phoneNumber: "",
    password: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  login = async () => {
    const { phoneNumber, password } = this.state;
    const securityPassword = base64.encode(password);
    if (phoneNumber && password) {
      this.props.showLoading(true);
      const url = encodeURI(
        `https://spreadsheets.google.com/feeds/list/1frbwI55o0vd9Sj5kROoG_Wagntqjc_gy7kNZFL2buKo/1/public/values?alt=json&sq=password=${securityPassword} and phonenumber="${phoneNumber}"`
      );
      try {
        await fetch(url)
          .then(respone => respone.json())
          .then(data => {
            if (data.feed.entry) {
              // 登入成功
              // 1. 儲存會員資料
              const memberInfo = data.feed.entry[0];
              this.props.updateMemberInfo(memberInfo);
              // 2. 將會員id存在localStorage
              const memberId = memberInfo.gsx$id.$t;
              localStorage.setItem("user", memberId);
              // 3. 跳轉頁面
              this.props.history.push("/");
            } else {
              throw new Error("登入失敗");
            }
          });
      } catch (error) {
        console.log(error);
        alert("登入失敗");
      } finally {
        this.props.showLoading(false);
      }
    } else {
      alert("請填寫完整的資料");
    }
  };

  render() {
    const { phoneNumber, password } = this.state;
    const { t } = this.props;
    return (
      <>
        <ImageDiv>
          <img src={image} alt="" />
        </ImageDiv>
        <Content>
          <Title>
            <Translation>{t => <>{t("signInPage.title")}</>}</Translation>
          </Title>
          <form onChange={this.handleChange}>
            <Grid>
              <div>
                <Translation>{t => <>{t("signInPage.mobile")}</>}</Translation>
              </div>
              <input name="phoneNumber" value={phoneNumber} />
              <div>
                <Translation>
                  {t => <>{t("signInPage.password")}</>}
                </Translation>
              </div>
              <input
                placeholder={t("signInPage.format")}
                name="password"
                type="password"
                value={password}
              ></input>
            </Grid>
          </form>
          <LoginButton onClick={this.login}>
            <Translation>{t => <>{t("signInPage.loginButton")}</>}</Translation>
          </LoginButton>
          <ResignButton>
            <Translation>{t => <>{t("signInPage.registerNow")}</>}</Translation>
          </ResignButton>
        </Content>
      </>
    );
  }
}

const withLang = withTranslation()(Login);
const withRouterLogin = withRouter(withLang);

const mapStateToProps = state => ({
  isLogin: state.app.login.isLogin,
  memberInfo: state.app.memberInfo.memberInfo
});

const mapDispatchToProps = dispatch => {
  return {
    login: bool => {
      dispatch(login(bool));
    },
    updateMemberInfo: data => {
      dispatch(updateMemberInfo(data));
    },
    showLoading: bool => {
      dispatch(showLoading(bool));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouterLogin);
