import React, { Component } from "react";
import Register from "../components/Register";
import styled from "styled-components";
import { Translation } from "react-i18next";

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
        <Title>
          <Translation>
            {t => <>{t("signUpPage.chowsangsangMember")}</>}
          </Translation>
        </Title>
        <Register />
      </div>
    );
  }
}

export default RegisterPage;
