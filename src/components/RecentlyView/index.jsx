import React, { Component } from "react";
import { Title, Content, Body } from "./css";
import Swiper from "swiper";
import { HOST_URL } from "../../constants";

export class RecentlyView extends Component {
  componentDidMount() {
    new Swiper(".swiper-container-recently-view", {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
  render() {
    return (
      <Content>
        <Title>Recently Viewed</Title>
        <Body>
          <div className="swiper-layout">
            <div className="swiper-container swiper-container-recently-view">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="recent-product-content">
                    <div className="recent-product-img">
                      <img
                        data-src={`${HOST_URL}/images/recent01.png`}
                        className="lazyload"
                        alt=""
                      />
                    </div>
                    <div className="recent-product-desc">
                      <div className="collection-name">BLOOM</div>
                      <div className="product-name">
                        18K Gold Chrysoprase Bracelet
                      </div>
                      <div className="price">HK$5200.00</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="recent-product-content">
                    <div className="recent-product-img">
                      <img src={`${HOST_URL}/images/recent02.png`} alt="" />
                    </div>
                    <div className="recent-product-desc">
                      <div className="collection-name">Symphony</div>
                      <div className="product-name">
                        18K Yellow & White Diamond Bracelet
                      </div>
                      <div className="price">HK$13000.00</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="recent-product-content">
                    <div className="recent-product-img">
                      <img src={`${HOST_URL}/images/recent03.png`} alt="" />
                    </div>
                    <div className="recent-product-desc">
                      <div className="collection-name">Symphony</div>
                      <div className="product-name">
                        18K Red Gold Lapis Lazuli Double-sided Ring
                      </div>
                      <div className="price">HK$13000.00</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="recent-product-content">
                    <div className="recent-product-img">
                      <img src={`${HOST_URL}/images/recent01.png`} alt="" />
                    </div>
                    <div className="recent-product-desc">
                      <div className="collection-name">BLOOM</div>
                      <div className="product-name">
                        18K Yellow Gold Freshwater Pearl Earrings
                      </div>
                      <div className="price">HK$5200.00</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="recent-product-content">
                    <div className="recent-product-img">
                      <img src={`${HOST_URL}/images/recent02.png`} alt="" />
                    </div>
                    <div className="recent-product-desc">
                      <div className="collection-name">Symphony</div>
                      <div className="product-name">
                        Lapis Lazuli Double-sided{" "}
                      </div>
                      <div className="price">HK$13000.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next custom-button-next"></div>
            <div className="swiper-button-prev custom-button-prev"></div>
          </div>
        </Body>
      </Content>
    );
  }
}

export default RecentlyView;
