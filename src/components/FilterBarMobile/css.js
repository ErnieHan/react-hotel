import styled from "styled-components";

export const Content = styled.div`
  margin: 0 -15px;
  border-top: 1px solid #c69967;
  color: #c69967;
  margin-bottom: 1rem;
  position: sticky;
  top: 60px;
  background: #fff;
  z-index: 5;
`;

export const Select = styled.div`
  display: inline-block;
  width: 50%;
  padding: 0.5rem;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #c69967;
  &:first-child {
    border-right: 1px solid #c69967;
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
  border-bottom: 1px solid #c69967;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: #1a1a1a;
  color: #fff;
  padding: 8px;
`;

export const Option = styled.div`
  margin-bottom: 1rem;
`;
