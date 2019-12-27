import React, { Component } from "react";
import { Content } from "./css";
import { HOST_URL } from "../../constants";
import { connect } from "react-redux";
import { startPlayingVideo } from "../../store/actions";
import { Translation } from "react-i18next";

class VideoPlayButtonMobile extends Component {
  showVideo = () => {
    this.props.startPlayingVideo(true);
    const video = document.getElementById("product-video");
    video.play();
  };

  render() {
    return (
      <Content>
        <div onClick={this.showVideo}>
          <img src={`${HOST_URL}/images/play-button-small.png`} alt="" />
          <span>
            <Translation>{t => <>{t("videobutton.play")}</>}</Translation>
          </span>
        </div>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  playing: state.app.video.playing,
});

const mapDispatchToProps = dispatch => {
  return {
    startPlayingVideo: bool => {
      dispatch(startPlayingVideo(bool));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayButtonMobile);
