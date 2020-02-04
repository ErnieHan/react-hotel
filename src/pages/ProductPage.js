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
import RecentlyView from "../components/RecentlyView";
import RecentlyViewMobile from "../components/RecentlyViewMobile";

export const Content = styled.div`
  max-width: 1420px;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

export const Layout = styled.div`
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
              <title>
                Boltenstern 18K 黃金綠石髓手鍊 &nbsp;|&nbsp; EMPHASIS
                官方網站商城
              </title>
              <meta
                name="description"
                content="手鍊由奧地利工匠精心打造，配以3D打印技術，以18K黃金絲線包裹紅石榴石，造型立體出眾。3顆綠玉髓同時閃亮耀目動人的光芒，猶如現代女性閃爍綻放的內在美。"
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
          {/* 最近瀏覽紀錄 */}
          <Media>
            {({ breakpoints, currentBreakpoint }) =>
              breakpoints[currentBreakpoint] > 767 ? (
                <RecentlyView />
              ) : (
                <RecentlyViewMobile />
              )
            }
          </Media>
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
