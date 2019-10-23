import React, { Component } from "react";
import Login from "../components/Login";

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
        <Login />
      </div>
    );
  }
}

export default LoginPage;
