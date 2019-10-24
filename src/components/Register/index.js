import React, { Component } from "react";
import {
  Content,
  Title,
  SubTitle,
  Grid,
  ResignButton,
  LoginButton,
  SignupButton
} from "./Register-css";
import base64 from "base-64";
import { Translation } from "react-i18next";
import { withTranslation } from "react-i18next";

class Register extends Component {
  state = {
    login: false,
    memberData: {
      name: "",
      gender: "female",
      phoneNumber: "",
      mail: "",
      password: ""
    }
  };
  async componentDidMount() {
    // 1. 取得會員資料
    // this.updateMemberListData();
  }

  updateMemberListData = async () => {
    const url =
      "https://spreadsheets.google.com/feeds/list/1frbwI55o0vd9Sj5kROoG_Wagntqjc_gy7kNZFL2buKo/1/public/values?alt=json";
    await fetch(url)
      .then(respone => respone.json())
      .then(data => {
        console.log(data.feed.entry);
      });
  };

  handleChangeMemberData = e => {
    const { name, value } = e.target;
    const editedData = {
      ...this.state.memberData,
      [name]: value
    };
    this.setState({
      memberData: editedData
    });
  };

  submitMemberData = async () => {
    const list = Object.keys(this.state.memberData);
    const checked = list.every(data => this.state.memberData[data] !== "");
    if (checked) {
      const {
        name,
        gender,
        password,
        mail,
        phoneNumber
      } = this.state.memberData;
      const securityPassword = base64.encode(password);
      const date = new Date();
      const id = date.getTime();
      const url =
        "https://docs.google.com/forms/d/e/1FAIpQLSf21ipzy6pO_N5iHpiPqvrhV9T6158UH_2aMlwHPbzULAHJoA/formResponse";
      const newData = `${url}?entry.1040801526=${name}&entry.656116715=${id}&entry.321914295=${gender}&entry.1202087412=${mail}&entry.1735527987=${securityPassword}&entry.2087413777=${phoneNumber}&submit=Submit`;
      await fetch(newData, {
        credentials: "include",
        headers: {
          "content-type": "application/json"
        },
        method: "GET",
        mode: "no-cors"
      });
    }
  };

  render() {
    const { gender, name, phoneNumber, password, mail } = this.state.memberData;
    const { t } = this.props;
    return (
      <Content>
        <Title>
          <Translation>{t => <>{t("signUpPage.title")}</>}</Translation>
        </Title>
        <SubTitle>
          <Translation>{t => <>{t("signUpPage.subtitle")}</>}</Translation>
        </SubTitle>
        <form onChange={this.handleChangeMemberData}>
          <Grid>
            <div>
              <Translation>
                {t => <>{t("signUpPage.salutation")}</>}
              </Translation>
            </div>
            <select name="gender" value={gender}>
              <option value="female">{t("signUpPage.miss")}</option>
              <option value="male">{t("signUpPage.mr")}</option>
            </select>
            <div>
              <Translation>{t => <>{t("signUpPage.name")}</>}</Translation>
            </div>
            <input
              placeholder={t("signUpPage.profile")}
              name="name"
              value={name}
            />
            <div>
              <Translation>{t => <>{t("signUpPage.mobile")}</>}</Translation>
            </div>
            <input name="phoneNumber" value={phoneNumber} />
            <div>
              <Translation>{t => <>{t("signUpPage.email")}</>}</Translation>
            </div>
            <input name="mail" value={mail} />
            <div>
              <Translation>{t => <>{t("signUpPage.password")}</>}</Translation>
            </div>
            <input
              placeholder={t("signUpPage.format")}
              name="password"
              type="password"
              value={password}
            ></input>
          </Grid>
        </form>
        <SignupButton onClick={this.submitMemberData}>
          <Translation>{t => <>{t("signUpPage.submit")}</>}</Translation>
        </SignupButton>
      </Content>
    );
  }
}

export default withTranslation()(Register);
