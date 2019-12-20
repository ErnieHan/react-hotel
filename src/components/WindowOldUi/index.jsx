import React, { Component } from "react";
import styled from "styled-components";
import { HOST_URL } from "../../constants";

const Back = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const Modal = styled.div`
  width: 600px;
  background: rgb(187, 187, 187);
  padding: 3px;
  border-width: 2px;
  border-style: solid;
  border-color: #e9e8e7 #999 #999 #e9e8e7;
`;

const Head = styled.div`
  background: rgb(0, 10, 119);
  color: white;
  padding: 2px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Body = styled.div`
  padding: 35px 35px 15px 35px;
  text-align: center;
`;

const CloseButton = styled.button`
  padding: 0;
  width: 16px;
  height: 16px;
  background: rgb(187, 187, 187);
  border-width: 2px;
  border-style: solid;
  border-color: #e9e8e7 #999 #999 #e9e8e7;
  cursor: pointer;
  position: relative;
  &:before {
    content: "";
    width: 1px;
    height: 100%;
    background: black;
    position: absolute;
    top: 0;
    left: 50%;
    transform: rotate(45deg) translateX(-50%);
  }
  &:after {
    content: "";
    width: 1px;
    height: 100%;
    background: black;
    position: absolute;
    top: 0;
    left: 50%;
    transform: rotate(-45deg) translateX(-50%);
  }
  &:active {
    transform: translate(1px, 1px);
  }
`;

const CancelButton = styled.button`
  padding: 3px;
  margin-top: 1rem;
  min-width: 150px;
  background: rgb(187, 187, 187);
  border-width: 2px;
  border-style: solid;
  border-color: #e9e8e7 #333 #333 #e9e8e7;
  &:active {
    transform: translate(1px, 1px);
  }
  div {
    border: 1px dotted transparent;
    &:hover {
      border: 1px dotted black;
    }
  }
`;

class WindowOldUi extends Component {
  render() {
    return (
      <Back>
        <Modal>
          <Head>
            <div>Error</div>
            <CloseButton />
          </Head>
          <Body>
            <div>
              <img src={`${HOST_URL}/images/computer.png`} alt="" />
            </div>
            <div>此帳號已註冊</div>
            <CancelButton>
              <div>重新嘗試</div>
            </CancelButton>
          </Body>
        </Modal>
      </Back>
    );
  }
}

export default WindowOldUi;
