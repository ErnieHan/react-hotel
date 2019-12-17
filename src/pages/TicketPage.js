import React, { Component } from "react";
import styled from "styled-components";
import TicketsSection from "../components/TicketsSection";
import TicketTop from "../components/TicketTop";
import image from "../images/ticket.webp";

const ContentTitle = styled.div`
  max-width: 1470px;
  margin: 35px auto 0px auto;
  padding: 0 15px;
  @media (max-width: 767px) {
    padding: 0;
  }
`;

const Content = styled.div`
  display: flex;
  max-width: 1470px;
  margin: 0 auto;
  @media (max-width: 767px) {
    display: block;
  }
`;

const Left = styled.div`
  width: 60%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const Mid = styled.div`
  width: 5%;
  @media (max-width: 767px) {
    display: none;
  }
`;
const Right = styled.div`
  width: 35%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export class TicketPage extends Component {
  render() {
    return (
      <>
        <ContentTitle>
          <TicketTop />
        </ContentTitle>
        <Content>
          <Left>
            <TicketsSection />
          </Left>
          <Mid />
          <Right>
            <img src={image} alt="" />
          </Right>
        </Content>
      </>
    );
  }
}

export default TicketPage;
