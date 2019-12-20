import React, { Component } from "react";
import indexImage from "../images/img-banner.jpg";
// import { Helmet } from "react-helmet";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import writeCookie from "../function/writeCookie";
import i18next from "i18next";
import { connect } from "react-redux";
import { changeLanguage } from "../store/actions";

const BannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Banner = styled.div`
  background-image: url("${indexImage}");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position-x: 20%;
  background-size: cover;
  position: relative;
  &::after{
    width: 100%;
    height: 100%;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.3) 100%);
  }
`;

const Content = styled.div`
  background: pink;
`;

class HomePage extends Component {
  componentDidMount() {
    const { lang } = this.props.match.params;
    if (lang) {
      writeCookie("language", lang);
      i18next.changeLanguage(lang);
      this.props.changeLanguage(lang);
    }
  }
  render() {
    return (
      <>
        <BannerWrapper height={window.innerHeight}>
          <Banner></Banner>
        </BannerWrapper>
        <Content>123</Content>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: language => {
      dispatch(changeLanguage(language));
    },
  };
};

const RouterHomePage = withRouter(HomePage);
export default connect(null, mapDispatchToProps)(RouterHomePage);
