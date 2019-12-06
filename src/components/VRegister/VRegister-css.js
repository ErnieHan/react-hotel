import styled from "styled-components";

export const Content = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  @media (max-width: 767px) {
    display: block;
  }
`;

export const Left = styled.section`
  width: 50%;
  padding: 35px;
  border-right: 1px solid #e9e8e7;
  @media (max-width: 767px) {
    width: 100%;
    border-right: 0;
    padding: 0;
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid #f1f1f1;
  }
`;

export const Right = styled.section`
  width: 50%;
  padding: 35px;
  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
    margin-bottom: 24px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 15px;
  text-align: center;
`;

export const Text = styled.p`
  margin-bottom: 1rem;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  @media (max-width: 767px) {
    white-space: normal;
  }
`;

export const Center = styled.div`
  height: 225px;
  p {
    font-size: 12px;
    margin-bottom: 8px;
  }
  input {
    margin-bottom: 24px;
    border: 1px solid #1a1a1a;
    border-radius: 0;
    width: 100%;
    padding: 12px;
  }
  @media (max-width: 767px) {
    height: auto;
    input {
      padding: 8px;
    }
  }
`;

export const ForgetDiv = styled.div`
  margin-top: 8px;
  div {
    font-size: 12px;
    span {
      color: #c69967;
      cursor: pointer;
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
  }
`;

export const LoginButton = styled.button`
  min-width: 150px;
  background: #1a1a1a;
  color: #fff;
  padding: 12px;
  margin-top: 16px;
  font-size: 12px;
`;

export const ButtonDiv = styled.div`
  text-align: center;
`;

export const RightCenter = styled.div`
  height: 225px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  @media (max-width: 767px) {
    height: auto;
  }
`;

export const RegisterButton = styled.button`
  min-width: 150px;
  background: #c69967;
  color: #fff;
  padding: 12px;
  margin-top: 16px;
  font-size: 12px;
`;
