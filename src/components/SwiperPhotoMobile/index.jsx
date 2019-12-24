import React, { Component } from "react";
import { Content, VideoContent, CloseVideoButton } from "./css";
import Swiper from "swiper";
import { mainLists } from "../SwiperPhoto/data";
import { connect } from "react-redux";
import { startPlayingVideo } from "../../store/actions";

class SwiperPhotoMobile extends Component {
  componentDidMount() {
    new Swiper(".swiper-mobile-container", {
      pagination: {
        el: ".swiper-mobile-pagination",
        clickable: true,
      },
    });
  }
  closeVideo = () => {
    this.props.startPlayingVideo(false);
  };
  render() {
    const videoUrl = "//cdn.chowsangsang.com/dfs/ivCssModelImages/88377/35ed7129a652205f2fedb6454c615bfc.mp4";
    return (
      <Content>
        <div className="swiper-container swiper-mobile-container">
          <div className="swiper-wrapper">
            {mainLists.map((data, index) => (
              <div className="swiper-slide" key={index}>
                <img data-src={data.url} className="lazyload" alt="" />
              </div>
            ))}
          </div>
          <div className="swiper-mobile-pagination"></div>
        </div>
        {this.props.playing && (
          <VideoContent>
            <CloseVideoButton onClick={this.closeVideo} />
            <video id="product-video" key={videoUrl} loop={true} autoPlay={true}>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </VideoContent>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(SwiperPhotoMobile);
