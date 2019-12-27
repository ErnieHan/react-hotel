import React, { Component } from "react";
import Swiper from "swiper";
import { Content, ArrowThumb, PlayButton } from "./SwiperPhoto-css";
import { mainLists, thumbLists, video } from "./data";

export class SwiperPhoto extends Component {
  componentDidMount() {
    // 小圖設定
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      direction: "vertical",
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".vert-button-next",
        prevEl: ".vert-button-prev",
      },
    });
    // 大圖設定
    new Swiper(".gallery-main", {
      allowTouchMove: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }

  render() {
    return (
      <Content>
        {/* 小圖 */}
        <ArrowThumb>
          {/* 上箭頭 */}
          <div className="vert-button-prev swiper-button-prev"></div>
          <div className="swiper-container gallery-thumbs">
            <div className="swiper-wrapper">
              {thumbLists.map((img, index) => (
                <div
                  className="swiper-slide"
                  style={{
                    background: `url(${img.url}) no-repeat center`,
                    backgroundSize: "cover",
                  }}
                  key={index}
                />
              ))}
              <div
                className="swiper-slide"
                style={{
                  background: `url(${video.img}) no-repeat center`,
                  backgroundSize: "cover",
                }}
              >
                <PlayButton />
              </div>
            </div>
          </div>
          {/* 下箭頭 */}
          <div className="vert-button-next swiper-button-next"></div>
        </ArrowThumb>
        {/* 大圖 */}
        <div className="swiper-container gallery-main">
          <div className="swiper-wrapper">
            {mainLists.map((img, index) => (
              <div className="swiper-slide" key={index}>
                <img data-src={img.url} className="lazyload" alt="" />
              </div>
            ))}
            <div className="swiper-slide">
              <video id="" key={video.url} loop={true} autoPlay={true}>
                <source src={video.url} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </Content>
    );
  }
}

export default SwiperPhoto;
