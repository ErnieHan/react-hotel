import styled from "styled-components";

export const Content = styled.div``;

export const Title = styled.p`
  margin-bottom: 1rem;
  font-size: 1.13rem;
  font-weight: bold;
`;

export const FlexBody = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const Icon = styled.div`
  width: 30px;
`;

export const Text = styled.div`
  width: calc(100% - 30px);
  padding-left: 1rem;
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

export const List = styled.li`
  padding-left: 1rem;
  position: relative;
  margin-bottom: 0.5rem;
  line-height: 1;
  &::before {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    background: #c69967;
    top: 50%;
    left: 0;
    border-radius: 50%;
    transform: translateY(-50%);
  }
`;
