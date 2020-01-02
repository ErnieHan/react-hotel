import React, { Component } from "react";
import styled from "styled-components";
import { HOST_URL } from "../constants";
import writeCookie from "../function/writeCookie";

const Content = styled.div`
  max-width: 1230px;
  padding: 0 40px;
  margin: 0 auto;
  img {
    max-width: 220px;
    margin: 0 auto 3rem auto;
    display: block;
    padding-top: 40px;
  }
  @media (max-width: 1023px) {
    padding: 0 15px;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 2rem;
`;

const LoginContent = styled.div`
  max-width: 340px;
  margin: 0 auto;
  border: 1px solid #d1d1d1;
  padding: 15px;
  border-radius: 5px;
`;

const SubTitle = styled.div`
  font-size: 14px;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #d1d1d1;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const SigninButton = styled.button`
  width: 100%;
  background: tan;
  color: #fff;
  padding: 0.7rem;
  border-radius: 5px;
  font-size: 15px;
`;

const ErrorText = styled.div`
  color: red;
  margin-bottom: 1rem;
`;

class RenderApp extends Component {
  state = {
    user: "",
    password: "",
    error: false
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    const { user, password } = this.state;
    if (user === "Ernie" && password === "han19941024") {
      writeCookie("renderApp", "true");
      this.setState({
        error: false
      });
    } else {
      this.setState({
        error: true
      });
    }
  };
  render() {
    return (
      <Content>
        <img src={`${HOST_URL}/images/logo-black.25b6dfd5.svg`} alt="" />
        <Title>Sign in to EMPHASIS</Title>
        <LoginContent>
          <SubTitle>Username or email address</SubTitle>
          <Input
            type="text"
            value={this.state.user}
            name="user"
            onChange={this.handleChange}
          />
          <SubTitle>Password</SubTitle>
          <Input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />
          {this.state.error && <ErrorText>Please try it again!</ErrorText>}
          <SigninButton onClick={this.handleClick}>Sign in</SigninButton>
        </LoginContent>
      </Content>
    );
  }
}

export default RenderApp;
