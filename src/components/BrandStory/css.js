import styled from "styled-components";

export const Content = styled.div`
  margin-top: 35px;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Title = styled.div`
  text-align: center;
  cursor: pointer;
  margin-bottom: 1rem;
  h3 {
    font-size: 2.25rem;
    font-weight: normal;
    margin-bottom: 1rem;
  }
  img {
    max-width: 25px;
  }
`;
