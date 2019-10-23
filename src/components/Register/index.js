import React, { Component } from "react";
import {
  Content,
  Title,
  SubTitle,
  Grid,
  ResignButton,
  LoginButton
} from "./Register-css";
import { Link } from "react-router-dom";
import base64 from "base-64";

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
    return (
      <Content>
        <Title>登記成為會員</Title>
        <SubTitle>
          由這一刻開始，盡情享受會員尊尚折扣優惠及「悦享錢」購物獎賞，同時體驗個人化禮遇及貼心服務。
        </SubTitle>
        <form onChange={this.handleChangeMemberData}>
          <Grid>
            <div>稱謂</div>
            <select name="gender" value={gender}>
              <option value="female">女士</option>
              <option value="male">先生</option>
            </select>
            <div>姓名</div>
            <input placeholder="須與身分證件相同" name="name" value={name} />
            <div>手機號碼</div>
            <input name="phoneNumber" value={phoneNumber} />
            <div>電子信箱</div>
            <input name="mail" value={mail} />
            <div>密碼</div>
            <input
              placeholder="6 - 15個字符"
              name="password"
              type="password"
              value={password}
            ></input>
          </Grid>
        </form>
        <ResignButton onClick={this.submitMemberData}>註冊</ResignButton>
        <Link to="/login">
          <LoginButton>立即登入</LoginButton>
        </Link>
      </Content>
    );
  }
}

export default Register;
