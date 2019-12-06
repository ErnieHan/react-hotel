import React, { Component } from "react";
import {
  Content,
  Left,
  Right,
  Title,
  Text,
  Center,
  ForgetDiv,
  LoginButton,
  ButtonDiv,
  RightCenter,
  RegisterButton
} from "./VRegister-css";

class VRegister extends Component {
  render() {
    return (
      <Content>
        <Left>
          <Title>REGISTERED USER</Title>
          <Text>If you are already registered, please log in.</Text>
          <Center>
            <p>EMAIL ADDRESS *</p>
            <input type="text" />
            <p>PASSWORD *</p>
            <input type="password" />
            <ForgetDiv>
              <div>
                <span>Forgot your password?</span>
              </div>
              <div>
                Consult our <span>Privacy Policy</span> for further information.
              </div>
            </ForgetDiv>
          </Center>
          <ButtonDiv>
            <LoginButton>LOG IN</LoginButton>
          </ButtonDiv>
        </Left>
        <Right>
          <Title>NEW USER</Title>
          <Text>Register now and make the most of My Account.</Text>
          <RightCenter>Not finished</RightCenter>
          <ButtonDiv>
            <RegisterButton>REGISTER</RegisterButton>
          </ButtonDiv>
        </Right>
      </Content>
    );
  }
}

export default VRegister;
