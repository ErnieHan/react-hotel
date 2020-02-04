import styled from "styled-components";
import { HOST_URL } from "../../constants";

export const Content = styled.div`
  margin-bottom: 3rem;
`;

export const Title = styled.h3`
  font-size: 2.25rem;
  font-weight: normal;
  letter-spacing: 4px;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Body = styled.div`
  max-width: 1420px;
  margin: 0 auto;
  .swiper-layout {
    position: relative;
  }
  .swiper-container-recently-view {
    max-width: 90%;
    margin: 0 auto;
  }
  .swiper-slide {
    text-align: center;
    font-size: 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    cursor: pointer;
  }

  .custom-button-prev,
  .custom-button-next {
    background-image: url(${HOST_URL}/images/arrow-left.svg);
    background-position: center;
    background-repeat: no-repeat;
    outline: 0;
  }

  .custom-button-next {
    -moz-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  .custom-button-prev::after,
  .custom-button-next::after {
    content: "" !important;
  }
  .product-name {
    margin-bottom: 0.5rem;
  }
  .price {
    color: #c69967;
  }
`;
