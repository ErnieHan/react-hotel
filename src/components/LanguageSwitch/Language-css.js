import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  display: inline-block;
`;

export const SelectContent = styled.div`
  padding-top: 15px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 13px;
  opacity: ${props => (props.active ? "1" : "0")};
  pointer-events: ${props => (props.active ? "" : "none")};
  z-index: 100;
  p {
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
`;
