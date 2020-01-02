import React, { Component } from "react";
import { Content, Left, Right, Flex, WhatStarDollar } from "./css";
import { HOST_URL } from "../../constants";

export class StarDollar extends Component {
  render() {
    return (
      <>
        <Content>
          <Flex>
            <Left>
              <img src={`${HOST_URL}/images/stardollar01.png`} alt="" />
              <p>每NT$4,000可賺取「悦享錢」: 1%</p>
              <p>
                <span>(不包括金屬磁石扣繩)</span>
              </p>
            </Left>
            <Right>
              <img src={`${HOST_URL}/images/stardollar02.png`} alt="" />
              <p>最高可使用「悦享錢」: 527</p>
              <p>現省可折抵NT$2,108</p>
            </Right>
          </Flex>
          <WhatStarDollar>
            <span onClick={this.openModal}>甚麼是「悅享錢」？</span>
          </WhatStarDollar>
        </Content>
      </>
    );
  }
}

export default StarDollar;
