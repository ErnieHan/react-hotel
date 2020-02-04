import styled from "styled-components";

export const Content = styled.div`
  margin-bottom: 1rem;
`;

export const SubTitle = styled.div`
  margin-bottom: 0.25rem;
`;

export const FlexContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const OpitionButton = styled.div`
  padding: 12px;
  min-width: 72px;
  text-align: center;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background: ${props => (props.active ? "#c69967" : "")};
  color: ${props => (props.active ? "#fff" : "")};
  border: ${props =>
    props.active ? "1px solid #c69967" : "1px solid #d1d1d1"};
  cursor: pointer;
  &:hover {
    border: 1px solid #c69967;
  }
  @media (max-width: 767px) {
    &:hover {
      border: ${props =>
        props.active ? "1px solid #c69967" : "1px solid #d1d1d1"};
    }
  }
`;

export const OpitionDisableButton = styled.div`
  padding: 0.5rem 1rem;
  min-width: 72px;
  text-align: center;
  border: 1px solid #d1d1d1;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  position: relative;
  color: #d1d1d1;
  background: #e8e8e8;
`;
