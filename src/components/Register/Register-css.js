import styled from "styled-components";

export const Content = styled.div`
  max-width: 480px;
  margin: 35px auto;
  padding: 20px;
  background: #f4f4f4;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const SubTitle = styled.div`
  font-size: 0.85rem;
  color: #ccc;
  margin-bottom: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  margin-bottom: 2rem;
  grid-template-columns: 1fr 2fr;
  grid-row-gap: 1rem;
  font-size: 0.85rem;
  font-weight: bold;
  div {
    padding: 0.5rem;
  }
  input {
    padding: 0.5rem;
    border: 0;
    border-bottom: 1px solid #111;
    font-size: 0.85rem;
    font-weight: bold;
    background: transparent;
    &::placeholder {
      color: #ccc;
      font-weight: 500;
    }
  }
  select {
    padding: 0.5rem;
    border: 1px solid #111;
    background: transparent;
    border-radius: 0;
  }
`;

export const ResignButton = styled.button`
  background: #4a5c68;
  color: white;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 0;
  &:hover {
    opacity: 0.8;
  }
`;

export const LoginButton = styled.button`
  background: #bc937c;
  color: white;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 0;
  &:hover {
    opacity: 0.8;
  }
`;
