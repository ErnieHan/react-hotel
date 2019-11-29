import styled from "styled-components";

export const Button = styled.button`
  background: #111;
  color: white;
  padding: 12px;
  border: 0;
  border-radius: 0;
  position: relative;
  &:hover {
    div {
      opacity: 1;
    }
  }
`;

export const Tip = styled.div`
  min-width: 100px;
  opacity: 0;
  position: absolute;
  top: -50px;
  left: 50%;
  background: #111;
  transition: all 300ms;
  /* transform: translateX(-50%); */
  padding: 6px;
  pointer-events: none;
  white-space: nowrap;
  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -15px;
    left: 50%;
    border-width: 8px;
    border-color: #111 transparent transparent transparent;
    border-style: solid;
    transform: translateX(-50%);
  }
`;
