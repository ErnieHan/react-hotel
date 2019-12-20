import styled from "styled-components";

export const Content = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
  span {
    padding: 0 5px;
  }
  img {
    max-width: 12px;
  }
`;
