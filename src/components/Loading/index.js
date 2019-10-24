import React, { Component } from "react";
import styled from "styled-components";
import loadingImage from "../../images/loader.gif";

const Content = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: white;
  opacity: 0.65;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Loading extends Component {
  render() {
    return (
      <Content>
        <img src={loadingImage} alt="" />
      </Content>
    );
  }
}

export default Loading;
