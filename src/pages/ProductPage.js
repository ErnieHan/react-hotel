import React, { Component } from "react";
import LR from "../components/LR";
import ScrollAddToBag from "../components/ScrollAddToBag";
import Breadcrumbs from "../components/Breadcrumbs";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";
import i18next from "i18next";
import writeCookie from "../function/writeCookie";
import { connect } from "react-redux";
import { changeLanguage } from "../store/actions";

const Content = styled.div`
  max-width: 1420px;
  margin: 0 auto;
`;

class ProductPage extends Component {
  componentDidMount() {
    const { lang } = this.props.match.params;
    // 切換語系
    i18next.changeLanguage(lang);
    // 寫入 Cookie
    writeCookie("language", lang);
    // 存進 Redux
    this.props.changeLanguage(lang);
  }
  render() {
    return (
      <Content>
        <Helmet>
          <title> Boltenstern 18K 黃金綠石髓手鍊 &nbsp;|&nbsp; EMPHASIS</title>
          <meta
            name="description"
            content="少年漫畫是指以青少年為主要讀者對象的漫畫，另外讀者組別甚廣，有許多的兒童和少女、甚至成人也是忠實讀者。題材一般以打鬥、懸疑、冒險、科幻為主。"
          />
        </Helmet>
        <Breadcrumbs />
        <LR />
        <ScrollAddToBag />
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  language: state.app.language.language
});

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: language => {
      dispatch(changeLanguage(language));
    }
  };
};

const RouterProductPage = withRouter(ProductPage);

export default connect(mapStateToProps, mapDispatchToProps)(RouterProductPage);
