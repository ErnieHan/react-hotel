import styled from "styled-components";

export const Content = styled.div`
  padding: 15px;
  display: flex;
  margin-top: 15px;
  @media (max-width: 767px) {
    margin-top: 0;
    padding: 15px 0;
    display: none;
  }
`;

export const List = styled.div`
  font-size: 12px;
  color: #8e8e8e;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: tan;
    &:after {
      color: #8e8e8e;
    }
  }
  &::after {
    content: ">";
    margin: 0 5px;
  }
  &:last-child {
    &::after {
      content: "";
      margin: 0;
    }
  }
`;
