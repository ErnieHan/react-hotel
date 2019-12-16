import React, { Component } from "react";
import { Content } from "./css";
import Swiper from "swiper";
import { mainLists } from "../SwiperPhoto/data";

class SwiperPhotoMobile extends Component {
  componentDidMount() {
    new Swiper(".swiper-mobile-container", {
      pagination: {
        el: ".swiper-mobile-pagination",
        clickable: true
      }
    });
  }
  render() {
    return (
      <Content>
        <div className="swiper-container swiper-mobile-container">
          <div className="swiper-wrapper">
            {mainLists.map((data, index) => (
              <div className="swiper-slide" key={index}>
                <img src={data.url} alt="" />
              </div>
            ))}
          </div>
          <div className="swiper-mobile-pagination"></div>
        </div>
      </Content>
    );
  }
}

export default SwiperPhotoMobile;
