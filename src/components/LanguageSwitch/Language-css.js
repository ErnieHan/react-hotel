import styled from "styled-components";

export const Content = styled.div`
  position: relative;
`;

export const SelectContent = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 13px;
  border: 1px solid;
  p {
    margin-bottom: 0.5rem;
  }
`;
