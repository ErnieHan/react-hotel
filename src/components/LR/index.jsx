import React, { Component } from "react";
import styled from "styled-components";
import {
  Price,
  OrigPrice,
  NewsTitle,
  AddToBag,
  NeedsHelp,
  FlexRow,
  FlexCol,
  PriceSection
} from "./LR-css";
import return7DayImage from "../../images/icon-7days-return.1d791f24.svg";
import mainTenanceImage from "../../images/icon-1year-maintenance.73f22180.svg";
import SwiperPhoto from "../SwiperPhoto";
import ProductTabs from "../ProductTabs";
import { Translation } from "react-i18next";
import i18next from "i18next";
import SwiperPhotoMobile from "../SwiperPhotoMobile";
import SoldoutButton from "../SoldoutButton";
import Quantity from "../Quantity";
import LevelOption from "../LevelOption";
import VideoPlayButtonMobile from "../VideoPlayButtonMobile";
import { Media } from "react-breakpoints";
import EventText from "../EventText";
import Modal from "../Modal";
import LockProduct from "../LockProduct";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";
// Redux
import { connect } from "react-redux";
import { showLockProductModal } from "../../store/actions";
import { getParams } from "../../function/getParams";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    display: block;
  }
`;

const Left = styled.div`
  width: 60%;
  padding: 15px;
  @media (max-width: 1023px) {
    width: 65%;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0;
  }
