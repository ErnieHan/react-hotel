import React from "react";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { login, fetchMember, changeLanguage } from "./store/actions";
// i18n
// import { Translation } from "react-i18next";
// import i18n from "i18next";
// Router
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import Page404 from "./pages/Page404";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyAccountPage from "./pages/MyAccountPage";
import ProductPage from "./pages/ProductPage";
// Components
import Header from "./components/Header";
import styled from "styled-components";
import i18n from "i18next";
import getCookie from "./function/getCookie";
import writeCookie from "./function/writeCookie";
import Loading from "./components/Loading";
import OpenedPage from "./pages/OpenedPage";

const Content = styled.div`
  padding: 0 40px;
  @media screen and (max-width: 767px) {
    padding: 75px 15px 0px 15px;
  }
`;

class App extends React.Component {
  async componentDidMount() {
    // 加載滑動效果
    if (!("scrollBehavior" in document.documentElement.style)) {
      await import("scroll-behavior-polyfill");
    }

    const getUserId = localStorage.getItem("user");
    if (getUserId) {
      // 瀏覽器中有userID 執行登入
      this.props.fetchMember(getUserId);
    } else {
      // 沒有則 執行未登入
      this.props.login(false);
    }
    const cookie_language = getCookie("language");
    const { changeLanguage } = this.props;
    if (!cookie_language) {
      // 初始時先預設語系為中文
      writeCookie("language", "zhTW");
    } else {
      // 如果Cookie有語系的話 則判斷要切換為哪一個語系
      if (cookie_language === "zhTW") {
        i18n.changeLanguage("zhTW");
        changeLanguage("zhTW");
      } else if (cookie_language === "jp") {
        i18n.changeLanguage("jp");
        changeLanguage("jp");
      } else {
        i18n.changeLanguage("en");
        changeLanguage("en");
      }
    }
  }

  render() {
    const { getLoginSuccessfully, isLoading } = this.props;
    return (
      <div>
        {getLoginSuccessfully && (
          <Router>
            <Content>
              <Header />
              {isLoading && <Loading />}
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/register">
                  <RegisterPage />
                </Route>
                <Route path="/my-account">
                  <MyAccountPage />
                </Route>
                <Route path="/product">
                  <ProductPage />
                </Route>
                <Route path="/opened">
                  <OpenedPage />
                </Route>
                <Route path="*">
                  <Page404 />
                </Route>
              </Switch>
            </Content>
          </Router>
        )}
      </div>
    );
  }
}

App.propTypes = {
  setApp: PropTypes.func
};

const mapStateToProps = state => ({
  isLogin: state.app.login.isLogin,
  getLoginSuccessfully: state.app.login.getLoginSuccessfully,
  isLoading: state.app.loading.isLoading
});

const mapDispatchToProps = dispatch => {
  return {
    login: bool => {
      dispatch(login(bool));
    },
    fetchMember: memberID => {
      dispatch(fetchMember(memberID));
    },
    changeLanguage: language => {
      dispatch(changeLanguage(language));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
