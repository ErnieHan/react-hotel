import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  @media (max-width: 1023px) {
    display: block;
  }
`;

export const Image = styled.div`
  width: 250px;
  @media (max-width: 1023px) {
    width: 100%;
    text-align: center;
    img {
      max-width: 250px;
    }
  }
`;

export const Text = styled.div`
  width: calc(100% - 250px);
  padding-left: 1rem;
  p {
    margin-bottom: 1rem;
    line-height: 2;
  }
  li {
    padding-left: 1rem;
    position: relative;
    margin-bottom: 0.5rem;
    line-height: 1;
    &::before {
      content: "";
      position: absolute;
      width: 6px;
      height: 6px;
      background: #c69967;
      top: 50%;
      left: 0;
      border-radius: 50%;
      transform: translateY(-50%);
    }
  }
  @media (max-width: 1023px) {
    width: 100%;
    padding-left: 0;
  }
`;
