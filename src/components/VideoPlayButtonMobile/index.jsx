import React, { Component } from "react";
import { Content } from "./css";
import { HOST_URL } from "../../constants";

class VideoPlayButtonMobile extends Component {
  render() {
    return (
      <Content>
        <img src={`${HOST_URL}/images/play-button-small.png`} alt="" />
        <span>Play Video</span>
      </Content>
    );
  }
}

export default VideoPlayButtonMobile;
