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

export const CollectionCotent = styled.div`
  width: 550px;
  background: #fff;
  z-index: 2;
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  padding: 35px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
  }
`;

export const ImageContent = styled.div`
  border-bottom: 1px solid #d1d1d1;
  margin-bottom: 1rem;
`;

export const TextContent = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
`;
