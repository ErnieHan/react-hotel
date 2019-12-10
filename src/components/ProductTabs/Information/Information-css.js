import styled from "styled-components";

export const Content = styled.div`
  display: flex;
`;

export const Image = styled.div`
  width: 250px;
`;

export const Text = styled.div`
  width: calc(100% - 250px);
  padding-left: 1rem;
  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  li {
    padding-left: 1rem;
    position: relative;
    margin-bottom: 0.5rem;
    &::before {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      background: #c69967;
      top: 50%;
      left: 0;
      border-radius: 50%;
      transform: translateY(-50%);
    }
  }
`;
