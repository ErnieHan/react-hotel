import styled from "styled-components";

export const Content = styled.div`
  position: relative;
`;

export const BagOutline = styled.div`
  width: 45px;
  padding-top: 15px;
  position: absolute;
  right: -15px;
`;

export const Bag = styled.div`
  width: 350px;
  position: absolute;
  /* top: 0px; */
  right: -15px;
  background: white;
  padding: 1rem;
  z-index: 1;
  color: black;
  text-align: left;
  line-height: 1.2;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  opacity: ${props => (props.active ? "1" : "0")};
  pointer-events: ${props => (props.active ? "" : "none")};
  transition: all 300ms;
  cursor: default;
  @media screen and (max-width: 991px) {
    width: calc(100vw - 30px);
    right: -43px;
  }
`;

export const UpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
`;

export const DownButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
`;

export const TotalPrice = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

export const CheckoutButton = styled.button`
  background: #111;
  color: white;
  border: 0;
  padding: 1rem;
  width: 100%;
`;

export const Title = styled.div`
  position: relative;
  margin-bottom: 1rem;
  h4 {
    font-weight: 500;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 10px;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;
