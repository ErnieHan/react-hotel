import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

export const Number = styled.span`
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
`;
