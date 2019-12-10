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
  PriceSection,
  QuantitySection,
  Sub,
  QuantityFlex,
  PlusButton,
  Quantity,
  SoldOutButton,
  OpitionButton,
  OpitionDisableButton
} from "./LR-css";
import return7DayImage from "../../images/icon-7days-return.1d791f24.svg";
import mainTenanceImage from "../../images/icon-1year-maintenance.73f22180.svg";
import Modal from "../Modal";
import SwiperPhoto from "../SwiperPhoto";
import ProductTabs from "../ProductTabs";
import { lockBody, unlockBody } from "../../function/bodyLockStatus";
import { Translation } from "react-i18next";
import i18next from "i18next";

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
  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const Mid = styled.div`
  width: 5%;
  @media (max-width: 767px) {
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

class LR extends Component {
  state = {
    stickyOffsetTop: 0,
    randomPosition: 0,
    getRandom: false,
    showModal: false
  };

  componentDidMount() {
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

  open = () => {
    lockBody();
    document.body.style.overflow = "hidden";
    this.setState({
      showModal: true
    });
  };

  close = () => {
    unlockBody();
    document.body.style.overflow = "";
    this.setState({
      showModal: false
    });
  };

  render() {
    const lang = i18next.language;
    return (
      <>
        <Content>
          <Left ref="sticky-sibling">
            {/* 滑動產品圖 */}
            <SwiperPhoto />
            <ProductTabs />
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
                  {lang === "zhTW" ? "$5,800" : null}
                  {lang === "en" ? "$199" : null}
                  {lang === "jp" ? "¥17,400" : null}
                </OrigPrice>
                <Price>
                  {lang === "zhTW" ? "$4,800" : null}
                  {lang === "en" ? "$169" : null}
                  {lang === "jp" ? "¥14,400(税込)" : null}
                </Price>
              </PriceSection>
              <QuantitySection>
                <Sub>
                  <Translation>{t => <>{t("product.1")}</>}</Translation>
                </Sub>
                <QuantityFlex>
                  <OpitionButton active>
                    <Translation>{t => <>{t("product.2")}</>}</Translation>
                  </OpitionButton>
                  <OpitionButton>
                    <Translation>{t => <>{t("product.3")}</>}</Translation>
                  </OpitionButton>
                  <OpitionDisableButton>
                    <Translation>{t => <>{t("product.4")}</>}</Translation>
                  </OpitionDisableButton>
                </QuantityFlex>
              </QuantitySection>
              <QuantitySection>
                <Sub>
                  <Translation>{t => <>{t("product.5")}</>}</Translation>
                </Sub>
                <QuantityFlex>
                  <OpitionButton>
                    13<Translation>{t => <>{t("product.6")}</>}</Translation>
                  </OpitionButton>
                  <OpitionButton active>
                    15<Translation>{t => <>{t("product.6")}</>}</Translation>
                  </OpitionButton>
                  <OpitionButton>
                    17<Translation>{t => <>{t("product.6")}</>}</Translation>
                  </OpitionButton>
                  <OpitionDisableButton>
                    19<Translation>{t => <>{t("product.6")}</>}</Translation>
                  </OpitionDisableButton>
                  <OpitionButton>
                    21<Translation>{t => <>{t("product.6")}</>}</Translation>
                  </OpitionButton>
                </QuantityFlex>
              </QuantitySection>
              <QuantitySection>
                <Sub>
                  <Translation>{t => <>{t("product.7")}</>}</Translation>
                </Sub>
                <QuantityFlex>
                  <PlusButton>-</PlusButton>
                  <Quantity>1</Quantity>
                  <PlusButton>+</PlusButton>
                </QuantityFlex>
              </QuantitySection>
              <AddToBag id="add-to-bag">
                <Translation>{t => <>{t("product.8")}</>}</Translation>
              </AddToBag>
              <SoldOutButton onClick={this.open}>
                <Translation>{t => <>{t("product.9")}</>}</Translation>
              </SoldOutButton>
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
        <div style={{ height: "1000px" }}></div>
        <Modal
          title="到貨通知"
          body="body"
          active={this.state.showModal}
          closeModal={this.close.bind(this)}
        />
      </>
    );
  }
}

export default LR;
