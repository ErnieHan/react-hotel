import React, { Component } from "react";
import styled from "styled-components";
import $ from "jquery";
import { Translation } from "react-i18next";

const Content = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  background: #f1f1f1;
  z-index: 50;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: ${props =>
    props.active ? "translateY(0%)" : "translateY(-200%)"};
  transition: all 350ms ease;
  @media (max-width: 991px) {
    padding: 15px;
  }
  @media (max-width: 767px) {
    padding: 6px 15px;
  }
`;

const AddToBag = styled.button`
  padding: 6px;
  background: #1a1a1a;
  color: #fff;
  min-width: 150px;
  @media (max-width: 767px) {
    padding: 2px 6px;
    min-width: auto;
  }
`;

const Text = styled.div`
  font-size: 1rem;
  h3 {
    font-size: 1.13rem;
  }
  @media (max-width: 767px) {
    font-size: 11px;
    h3 {
      font-size: 11px;
    }
  }
`;

export class index extends Component {
  state = {
    active: false
  };

  componentDidMount() {
    const element = document.getElementById("add-to-bag");
    if (element) {
      window.addEventListener("scroll", this.handleScroll);
    }
  }
  handleScroll = () => {
    const element = $("#add-to-bag");
    if (window.pageYOffset > element.offset().top) {
      console.log("顯示");
      this.setState({
        active: true
      });
    } else {
      console.log("回去");
      this.setState({
        active: false
      });
    }
  };
  render() {
    return (
      <Content active={this.state.active}>
        <Text>
          <h3>Marco Bicego</h3>
          <Translation>{t => <>{t("product.0")}</>}</Translation>
        </Text>
        <div>
          <AddToBag>
            <Translation>{t => <>{t("product.8")}</>}</Translation>
          </AddToBag>
        </div>
      </Content>
    );
  }
}

export default index;
