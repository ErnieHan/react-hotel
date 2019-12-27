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
          title={"MENU"}
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
  padding: 1.25rem;
  text-align: center;
`;

const Log = styled.div`
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
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  div {
    color: #8e8e8e;
    width: 50%;
    padding: 1rem;
    text-align: center;
    &:first-child {
      border-right: 1px solid #d9d9d9;
    }
  }
`;

const Body = () => {
  return (
    <>
      <Log>LOGIN / REGISTER</Log>
      <Log2>
        <div>LOCATOR</div>
        <div>GOLD PRICE</div>
      </Log2>
      <Item>ABOUT</Item>
      <Item>COLLECTIONS</Item>
      <Item>All JEWELLERY</Item>
      <Item>EXPERIENCE</Item>
      <Item>MEMBER</Item>
      <Item>WEDDING</Item>
      <Item>GIFTS</Item>
      <Item>ROLEX</Item>
      <Item>STAR SHOPPER</Item>
      <Log>
        CONTACT US <span>+886 2789 6809</span>
      </Log>
      <Log>EN</Log>
    </>
  );
};

export default MobileMenu;
