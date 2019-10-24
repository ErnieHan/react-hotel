import React, { Component } from "react";
import styled from "styled-components";
import Account from "../components/Account";

const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9e8e7;
`;

export class MyAccountPage extends Component {
  render() {
    return (
      <>
        <Title>周生生之友</Title>
        <Account />
      </>
    );
  }
}

export default MyAccountPage;
