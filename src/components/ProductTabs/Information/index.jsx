import React, { Component } from "react";
import { Content, Image, Text } from "./Information-css";

export class Information extends Component {
  render() {
    return (
      <Content>
        <Image>
          <img
            src="//cdn.chowsangsang.com/dfs/ivCssModelImages/85194/e82b0cb88bc6b2cbfad81c14a8ac864d.jpg"
            alt=""
          />
        </Image>
        <Text>
          <p>
            經典心形設計融入獨特鏤空花紋，以群鑲工藝打造立體心形圍邊，襯托中間大顆美鑽的雍容華貴。
            18K/750紅色黃金鑽石耳環
          </p>
          <p>款號# 85194E-18KR-DD</p>
          <ul>
            <li>鑽石, 總克拉重 0.482 克拉</li>
            <li>南洋養殖珍珠, 總克拉重 0.133 克拉</li>
          </ul>
        </Text>
      </Content>
    );
  }
}

export default Information;
