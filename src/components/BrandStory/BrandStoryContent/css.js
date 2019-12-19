import styled from "styled-components";
import image from "../../../images/img-banner.jpg";

export const Body = styled.div`
  width: 100%;
`;

export const BannerImage = styled.div`
  position: relative;
  height: 700px;
  background: url(${image}) no-repeat top center;
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
  max-width: 80%;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.1);
  @media (max-width: 767px) {
    max-width: 95%;
  }
`;

export const Text = styled.div`
  text-align: center;
  padding: 35px;
  h3 {
    font-weight: normal;
    text-align: center;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
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
    h3 {
      font-size: 1.25rem;
    }
  }
`;

export const FlexContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  width: 33.33%;
  padding-bottom: 33.33%;
  background: #e9e8e7;
`;
