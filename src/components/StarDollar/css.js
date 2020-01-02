import styled from "styled-components";

export const Content = styled.div`
  background: #f1f1f1;
  margin-bottom: 1rem;
  padding: 0.5rem;
  @media (max-width: 767px) {
    margin: 0 -15px 1rem -15px;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Left = styled.div`
  width: 50%;
  text-align: center;
  border-right: 1px solid #d1d1d1;
  margin-top: 1rem;
  margin-bottom: 1rem;
  p {
    font-size: 13px;
    letter-spacing: 1px;
    span {
      font-size: 12px;
    }
  }
  @media (max-width: 767px) {
    padding: 0 6px;
  }
`;

export const Right = styled.div`
  width: 50%;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  p {
    font-size: 13px;
    letter-spacing: 1px;
  }
  @media (max-width: 767px) {
    padding: 0 6px;
  }
`;

export const WhatStarDollar = styled.p`
  text-align: center;
  margin-bottom: 0.5rem;
  span {
    color: #c69967;
    border-bottom: 1px solid #c69967;
    cursor: pointer;
  }
`;
