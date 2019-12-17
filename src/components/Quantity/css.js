import styled from "styled-components";
import plusImage from "../../images/add.png";
import minusImage from "../../images/minus.png";

export const Content = styled.div`
  margin-bottom: 1rem;
`;

export const Sub = styled.div`
  margin-bottom: 0.25rem;
`;

export const QuantityFlex = styled.div`
  display: flex;
`;

export const Number = styled.div`
  border: 1px solid #d1d1d1;
  display: inline-block;
  padding: 12px;
  min-width: 72px;
  text-align: center;
`;

export const Plus = styled.div`
  min-width: 38px;
  background: url(${plusImage}) no-repeat center center;
  background-size: 15px;
  opacity: 0.6;
  cursor: pointer;
  &:active,
  &:focus {
    outline: 0;
  }
`;

export const Minus = styled.div`
  min-width: 38px;
  background: url(${minusImage}) no-repeat center center;
  background-size: 15px 15px;
  opacity: 0.6;
  cursor: pointer;
  &:active,
  &:focus {
    outline: 0;
  }
`;
