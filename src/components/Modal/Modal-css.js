import styled from "styled-components";
import closeImage from "../../images/close.png";
import arrowImage from "../../images/arrow-left.svg";
import { HOST_URL } from "../../constants";

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
    transform: ${props => (props.active ? "translateX(0)" : "translateX(100%)")};
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
  width: 980px;
  background: #fff;
  padding: 30px;
  transform: ${props => (props.active ? "translateY(0px)" : "translateY(-50px)")};
  transition: transform 350ms ease-out;
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
    position: relative;
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
    height: 60px;
    line-height: 60px;
    margin-bottom: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 10;
    border-bottom: 1px solid #f1f1f1;
  }
`;

export const ModalBody = styled.div`
  @media (max-width: 767px) {
    padding: 75px 15px 15px 15px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    overflow-y: auto;
    h1 {
      font-size: 72px;
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
    background-image: url(${HOST_URL}/images/arrow-left.svg);
    opacity: 1;
    &:hover {
      opacity: 1;
    }
  }
`;
