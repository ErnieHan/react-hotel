import styled from "styled-components";
import { HOST_URL } from "../../constants";

export const Content = styled.div`
  display: none;
  margin: 0 -15px;
  position: relative;
  @media (max-width: 767px) {
    display: block;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-mobile-pagination {
    text-align: center;
    margin-top: 1rem;
  }
  .swiper-pagination-bullet {
    outline: 0;
    margin: 0 8px !important;
  }
  .swiper-pagination-bullet-active {
    background: tan;
  }
`;

export const VideoContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  background: #fff;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.active ? "1" : "0")};
  pointer-events: ${props => (props.active ? "" : "none")};
  transition: all 350ms ease;
  video {
    width: 100%;
    height: 100%;
  }
`;

export const CloseVideoButton = styled.div`
  width: 20px;
  height: 20px;
  background: url(${HOST_URL}/images/close.png) no-repeat center center;
  background-size: 100%;
  position: absolute;
  top: 25px;
  right: 8px;
  z-index: 10;
`;
