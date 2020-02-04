import styled from "styled-components";

export const Content = styled.header`
  width: 100%;
  padding: 40px;
  padding-bottom: 0;
  background: #fff;
  z-index: 99;
  position: relative;
  @media (max-width: 1023px) {
    padding: 40px 15px 0 15px;
  }
  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    padding: 15px;
    border-bottom: 1px solid #f1f1f1;
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Left = styled.div`
  width: 33.33%;
  order: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 767px) {
  }
`;

export const Center = styled.div`
  width: 33.33%;
  text-align: center;
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 2rem;
  }
`;

export const Right = styled.div`
  width: 33.33%;
  text-align: right;
  order: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
    opacity: 0;
  }
`;

export const NavbarLayout = styled.div`
  width: 100%;
  height: 60px;
  order: 4;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavbarContent = styled.div`
  width: 100%;
  height: 60px;
  position: ${props => (props.sticky ? "fixed" : "")};
  top: ${props => (props.sticky ? "0" : "")};
  left: ${props => (props.sticky ? "0" : "")};
  z-index: 99;
  padding: ${props => (props.sticky ? "0 40px" : "")};
  background: #fff;
  border-bottom: ${props =>
    props.sticky ? "1px solid #f1f1f1" : "1px solid transparent"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 991px) {
    padding: ${props => (props.sticky ? "0 15px" : "")};
  }
`;

export const NavLeft = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  opacity: ${props => (props.sticky ? "1" : "0")};
  img {
    height: 1.5rem;
    transform: ${props =>
      props.sticky ? "translateY(0)" : "translateY(-50px)"};
    transition: ${props => (props.sticky ? "all 350ms ease" : "")};
  }
`;

export const NavCenter = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavRight = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: ${props => (props.sticky ? "1" : "0")};
`;

export const NavItem = styled.div`
  padding: 0 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: 13px;
  &:hover {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    height: 5px;
    background: tan;
    opacity: 0;
  }
`;

export const ListBody = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 50;
  overflow: hidden;
  max-height: ${props => (props.active ? "800px" : "0px")};
  transition: max-height 500ms ease;
  background: #fff;
  border-bottom: ${props => (props.active ? "1px solid #f1f1f1" : "")};
`;

export const ListContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
`;
