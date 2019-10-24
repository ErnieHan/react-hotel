import styled from "styled-components";

export const Content = styled.div`
  position: relative;
`;

export const Info = styled.div`
  width: 240px;
  position: absolute;
  right: -15px;
  background: white;
  padding: 15px;
  z-index: 1;
  color: black;
  text-align: left;
  line-height: 1.2;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: default;
  opacity: ${props => (props.active ? "1" : "0")};
  pointer-events: ${props => (props.active ? "" : "none")};
  transition: all 300ms;
`;

export const Title = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #111;
  font-weight: bold;
`;

export const Item = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e9e8e7;
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  background: #111;
  color: white;
  padding: 0.5rem;
  width: 100%;
  border: 0;
`;
