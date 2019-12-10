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
import { Translation } from "react-i18next";

class VRegister extends Component {
  render() {
    return (
      <Content>
        <Left>
          <Title>
            <Translation>{t => <>{t("login.l0")}</>}</Translation>
          </Title>
          <Text>
            <Translation>{t => <>{t("login.l1")}</>}</Translation>
          </Text>
          <Center>
            <p>
              <Translation>{t => <>{t("login.l2")}</>}</Translation>
            </p>
            <input type="text" />
            <p>
              <Translation>{t => <>{t("login.l3")}</>}</Translation>
            </p>
            <input type="password" />
            <ForgetDiv>
              <div>
                <span>
                  <Translation>{t => <>{t("login.l4")}</>}</Translation>
                </span>
              </div>
              <div>
                <Translation>{t => <>{t("login.l5")}</>}</Translation>
              </div>
            </ForgetDiv>
          </Center>
          <ButtonDiv>
            <LoginButton>
              <Translation>{t => <>{t("login.l6")}</>}</Translation>
            </LoginButton>
          </ButtonDiv>
        </Left>
        <Right>
          <Title>
            <Translation>{t => <>{t("login.l7")}</>}</Translation>
          </Title>
          <Text>
            <Translation>{t => <>{t("login.l8")}</>}</Translation>
          </Text>
          <RightCenter>Not finished</RightCenter>
          <ButtonDiv>
            <RegisterButton>
              <Translation>{t => <>{t("login.l9")}</>}</Translation>
            </RegisterButton>
          </ButtonDiv>
        </Right>
      </Content>
    );
  }
}

export default VRegister;
