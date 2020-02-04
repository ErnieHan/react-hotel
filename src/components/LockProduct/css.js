import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Image = styled.div`
  width: 40%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Wrap = styled.div`
  width: 60%;
  @media (max-width: 767px) {
    width: 100%;
  }
  h1 {
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;

export const StartButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #1a1a1a;
  color: #fff;
`;

export const TextInput = styled.input`
  padding: 1rem;
  width: 100%;
  border: 1px solid #e9e8e7;
  margin-bottom: 1rem;
`;
