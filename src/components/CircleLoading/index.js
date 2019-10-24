import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const spinnerBorder = keyframes`
from{
    transform: rotate(0)
}
to{
    transform: rotate(360deg)
}
`;

const Div = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  vertical-align: text-bottom;
  border: 0.15em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spinnerBorder} 0.75s linear infinite;
`;

class CircleLoading extends Component {
  render() {
    return (
      <>
        <Div />
      </>
    );
  }
}

export default CircleLoading;
