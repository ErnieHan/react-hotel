import styled from "styled-components";
import closeImage from "../../images/close.png";
import arrowImage from "../../images/arrow-left.svg";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.active ? "1" : "0")};
  visibility: ${props => (props.active ? "visible" : "hidden")};
  transition: all 350ms ease-out;
  @media (max-width: 767px) {
    transform: ${props =>
      props.active ? "translateX(0)" : "translateX(100%)"};
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
  width: 980px;
  background: #fff;
  padding: 30px;
  transform: ${props =>
    props.active ? "translateY(0px)" : "translateY(-50px)"};
  transition: transform 350ms ease-out;
  margin-right: ${props => (props.active ? "17px" : "0px")};
  @media (max-width: 1240px) {
    width: 780px;
  }
  @media (max-width: 991px) {
    width: 680px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    padding: 0px;
    transform: none;
    margin-right: 0;
  }
`;

export const ModalHead = styled.div`
  border-bottom: 1px solid #e9e8e7;
  font-size: 2rem;
  text-align: center;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
  @media (max-width: 767px) {
    font-size: 1.25rem;
    font-weight: bold;
    height: 60px;
    line-height: 60px;
    margin-bottom: 0;
  }
`;

export const ModalBody = styled.div`
  @media (max-width: 767px) {
    padding: 15px;
    height: calc(100% - 60px);
    overflow-y: auto;
    h1 {
      font-size: 60px !important;
    }
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0px;
  right: 0px;
  background-image: url(${closeImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.2;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  @media (max-width: 767px) {
    left: 15px;
    right: auto;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(${arrowImage});
    opacity: 1;
    &:hover {
      opacity: 1;
    }
  }
`;
