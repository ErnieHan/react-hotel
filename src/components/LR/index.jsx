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

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    display: block;
  }
`;

const Left = styled.div`
  width: 60%;
  background: #e9e8e7;
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
  top: 0px;
  background: #f9f9f9;
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
              <NewsTitle>新季產品</NewsTitle>
              <h1>Marco Bicego</h1>
              <h3>18K黃金鑽石不對稱耳環</h3>
              <PriceSection>
                <OrigPrice>NT$5,800</OrigPrice>
                <Price>NT$4,800</Price>
              </PriceSection>
              <QuantitySection>
                <Sub>款式</Sub>
                <QuantityFlex>
                  <OpitionButton active>夾式</OpitionButton>
                  <OpitionButton>垂掛式</OpitionButton>
                  <OpitionDisableButton>加大垂掛式</OpitionDisableButton>
                </QuantityFlex>
              </QuantitySection>
              <QuantitySection>
                <Sub>長度</Sub>
                <QuantityFlex>
                  <OpitionButton>13公分</OpitionButton>
                  <OpitionButton active>15公分</OpitionButton>
                  <OpitionButton>17公分</OpitionButton>
                  <OpitionDisableButton>19公分</OpitionDisableButton>
                  <OpitionButton>21公分</OpitionButton>
                </QuantityFlex>
              </QuantitySection>
              <QuantitySection>
                <Sub>數量</Sub>
                <QuantityFlex>
                  <PlusButton>-</PlusButton>
                  <Quantity>1</Quantity>
                  <PlusButton>+</PlusButton>
                </QuantityFlex>
              </QuantitySection>
              <AddToBag>加入購物袋</AddToBag>
              <SoldOutButton onClick={this.open}>已售完補貨中</SoldOutButton>
              <NeedsHelp>需要協助? +852 2192 3228</NeedsHelp>
              <FlexRow>
                <FlexCol col={6}>
                  <img src={return7DayImage} alt="" />
                  7天無理由退換貨
                </FlexCol>
                <FlexCol col={6}>
                  <img src={mainTenanceImage} alt="" />
                  1年飾品保養
                </FlexCol>
              </FlexRow>
            </Sticky>
          </Right>
        </Content>
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
