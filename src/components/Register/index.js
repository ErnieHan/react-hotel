import React, { Component } from "react";
import { Content, Title, SubTitle, Grid, SignupButton, WarningText, SuccessfullyText } from "./Register-css";
import base64 from "base-64";
import { Translation } from "react-i18next";
import { withTranslation } from "react-i18next";
import CircleLoading from "../CircleLoading";
import SelectOption from "../SelectOption";

class Register extends Component {
  state = {
    login: false,
    memberData: {
      name: "",
      gender: "female",
      phoneNumber: "",
      mail: "",
      password: "",
    },
    startLoading: false,
    warning: false,
    success: false,
    sec: 3,
  };

  counting;

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
      [name]: value,
    };
    this.setState({
      memberData: editedData,
    });
  };

  submitMemberData = async () => {
    const list = Object.keys(this.state.memberData);
    const checked = list.every(data => this.state.memberData[data] !== "");
    this.setState({
      startLoading: true,
      warning: false,
    });
    if (checked) {
      const { name, gender, password, mail, phoneNumber } = this.state.memberData;
      const securityPassword = base64.encode(password);
      const date = new Date();
      const id = date.getTime();
      const url =
        "https://docs.google.com/forms/d/e/1FAIpQLSf21ipzy6pO_N5iHpiPqvrhV9T6158UH_2aMlwHPbzULAHJoA/formResponse";
      const newData = `${url}?entry.1040801526=${name}&entry.656116715=${id}&entry.321914295=${gender}&entry.1202087412=${mail}&entry.1735527987=${securityPassword}&entry.2087413777=${phoneNumber}&submit=Submit`;
      try {
        await fetch(newData, {
          credentials: "include",
          headers: {
            "content-type": "application/json",
          },
          method: "GET",
          mode: "no-cors",
        }).then(() => {
          // 註冊成功
          this.setState({
            success: true,
            startLoading: false,
          });
          // 倒數三秒
          this.countingStart();
          // 三秒後導入登入頁面
          setTimeout(() => {
            this.countingEnd();
            window.location = "#/login";
          }, 3000);
        });
      } catch (error) {
        console.log(error);
      } finally {
      }
    } else {
      this.setState({
        warning: true,
        startLoading: false,
      });
    }
  };

  countingStart = () => {
    // 每經過一秒便減去一秒
    this.counting = setInterval(() => {
      this.setState({
        sec: this.state.sec - 1,
      });
    }, 1000);
  };

  countingEnd = () => {
    clearInterval(this.counting);
  };

  render() {
    const { name, phoneNumber, password, mail } = this.state.memberData;
    const { t } = this.props;
    const { startLoading, warning, success } = this.state;
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
              <Translation>{t => <>{t("signUpPage.salutation")}</>}</Translation>
            </div>
            {/* <select name="gender" value={gender}>
              <option value="female">{t("signUpPage.miss")}</option>
              <option value="male">{t("signUpPage.mr")}</option>
            </select> */}
            <SelectOption />
            <div>
              <Translation>{t => <>{t("signUpPage.name")}</>}</Translation>
            </div>
            <input placeholder={t("signUpPage.profile")} name="name" value={name} />
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
            <input placeholder={t("signUpPage.format")} name="password" type="password" value={password}></input>
          </Grid>
        </form>
        {success ? (
          <SuccessfullyText>
            <h3>註冊成功!</h3>
            <p>您將在 {this.state.sec} 秒後導入登入頁面</p>
          </SuccessfullyText>
        ) : null}
        {warning ? <WarningText>請填寫完整的資訊！</WarningText> : null}
        <SignupButton onClick={this.submitMemberData}>
          {startLoading ? <CircleLoading /> : <Translation>{t => <>{t("signUpPage.submit")}</>}</Translation>}
        </SignupButton>
      </Content>
    );
  }
}

export default withTranslation()(Register);
