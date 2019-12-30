import React, { Component } from "react";
import { Content } from "./css";
import { HOST_URL } from "../../constants";
import Modal from "../Modal";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import styled from "styled-components";

class MobileMenu extends Component {
  targetElement = null;
  state = {
    active: false,
  };
  componentDidMount() {
    this.targetElement = document.querySelector("#mobile-menu-modal");
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  open = () => {
    this.setState({
      active: true,
    });
    disableBodyScroll(this.targetElement);
  };

  closeModal = () => {
    this.setState({
      active: false,
    });
    enableBodyScroll(this.targetElement);
  };

  render() {
    return (
      <>
        <Content onClick={this.open}>
          <img src={`${HOST_URL}/images/menu.png`} alt="" />
        </Content>
        <Modal
          title={"MENU 目錄"}
          body={
            <>
              <Body />
            </>
          }
          active={this.state.active}
          closeModal={this.closeModal.bind(this)}
          id="mobile-menu-modal"
        />
      </>
    );
  }
}

const Item = styled.div`
  font-size: 15px;
  padding: 1.25rem;
  text-align: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    right: 0;
    background: url(${HOST_URL}/images/down-arrow.png) no-repeat center center;
    background-size: contain;
    transform: translateY(-50%) rotate(-90deg);
  }
`;

const Log = styled.div`
  font-size: 15px;
  padding: 1rem;
  border: 1px solid #d9d9d9;
  text-align: center;
  margin-bottom: 1rem;
  color: #8e8e8e;
  span {
    color: tan;
    border-bottom: 1px solid tan;
  }
`;

const Log2 = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  margin-bottom: 1rem;
  div {
    color: #8e8e8e;
    width: 50%;
    padding: 1rem;
    text-align: center;
    &:first-child {
      border-right: 1px solid #d9d9d9;
    }
    i {
      margin-right: 5px;
    }
  }
`;

const Body = () => {
  return (
    <>
      <Item>ABOUT 品牌概念</Item>
      <Item>COLLECTIONS 產品系列</Item>
      <Item>All JEWELLERY 所有珠寶</Item>
      <Item>EXPERIENCE 購物體驗</Item>
      <Item>MEMBER</Item>
      <Item>WEDDING 婚嫁</Item>
      <Item>GIFTS 禮品</Item>
      <Item>ROLEX 勞力士</Item>
      <Item>STAR SHOPPER 周生生之友</Item>
      <Log>登入 / 註冊</Log>
      <Log2>
        <div>
          <i className="fas fa-map-marker-alt"></i>
          分店位置
        </div>
        <div>
          <i className="fas fa-dollar-sign"></i>
          金價資訊
        </div>
      </Log2>
      <Log>
        聯絡我們 <span>+886 2789 6809</span>
      </Log>
      <Log>EN</Log>
    </>
  );
};

export default MobileMenu;
