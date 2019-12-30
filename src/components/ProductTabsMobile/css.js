import styled from "styled-components";
import addImage from "../../images/add.png";
import minusImage from "../../images/minus.png";

export const Content = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
    margin-top: 1rem;
  }
`;

export const Tab = styled.div`
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: #fff;
  position: relative;
  cursor: pointer;
  color: ${props => (props.active ? "#1a1a1a" : "#8e8e8e")};
  border-bottom: 1px solid #d1d1d1;
  font-size: 13px;
  &::after {
    content: "";
    width: 1px;
    height: 20%;
    position: absolute;
    background: ${props => (props.active ? "#1a1a1a" : "#d1d1d1")};
    bottom: 0;
    left: 50%;
  }
`;

export const Plus = styled.div`
  position: absolute;
  width: 30px;
  height: 100%;
  background-image: ${props => (props.active ? `url(${minusImage})` : `url(${addImage})`)};
  background-size: 10px auto;
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
  right: 0;
  opacity: ${props => (props.active ? "1" : "0.6")};
`;

export const TabLayout = styled.div`
  max-height: ${props => (props.active ? "1000px" : "0px")};
  overflow: hidden;
  transition: all 800ms ease;
`;

export const TabContent = styled.div`
  padding-top: 1rem;
`;
