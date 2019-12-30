import styled from "styled-components";
import { HOST_URL } from "../../constants";

export const Content = styled.div`
  margin: 0 -15px;
  border-top: 1px solid #d1d1d1;
  color: #8e8e8e;
  margin-bottom: 1rem;
  position: sticky;
  top: 60px;
  background: #fff;
  z-index: 5;
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

export const Select = styled.div`
  display: inline-block;
  width: 50%;
  padding: 8px;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #d1d1d1;
  &:first-child {
    border-right: 1px solid #d1d1d1;
  }
`;

export const Modal = styled.div`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  color: initial;
  max-height: ${props => (props.active ? "500px" : "0px")};
  overflow: hidden;
  transition: all 500ms ease;
`;

export const ModalContent = styled.div`
  padding: 15px;
  border-bottom: 1px solid #d1d1d1;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: #1a1a1a;
  color: #fff;
  padding: 1rem;
`;

export const Option = styled.div`
  margin-bottom: 1rem;
  font-size: 15px;
  cursor: pointer;
`;

export const HadSelection = styled.div`
  border-top: 1px solid #d1d1d1;
  padding: 1rem 0;
`;

export const CancelAllButton = styled.button`
  padding: 1rem;
  background: #f1f1f1;
  margin-bottom: 1rem;
`;

export const SelectedOption = styled.div`
  display: inline-block;
  margin-right: 1rem;
  padding-left: 1.25rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 10px;
    height: 10px;
    background: url(${HOST_URL}/images/close.png) no-repeat center center;
    background-size: contain;
    transform: translateY(-50%);
  }
`;
