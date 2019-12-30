import React, { Component } from "react";
import styled from "styled-components";
import { HOST_URL } from "../../constants";

const Content = styled.div`
  position: fixed;
  background: url(${HOST_URL}/images/top.png) no-repeat center center;
  background-size: contain;
  width: 50px;
  height: 50px;
  right: 0px;
  bottom: 80px;
  transition: all 350ms ease;
  border-width: 1px 0 1px 1px;
  border-style: solid;
  border-color: #8e8e8e;
  z-index: 10;
  transform: ${props => (props.show ? "translateX(0%)" : "translateX(100%)")};
`;

export class ScrollTopButton extends Component {
  state = {
    show: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.show !== this.state.show) return true;
    return false;
  }
  handleScroll = () => {
    const height = window.innerHeight;
    if (window.pageYOffset > height) {
      this.setState({
        show: true,
      });
    } else {
      this.setState({
        show: false,
      });
    }
  };
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  render() {
    return <Content show={this.state.show} onClick={this.scrollTop}></Content>;
  }
}

export default ScrollTopButton;
