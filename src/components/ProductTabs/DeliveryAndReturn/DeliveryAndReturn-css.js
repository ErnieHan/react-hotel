import styled from "styled-components";

export const Content = styled.div``;

export const Title = styled.p`
  margin-bottom: 1rem;
  font-size: 1.13rem;
  font-weight: bold;
`;

export const FlexBody = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Icon = styled.div`
  width: 30px;
`;

export const Text = styled.div`
  padding-left: 1rem;
  font-size: 14px;
  a {
    margin: 0 5px;
    color: tan;
    border-bottom: 1px solid tan;
  }
`;

export const Section = styled.section`
  margin-bottom: 2rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
