import React from "react";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { login, fetchMember } from "./store/actions";
// i18n
// import { Translation } from "react-i18next";
// import i18n from "i18next";
// Router
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Page404 from "./pages/Page404";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// Components
import Header from "./components/Header";
import styled from "styled-components";

const Content = styled.div`
  padding: 0 40px;
`;

class App extends React.Component {
  componentDidMount() {
    const getUserId = localStorage.getItem("user");
    if (getUserId) {
      // 瀏覽器中有userID 執行登入
      this.props.fetchMember(getUserId);
    } else {
      // 沒有則 執行未登入
      this.props.login(false);
    }
  }
  render() {
    const { getLoginSuccessfully } = this.props;
    return (
      <div>
        {getLoginSuccessfully && (
          <Router>
            <Content>
              <Header />
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
                <Route path="/about">
                  <AboutPage />
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
  getLoginSuccessfully: state.app.login.getLoginSuccessfully
});

const mapDispatchToProps = dispatch => {
  return {
    login: bool => {
      dispatch(login(bool));
    },
    fetchMember: memberID => {
      dispatch(fetchMember(memberID));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
