import React, { Component } from "react";
import indexImage from "../images/index_pic_7.jfif";

class HomePage extends Component {
  render() {
    return (
      <div>
        <img src={indexImage} style={{ width: "100%" }} alt="" />
      </div>
    );
  }
}

export default HomePage;
