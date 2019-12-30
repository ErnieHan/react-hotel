import styled from "styled-components";

export const Cotent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  width: 25%;
  padding-right: 1.5rem;
  margin-bottom: 2rem;
  &:nth-child(4n + 0) {
  }
  @media (max-width: 767px) {
    width: 50%;
    padding-right: 0;
  }
`;

export const Image = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background: ${props => `#fff url(${props.image}) no-repeat center center`};
  background-size: contain;
  position: relative;
  cursor: pointer;
`;

export const Label = styled.div`
  position: absolute;
  padding: 2px 6px;
  color: #8e8e8e;
  border: 1px solid #e9e8e7;
  background: #fff;
`;

export const Sub = styled.div`
  text-align: center;
  h3 {
    font-size: 15px;
  }
  p.product-title {
    font-size: 15px;
    margin-bottom: 0.75rem;
  }
  p.product-price {
    color: #c69967;
    font-size: 15px;
  }
  @media (max-width: 767px) {
    p.product-title {
      margin-bottom: 3px;
    }
    p.product-title,
    p.product-price {
      font-size: 1rem;
    }
  }
`;
