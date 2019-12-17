import styled from "styled-components";

export const Content = styled.div`
  padding: 0 15px;
  @media (max-width: 767px) {
    padding: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  font-size: 14px;
  th {
    border-bottom: 1px solid #d1d1d1;
    padding: 15px;
  }
  td {
    padding: 15px;
  }
  @media (max-width: 767px) {
    font-size: 13px;
    th,
    td {
      padding: 5px;
    }
  }
`;

export const Question = styled.div`
  padding: 15px;
  background: #1a1a1a;
  color: #fff;
  margin-bottom: 1rem;
`;

export const NextButton = styled.button`
  width: 100%;
  background: #64c025;
  color: white;
  padding: 12px;
  margin-bottom: 1rem;
`;

export const DisableButton = styled.button`
  width: 100%;
  background: #e8e8e8;
  color: #d1d1d1;
  padding: 12px;
  margin-bottom: 1rem;
`;

export const Answer = styled.div`
  margin-top: 1rem;
  width: 100%;
  input {
    width: 100%;
    appearance: none;
    border: 0;
    border-radius: 0;
    padding: 12px;
  }
`;
