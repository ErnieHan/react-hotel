import styled from "styled-components";
import image from "../../images/sort-down.png";

export const Content = styled.div`
  position: relative;
`;

export const Main = styled.div`
  border: 1px solid #111;
  padding: 0.5rem;
  background: url(${image}) no-repeat 98% center;
  background-size: 10px;
`;

export const OptionContent = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fffdff;
  max-height: 200px;
  overflow: hidden;
  overflow-y: scroll;
  transition: ${props => (props.show ? "bottom 500ms ease" : "bottom 1s ease")};
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 200px;
    position: absolute;
    max-height: inherit;
    bottom: ${props => (props.show ? "0" : "-100%")};
    padding: 1rem;
  }
`;

export const OptionBackground = styled.div`
  position: absolute;
  width: 100%;
  opacity: ${props => (props.show ? "1" : "0")};
  pointer-events: ${props => (props.show ? "" : "none")};
  z-index: 2;
  @media screen and (max-width: 767px) {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    transition: opacity 500ms ease;
  }
`;

export const Option = styled.div`
  width: 100%;
  padding: 0.5rem;
  &:hover {
    background: #f8f9fa;
  }
  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
    font-weight: ${props => (props.active ? "bold" : "normal")};
    text-align: center;
    border-top: ${props => (props.active ? "1px solid #ccc" : "")};
    border-bottom: ${props => (props.active ? "1px solid #ccc" : "")};
    color: ${props => (props.active ? "inherit" : "#D9D8D9")};
    transition: all 300ms;
  }
`;
