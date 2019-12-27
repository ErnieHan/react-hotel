import styled from "styled-components";
import arrowImage from "../../images/arrow-up-new.svg";
import { HOST_URL } from "../../constants";

export const Content = styled.div`
  display: flex;
  margin-bottom: 2.25rem;
  .gallery-thumbs {
    width: 90px;
    height: 400px;
    .swiper-slide {
      width: 100%;
      height: 0 !important;
      padding-bottom: 100%;
      border: 1px solid #d1d1d1;
      cursor: pointer;
      transition: border 350ms;
      position: relative;
    }
    .swiper-slide-thumb-active {
      border: 1px solid #c69967;
    }
  }
  .gallery-main {
    width: 80%;
    height: 472px;
    text-align: center;
    img {
      height: 100%;
    }
    video {
      width: 100%;
      max-width: 472px;
    }
  }
  @media (max-width: 1200px) {
    .gallery-thumbs {
      width: 75px;
      height: 340px;
    }
    .gallery-main {
      height: 412px;
    }
  }
  @media (max-width: 991px) {
    .gallery-thumbs {
      width: 60px;
      height: 280px;
    }
    .gallery-main {
      height: auto;
      min-height: 352px;
      img {
        height: auto;
      }
    }
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ArrowThumb = styled.div`
  position: relative;
  .vert-button-prev {
    top: 0;
    left: 0;
    bottom: auto;
    right: auto;
    width: 100%;
    margin-top: 0px;
    height: 36px;
    background-image: url(${arrowImage});
    background-repeat: no-repeat;
    background-size: 10px;
    background-position: center;
    position: relative;
    outline: 0;
  }
  .vert-button-next {
    top: auto;
    left: 0;
    bottom: 0;
    right: auto;
    width: 100%;
    margin-top: 0px;
    height: 36px;
    position: relative;
    background-image: url(${arrowImage});
    background-repeat: no-repeat;
    background-size: 10px;
    background-position: center;
    position: relative;
    outline: 0;
    transform: scaleY(-1);
  }
`;

export const PlayButton = styled.div`
  width: 30px;
  height: 30px;
  background: url(${HOST_URL}/images/play-btn-web.png) no-repeat center center;
  background-size: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
