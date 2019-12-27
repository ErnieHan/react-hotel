import React, { Component } from "react";
import { Title, Content, Body } from "./css";
import Swiper from "swiper";
import { HOST_URL } from "../../constants";

export class RecentlyViewMobile extends Component {
  componentDidMount() {
    new Swiper(".swiper-container-recently-view-mobile", {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  render() {
    return (
      <Content>
        <Title>Recently viewed</Title>
        <Body>
          <div class="swiper-layout">
            <div class="swiper-container swiper-container-recently-view-mobile">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="recent-product-content">
                    <div class="recent-product-img">
                      <img data-src={`${HOST_URL}/images/recent01.png`} className="lazyload" alt="" />
                    </div>
                    <div class="recent-product-desc">
                      <div class="collection-name">BLOOM</div>
                      <div class="product-name">18K Gold Chrysoprase Bracelet</div>
                      <div class="price">HK$5200.00</div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="recent-product-content">
                    <div class="recent-product-img">
                      <img src={`${HOST_URL}/images/recent02.png`} alt="" />
                    </div>
                    <div class="recent-product-desc">
                      <div class="collection-name">Symphony</div>
                      <div class="product-name">18K Yellow & White Diamond Bracelet</div>
                      <div class="price">HK$13000.00</div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="recent-product-content">
                    <div class="recent-product-content">
                      <div class="recent-product-img">
                        <img src={`${HOST_URL}/images/recent03.png`} alt="" />
                      </div>
                      <div class="recent-product-desc">
                        <div class="collection-name">Symphony</div>
                        <div class="product-name">18K Red Gold Lapis Lazuli Double-sided Ring</div>
                        <div class="price">HK$13000.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="recent-product-content">
                    <div class="recent-product-img">
                      <img src={`${HOST_URL}/images/recent01.png`} alt="" />
                    </div>
                    <div class="recent-product-desc">
                      <div class="collection-name">BLOOM</div>
                      <div class="product-name">18K Yellow Gold Freshwater Pearl Earrings</div>
                      <div class="price">HK$5200.00</div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="recent-product-content">
                    <div class="recent-product-img">
                      <img src={`${HOST_URL}/images/recent02.png`} alt="" />
                    </div>
                    <div class="recent-product-desc">
                      <div class="collection-name">Symphony</div>
                      <div class="product-name">Lapis Lazuli Double-sided </div>
                      <div class="price">HK$13000.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-button-next custom-button-next"></div>
            <div class="swiper-button-prev custom-button-prev"></div>
          </div>
        </Body>
      </Content>
    );
  }
}

export default RecentlyViewMobile;
