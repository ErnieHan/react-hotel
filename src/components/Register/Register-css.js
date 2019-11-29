import styled from "styled-components";

export const Content = styled.div`
  max-width: 680px;
  margin: 35px auto;
  padding: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const SubTitle = styled.div`
  font-size: 0.85rem;
  color: #999999;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const Grid = styled.div`
  display: grid;
  margin-bottom: 2rem;
  grid-template-columns: 1fr 2fr;
  grid-row-gap: 1rem;
  font-size: 0.85rem;
  font-weight: bold;
  /* div {
    padding: 0.5rem;
  } */
  input {
    width: 100%;
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
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #111;
    background: transparent;
    border-radius: 0;
    appearance: none;
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
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

export const SignupButton = styled.button`
  background: #111111;
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

export const WarningText = styled.div`
  text-align: center;
  font-size: 0.85rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const SuccessfullyText = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
  h3 {
    font-size: 1.5rem;
    color: #28a745;
    text-align: center;
  }
  p {
    font-size: 0.85rem;
    text-align: center;
  }
`;
