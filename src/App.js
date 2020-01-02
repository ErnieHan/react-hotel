import React from "react";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { login, fetchMember, changeLanguage } from "./store/actions";
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
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import OpenedPage from "./pages/OpenedPage";
import TicketPage from "./pages/TicketPage";
import ListPage from "./pages/ListPage";
import GoogleAPIPage from "./pages/GoogleAPIPage";
import API from "./pages/API";
import ProductsPage from "./pages/ProductsPage";
import getCookie from "./function/getCookie";
import RenderApp from "./pages/RenderApp";
import writeCookie from "./function/writeCookie";

class App extends React.Component {
  state = {
    renderApp: false
  };

  async componentDidMount() {
    // 加載滑動效果
    if (!("scrollBehavior" in document.documentElement.style)) {
      await import("scroll-behavior-polyfill");
    }
    const renderApp = getCookie("renderApp");
    if (renderApp === "true") {
      this.setState({
        renderApp: true
      });
    } else {
      writeCookie("renderApp", "false");
    }
  }

  render() {
    const { isLoading } = this.props;
    const { renderApp } = this.state;
    return (
      <>
        {renderApp ? (
          <Router>
            <Header />
            {isLoading && <Loading />}
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/:lang/home">
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
              <Route path="/products">
                <ProductsPage />
              </Route>
              <Route path="/:lang/product">
                <ProductPage />
              </Route>
              <Route path="/opened">
                <OpenedPage />
              </Route>
              <Route path="/ticket">
                <TicketPage />
              </Route>
              <Route path="/list">
                <ListPage />
              </Route>
              <Route path="/google-api">
                <GoogleAPIPage />
              </Route>
              <Route path="/api">
                <API />
              </Route>
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
            <Footer />
          </Router>
        ) : (
          <RenderApp />
        )}
      </>
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
