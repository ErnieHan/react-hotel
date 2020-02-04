import React, { Component } from "react";
import { Content, Image, Wrap, StartButton, TextInput } from "./css";

class LockProduct extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        請留意，實體分店的貨品規格、售價及優惠方案可能與網路商城販售價格有所不同。
        <Content>
          <Image>
            <img
              src="https://cdn.chowsangsang.com/dfs/ivCssModelImages/90792/bc877aad82665ceeff76581ae2f9ec6b.jpg"
              alt=""
            />
          </Image>
          <Wrap>
            <h3>Marco Bicego</h3>
            <h4>Boltenstern 18K 黃金綠石髓手鍊</h4>
            <p>款號 # 91522C-GD</p>
            <div>
              <h1>預留之貨品</h1>
              <div>
                <TextInput type="text" value="款號：#91522C-GD" />
              </div>
              <div>
                <TextInput
                  type="text"
                  placeholder="備註說明： 重量、尺碼、寶石、圈度等等"
                />
              </div>
            </div>

            <StartButton onClick={this.starting}>提交</StartButton>
          </Wrap>
        </Content>
      </div>
    );
  }
}

export default LockProduct;
