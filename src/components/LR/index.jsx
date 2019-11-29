import React, { Component } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  height: 600px;
  background: #e9e8e7;
`;

const Mid = styled.div`
  width: 5%;
`;

const Right = styled.div`
  width: 35%;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0px;
  background: #f9f9f9;
  padding: 15px;
  min-height: 250px;
`;

const Move = styled.div`
  position: absolute;
  border: 1px solid #f1f1f1;
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  z-index: 99;
`;

class LR extends Component {
  state = {
    stickyOffsetTop: 0,
    randomPosition: 0,
    getRandom: false
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
  }

  getRandom = x => {
    return Math.floor(Math.random() * x) + 1;
  };

  isIE = () => {
    const element = this.refs.sticky;
    const parent = this.refs["sticky-parent"];
    const sibling = this.refs["sticky-sibling"];
    this.setState({
      stickyOffsetTop: element.offsetTop
    });
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > this.state.stickyOffsetTop) {
        if (
          window.pageYOffset >
          sibling.offsetTop + sibling.offsetHeight - element.offsetHeight
        ) {
          const Y = parent.offsetHeight - element.offsetHeight;
          element.style.position = "";
          element.style.top = "0";
          element.style.transform = `translateY(${Y}px)`;
          element.style.width = "";
        } else {
          element.style.position = "fixed";
          element.style.top = "0";
          element.style.width = `${parent.offsetWidth}px`;
          element.style.transform = `translateY(0px)`;
        }
      } else {
        element.style.width = "";
        element.style.position = "";
        element.style.top = "0";
        element.style.transform = `translateY(0px)`;
      }
    });
  };

  render() {
    return (
      <div>
        <Content>
          <Left ref="sticky-sibling">
            {this.state.getRandom && (
              <Draggable handle="strong" bounds="body">
                <Move>
                  <strong>
                    <div>Drag here</div>
                  </strong>
                  <div>You must click my handle to drag me</div>
                </Move>
              </Draggable>
            )}
          </Left>
          <Mid>Mid</Mid>
          <Right ref="sticky-parent">
            <Sticky ref="sticky">Sticky</Sticky>
          </Right>
        </Content>
      </div>
    );
  }
}

export default LR;
