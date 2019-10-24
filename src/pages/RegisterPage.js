import React, { Component } from "react";
import Register from "../components/Register";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9e8e7;
`;

class RegisterPage extends Component {
  render() {
    return (
      <div>
        <Title>周生生之友</Title>
        <Register />
      </div>
    );
  }
}

export default RegisterPage;
