import styled from "styled-components";
import { HOST_URL } from "../../../constants";

export const Body = styled.div`
  width: 100%;
`;

export const BannerImage = styled.div`
  position: relative;
  height: 700px;
  background: url(${`${HOST_URL}/images/img-banner.jpg`}) no-repeat top center;
  background-size: cover;
  @media (max-width: 767px) {
    height: 185px;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
`;

export const CollecttionContent = styled.div`
  background: #f3f0e9;
  margin-top: -100px;
  @media (max-width: 767px) {
    margin-top: -45px;
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.1);
  @media (max-width: 1300px) {
    max-width: 95%;
  }
`;

export const Text = styled.div`
  text-align: center;
  padding: 35px;
  h4 {
    font-weight: normal;
    text-align: center;
    font-size: 15px;
  }
  img {
    width: 570px;
  }
  @media (max-width: 767px) {
    padding: 15px;
  }
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  .two {
    background: url(/images/img-designer-thumb.jpg) no-repeat center center;
    background-size: cover;
  }
  .three {
    background: url(/images/img-intro-prod-2.png) no-repeat center center;
    background-size: 50%;
  }
  .four {
    grid-column: 3/5;
    background: rgb(211, 199, 138);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: 400;
      text-align: center;
    }
  }
`;

export const GridProductOne = styled.div`
  grid-column: 1/3;
  grid-row: 1/3;
  div {
    padding-bottom: 100%;
    background: url(/images/img-intro-prod-1.png) no-repeat center center;
    background-color: #f9f9f9;
    background-size: contain;
  }
`;
