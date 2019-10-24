import React, { Component } from "react";
import Login from "../components/Login";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9e8e7;
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
      <div>
        <Title>周生生之友</Title>
        <Login />
      </div>
    );
  }
}

export default withRouter(LoginPage);
