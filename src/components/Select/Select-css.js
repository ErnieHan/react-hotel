import styled from "styled-components";
import arrowImage from "../../images/sort-down.png";

export const Content = styled.div`
  display: inline-block;
  padding: 12px;
  border: 1px solid #d1d1d1;
  background: #fff;
  min-width: 100px;
  position: relative;
  cursor: pointer;
  background-image: url(${arrowImage});
  background-repeat: no-repeat;
  background-size: 10px;
  background-position: center right 10px;
`;
