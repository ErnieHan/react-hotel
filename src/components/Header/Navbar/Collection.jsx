import React, { Component } from "react";
import styled from "styled-components";
import image01 from "../../../images/navbar/feminine-elegance-bg.jpg";
import image02 from "../../../images/navbar/playful-versatile-bg.jpg";
import image03 from "../../../images/navbar/sleek-modern-bg.jpg";
import shadow from "../../../images/navbar/gradient-bg.png";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.div`
  width: 33.33%;
  height: 600px;
  margin-right: 5px;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${shadow});
    background-repeat: repeat-x;
    background-position: center bottom;
  }
`;

class Collection extends Component {
  render() {
    const collectionData = [
      {
        image: image01
      },
      {
        image: image02
      },
      {
        image: image03
      }
    ];
    return (
      <Content>
        {collectionData.map((data, index) => (
          <Item key={index} img={data.image}></Item>
        ))}
      </Content>
    );
  }
}

export default Collection;
