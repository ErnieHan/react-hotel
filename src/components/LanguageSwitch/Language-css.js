import styled from "styled-components";

export const Content = styled.div`
  position: relative;
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
  p {
    margin-bottom: 0.5rem;
  }
`;
