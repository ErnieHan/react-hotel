import React, { Component } from "react";
import image01 from "../../../images/navbar/store-experience.jpg";
import image02 from "../../../images/navbar/custom-service.jpg";
import styled from "styled-components";
import { Translation } from "react-i18next";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div`
  margin: 0 10px;
  cursor: pointer;
  img {
    max-width: 250px;
  }
  h3 {
    text-align: center;
  }
  &:hover {
    img {
      opacity: 0.85;
    }
    h3 {
      color: tan;
    }
  }
`;

class Basic extends Component {
  render() {
    return (
      <Content>
        <Item>
          <img src={image01} alt="" />
          <h3>
            <Translation>{t => <>{t("navbarBasic.storeexperience")}</>}</Translation>
          </h3>
        </Item>
        <Item>
          <img src={image02} alt="" />
          <h3>
            <Translation>{t => <>{t("navbarBasic.customerservice")}</>}</Translation>
          </h3>
        </Item>
      </Content>
    );
  }
}

export default Basic;
