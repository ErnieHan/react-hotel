import styled from "styled-components";

export const Content = styled.header`
  padding: 60px 0 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.85rem;
`;

export const Left = styled.div`
  order: 1;
  width: 33.33%;
  i {
    font-size: 18px;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;
export const Center = styled.div`
  order: 2;
  width: 33.33%;
  text-align: center;
  cursor: pointer;
  img {
    max-width: 285px;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;
export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  order: 3;
  width: 33.33%;
  text-align: right;
  i {
    font-size: 20px;
  }
  span {
    margin: 0 5px;
    &:hover {
      opacity: 0.7;
    }
  }
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;
export const Buttom = styled.div`
  order: 4;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const Item = styled.div`
  margin: 0 10px;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 80%;
    position: absolute;
    background: #111;
    top: 10%;
    right: -10px;
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
`;

export const SubItem = styled.div`
  margin: 0 10px;
  cursor: pointer;
`;
