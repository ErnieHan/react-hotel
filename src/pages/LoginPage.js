import React, { Component } from "react";
import Login from "../components/Login";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  max-width: 1420px;
  margin: 0 auto;
`;

class LoginPage extends Component {
  componentDidMount() {
    // 判斷是否為已登入狀態
    const getUserID = localStorage.getItem("user");
    if (getUserID) {
      // 如果已登入，就跳轉頁面
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <Content>
        <Login />
      </Content>
    );
  }
}

export default withRouter(LoginPage);
