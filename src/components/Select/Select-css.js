import styled from "styled-components";
import arrowImage from "../../images/sort-down.png";

export const Content = styled.div`
  width: 100%;
  display: inline-block;
  padding: 8px;
  border: 1px solid #d1d1d1;
  background: #fff;
  min-width: 250px;
  position: relative;
  cursor: pointer;
  background-image: url(${arrowImage});
  background-repeat: no-repeat;
  background-size: 10px;
  background-position: center right 10px;
  font-size: 1rem;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const OptionSection = styled.div`
  position: absolute;
  width: 100%;
  height: 250px;
  overflow-y: auto;
  background: #fff;
  top: 100%;
  left: 0;
  border: 1px solid #d1d1d1;
  display: ${props => (props.active ? "block" : "none")};
  z-index: 5;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cccccc;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
`;

export const Option = styled.div`
  padding: 8px;
  font-size: 1rem;
  &:hover {
    background: #f4ebe1;
  }
`;

export const OptionDisable = styled.div`
  padding: 8px;
  font-size: 1rem;
  color: #8e8e8e;
`;

export const MobileSelect = styled.select`
  display: inline-block;
  padding: 8px;
  border: 1px solid #d1d1d1;
  border-radius: 0;
  background: #fff;
  position: relative;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 10px;
  background-position: center right 10px;
  font-size: 1rem;
  appearance: none;
  background-image: url(${arrowImage});
  display: none;
  @media (max-width: 767px) {
    display: block;
    width: 100%;
    min-width: 100%;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin: 1rem 0;
  th {
    width: 33.33%;
    border-right: 1px solid #d1d1d1;
    padding: 0.5rem;
    &:last-child {
      border-right: 0;
    }
  }
  tr {
    border-bottom: 1px solid #d1d1d1;
    &:last-child {
      border-bottom: 0;
    }
  }
  td {
    border-right: 1px solid #d1d1d1;
    padding: 0.5rem;
    text-align: center;
    &:last-child {
      border-right: 0;
    }
  }
`;
