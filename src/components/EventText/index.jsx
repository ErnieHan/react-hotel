import React, { Component } from "react";
import styled from "styled-components";

export const Content = styled.div`
  border: 5px solid #f1f1f1;
  margin-bottom: 1rem;
  padding: 1rem;
  color: #bc2727;
  text-align: center;
`;

export const Row = styled.div`
  border-bottom: 1px solid #e9e8e7;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

export const Button = styled.span`
  color: tan;
  border-bottom: 1px solid tan;
  cursor: pointer;
`;

class EventText extends Component {
  render() {
    return (
      <>
        <Content>
          <Row>免費配送服務及分店取貨</Row>
          <Row>
            首次購物每滿NTD$12,000即減NTD$500 | 優惠碼: FTV500A |{" "}
            <Button>了解更多</Button>
          </Row>
        </Content>
      </>
    );
  }
}

export default EventText;
