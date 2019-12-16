import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
from{
    opacity: 0;
}
to{
    opacity: 1;
}
`;

const activeAnimate = css`
  animation: ${fadeIn} 1s forwards;
`;

export const TabsLayout = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const TabsContent = styled.div`
  display: flex;
  border-bottom: 1px solid #d1d1d1;
  padding-bottom: 0.75rem;
`;

export const TabTitle = styled.div`
  padding: 0.5rem 1rem;
  position: relative;
  color: ${props => (props.active ? "" : "#8e8e8e")};
  cursor: pointer;
  transition: all 350ms ease;
  &::before {
    content: "";
    position: absolute;
    width: 1px;
    height: 1rem;
    background: ${props => (props.active ? "#1a1a1a" : "#d1d1d1")};
    bottom: -0.75rem;
    left: 50%;
    transition: all 350ms ease;
  }
`;

export const TabBody = styled.div`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  ${props => (props.active ? activeAnimate : "")};
  display: ${props => (props.active ? "block" : "none")};
`;
