import styled from "styled-components";

export const Content = styled.div`
  display: none;
  margin: 0 -15px;
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
