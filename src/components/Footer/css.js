import styled from "styled-components";

export const Content = styled.footer`
  background: #1a1a1a;
  color: #d1d1d1;
  padding: 35px;
  @media (max-width: 767px) {
    margin-top: 35px;
    padding: 35px 15px;
  }
`;

export const Body = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  img {
    max-width: 32px;
    margin-bottom: 1rem;
  }
`;

export const Row = styled.div`
  margin-bottom: 1.25rem;
`;

export const RowFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;

export const Item = styled.div`
  padding-right: 1rem;
  position: relative;
  cursor: pointer;
  font-size: 12px;
  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #d1d1d1;
    top: 48%;
    right: 0.5rem;
  }
  &:last-child {
    padding-right: 0;
    &::after {
      display: none;
    }
  }
`;
