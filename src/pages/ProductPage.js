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
import BrandStory from "../components/BrandStory";
import ProductTabsMobile from "../components/ProductTabsMobile";
import { Media } from "react-breakpoints";
import { Translation } from "react-i18next";

const Content = styled.div`
  max-width: 1420px;
  margin: 0 auto;
`;

const Layout = styled.div`
  padding: 0 40px;
  @media screen and (max-width: 1023px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 767px) {
    padding: 60px 15px 0px 15px;
  }
`;

class ProductPage extends Component {
  componentDidMount() {
    const { lang } = this.props.match.params;
    if (["en", "jp", "tc"].includes(lang)) {
      // 切換語系
      i18next.changeLanguage(lang);
      // 寫入 Cookie
      writeCookie("language", lang);
      // 存進 Redux
      this.props.changeLanguage(lang);
    } else {
      this.props.history.push("/error");
    }
  }

  render() {
    return (
      <>
        <Layout>
          <Content>
            <Helmet>
              <title>Boltenstern 18K 黃金綠石髓手鍊 &nbsp;|&nbsp; EMPHASIS</title>
              <meta
                name="description"
                content="少年漫畫是指以青少年為主要讀者對象的漫畫，另外讀者組別甚廣，有許多的兒童和少女、甚至成人也是忠實讀者。題材一般以打鬥、懸疑、冒險、科幻為主。"
              />
            </Helmet>
            {/* 麵包屑 */}
            <Breadcrumbs />
            {/* 左右兩欄資訊 */}
            <LR />
            <Media>
              {({ breakpoints, currentBreakpoint }) =>
                breakpoints[currentBreakpoint] > 767 ? null : (
                  <>
                    {/* 手機板資訊選單 */}
                    <ProductTabsMobile />
                  </>
                )
              }
            </Media>
            {/* 捲動至較下方的加入購物車、快速返上鍵 */}
            <ScrollAddToBag />
          </Content>
        </Layout>
        <Media>
          {({ breakpoints, currentBreakpoint }) =>
            breakpoints[currentBreakpoint] > 767 ? (
              <>
                {/* 探索系列故事 */}
                <BrandStory />
              </>
            ) : null
          }
        </Media>
      </>
    );
  }
}

const mapStateToProps = state => ({
  language: state.app.language.language,
});

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: language => {
      dispatch(changeLanguage(language));
    },
  };
};

const RouterProductPage = withRouter(ProductPage);

export default connect(mapStateToProps, mapDispatchToProps)(RouterProductPage);
