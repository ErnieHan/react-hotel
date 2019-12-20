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
import $ from "jquery";
import { async } from "q";

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
  postGoogleAPI = async () => {
    var data = {
      name: "Good",
      phone: "+0911456368",
      time: "2018/02/10 22:46:00",
      order: "Apple",
      price: "NTD$1000",
      orderNum: "訂單編號01"
    };
    $.ajax({
      type: "get",
      url:
        "https://script.google.com/macros/s/AKfycbxwfuuzVWs2ZtrmTTSLys-TH28gerVYLFFwwJhRdStS_l-YJFs/exec",
      data: data,
      dataType: "JSON",
      success: function(response) {
        console.log(response);
        alert("感謝您的訂購！！");
      }
    });
  };

  search = () => {
    var data = {
      name: "Good",
      phone: "+0911456368"
    };
    $.ajax({
      type: "post",
      url:
        "https://script.google.com/macros/s/AKfycbxQyvLycM7PgAYc2w0bzKeroFC0Rqh0QxHMFW3jaP-AP21-_egW/exec",
      data: data,
      dataType: "JSON",
      success: function(response) {
        console.log(response);
      }
    });
  };

  setting = () => {
    var data = {
      name: "Apple先生",
      phone: "+123",
      index: "9",
      status: "ABC有被更改嗎"
    };
    $.ajax({
      type: "post",
      url:
        "https://script.google.com/macros/s/AKfycbxqtlFIHCK88Wh0GiJglLYsVeRgh1znuH5Ki_jgWRUypPwYvFw/exec",
      data: data,
      dataType: "JSON",
      mode: "cors",
      success: function(response) {
        console.log(response);
        alert("成功");
      }
    });
  };

  render() {
    return (
      <>
        <Layout>
          <Content>
            <Helmet>
              <title>
                Boltenstern 18K 黃金綠石髓手鍊 &nbsp;|&nbsp; EMPHASIS
              </title>
              <meta
                name="description"
                content="少年漫畫是指以青少年為主要讀者對象的漫畫，另外讀者組別甚廣，有許多的兒童和少女、甚至成人也是忠實讀者。題材一般以打鬥、懸疑、冒險、科幻為主。"
              />
            </Helmet>
            {/* 麵包屑 */}
            <button onClick={this.postGoogleAPI}>送出表單</button>
            <br />
            <button onClick={this.search}>查詢表單</button>
            <br />
            <button onClick={this.setting}>更改資料</button>
            <Breadcrumbs />
            {/* 左右兩欄資訊 */}
            <LR />
            {/* 手機板資訊選單 */}
            <ProductTabsMobile />
            {/* 捲動至較下方的加入購物車、快速返上鍵 */}
            <ScrollAddToBag />
          </Content>
        </Layout>
        {/* 探索系列故事 */}
        <BrandStory />
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