`;

const Mid = styled.div`
  width: 5%;
  @media (max-width: 1023px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 35%;
  position: relative;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Sticky = styled.div`
  position: sticky;
  top: 60px;
  padding: 15px;
  h1 {
    font-size: 1.25rem;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: normal;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 767px) {
    padding: 0;
    background: #fff;
  }
`;

const Co = styled.div`
  margin-bottom: 1rem;
  padding-left: 1rem;
  position: relative;
  font-weight: bold;
  &::before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    border-width: 4px;
    border-style: solid;
    border-color: #1a1a1a transparent transparent #1a1a1a;
    top: 0;
    left: 0;
  }
  span {
    color: #c69667;
    border-bottom: 1px solid #c69667;
    cursor: pointer;
  }
`;

class LR extends Component {
  state = {
    stickyOffsetTop: 0,
    randomPosition: 0,
    getRandom: false
  };

  componentDidMount() {
    getParams();
    //
    window.addEventListener("message", this.receiveMessage);
    const maxWidth = document.body.offsetWidth;
    // 產生亂數
    const randomNum = this.getRandom(maxWidth);
    this.setState({
      randomPosition: randomNum,
      getRandom: true
    });
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
      this.isIE();
    }
    // this.isIE();
  }

  receiveMessage = e => {
    if (e.data === "OPENED_PAGE_CALLING") {
      //被子層呼叫了，開始執行事件
      console.log("被子層呼叫了，開始執行事件");
      // 1.執行把子層關閉
      window.openedPage.close();
    }
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleSticky);
  }

  getRandom = x => {
    return Math.floor(Math.random() * x) + 1;
  };

  GetAbsPos = o => {
    var pos = { x: 0, y: 0 };
    while (o != null) {
      pos.x += o.offsetLeft;
      pos.y += o.offsetTop;
      o = o.offsetParent; //若區塊外還有父元素，就繼續往外推
    }
    return pos;
  };

  isIE = () => {
    window.addEventListener("scroll", this.handleSticky);
  };

  handleSticky = () => {
    const element = this.refs["sticky"];
    const parent = this.refs["sticky-parent"];
    const parentTop = this.GetAbsPos(parent).y;
    const parentWidth = parent.offsetWidth;
    const parentHeight = parent.offsetHeight;
    const elementHeight = element.offsetHeight;
    if (window.pageYOffset > parentTop) {
      if (window.pageYOffset > parentTop + parentHeight - elementHeight) {
        //
        element.style.position = "";
        element.style.width = "";
        element.style.top = "0px";
        element.style.transform = `translateY(${parentHeight -
          elementHeight}px)`;
      } else {
        element.style.position = "fixed";
        element.style.maxWidth = "100%";
        element.style.width = `${parentWidth}px`;
        element.style.top = "0px";
        element.style.transform = "";
      }
    } else {
      element.style.position = "";
      element.style.width = "";
      element.style.top = "";
      element.style.transform = "";
    }
  };

  closeLockProductModal = () => {
    const targetElement = document.querySelector("#lock-product-modal");
    this.props.showLockProductModal(false);
    enableBodyScroll(targetElement);
  };

  render() {
    const lang = i18next.language;
    return (
      <>
        <Content>
          <Left ref="sticky-sibling">
            <Media>
              {({ breakpoints, currentBreakpoint }) =>
                breakpoints[currentBreakpoint] > 767 ? (
                  <>
                    {/* 滑動產品圖 */}
                    <SwiperPhoto />
                    {/* 桌機版產品資訊 */}
                    <ProductTabs />
                  </>
                ) : (
                  <>
                    {/* 手機板滑動產品圖 */}
                    <SwiperPhotoMobile />
                    {/* 手機板播放商品影片鍵 */}
                    <VideoPlayButtonMobile />
                  </>
                )
              }
            </Media>
          </Left>
          <Mid />
          <Right ref="sticky-parent" id="sticky-parent">
            <Sticky ref="sticky" id="sticky">
              <NewsTitle>
                <Translation>{t => <>{t("product.10")}</>}</Translation>
              </NewsTitle>
              <h1>Marco Bicego</h1>
              <h3>
                <Translation>{t => <>{t("product.0")}</>}</Translation>
              </h3>
              <PriceSection>
                <OrigPrice>
                  {lang === "tc" ? "NT$5,800" : null}
                  {lang === "en" ? "$199.00" : null}
                  {lang === "jp" ? "¥17,400" : null}
                </OrigPrice>
                <Price>
                  {lang === "tc" ? "NT$4,800" : null}
                  {lang === "en" ? "$169.00" : null}
                  {lang === "jp" ? (
                    <>
                      ¥14,400
                      <span style={{ fontSize: "13px", paddingLeft: "2px" }}>
                        税込
                      </span>
                    </>
                  ) : null}
                </Price>
              </PriceSection>

              {/* 活動文字 */}
              {/* <EventText /> */}

              {/* 產品規格選項 */}
              <LevelOption />

              {/* 購買數量 */}
              <Quantity />
              <Co>本商品攜帶銷貨保單可至所有門市，享受免費刻字服務。</Co>
              <Co>
                首次購物即享有 95 折優惠 | <span>了解更多</span>
              </Co>
              {/* 加入購物袋按鈕 */}
              <AddToBag id="add-to-bag">
                <Translation>{t => <>{t("product.8")}</>}</Translation>
              </AddToBag>
              {/* 補貨中按鈕 */}
              <>
                <SoldoutButton />
              </>
              <NeedsHelp>
                <Translation>{t => <>{t("product.11")}</>}</Translation>
                <a href="tel:85221923228">+852 2192 3228</a>
              </NeedsHelp>
              <FlexRow>
                <FlexCol col={6}>
                  <img src={return7DayImage} alt="" />
                  <Translation>{t => <>{t("product.12")}</>}</Translation>
                </FlexCol>
                <FlexCol col={6}>
                  <img src={mainTenanceImage} alt="" />
                  <Translation>{t => <>{t("product.13")}</>}</Translation>
                </FlexCol>
              </FlexRow>
            </Sticky>
          </Right>
        </Content>
        <Modal
          title="缺貨商品預留服務"
          body={<LockProduct />}
          active={this.props.lockProductModalActive}
          closeModal={this.closeLockProductModal}
          id="lock-product-modal"
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  lockProductModalActive: state.app.lockProductModal.active
});

const mapDispatchToProps = dispatch => {
  return {
    showLockProductModal: bool => {
      dispatch(showLockProductModal(bool));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LR);
