import React, { Component } from "react";
import indexImage from "../images/index_pic_7.jfif";
import IframeTest from "../components/IframeTest";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="cool">TESTING 測試用</div>
        <IframeTest />
        <img
          data-src={indexImage}
          style={{ width: "100%" }}
          alt=""
          className="lazyload"
        />
      </div>
    );
  }
}

export default HomePage;
