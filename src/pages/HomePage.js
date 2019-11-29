import React, { Component } from "react";
import indexImage from "../images/index_pic_7.jfif";
import IframeTest from "../components/IframeTest";

class HomePage extends Component {
  render() {
    return (
      <div>
        <IframeTest />
        <img src={indexImage} style={{ width: "100%" }} alt="" />
      </div>
    );
  }
}

export default HomePage;
