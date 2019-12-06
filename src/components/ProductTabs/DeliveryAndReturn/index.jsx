import React, { Component } from "react";
import { Content, Title, FlexBody, Icon, Text } from "./DeliveryAndReturn-css";
import storeImage from "../../../images/icon-instore.5fcffbbd.svg";
import carImage from "../../../images/icon-local-delivery.541c81ff.svg";
import flatImage from "../../../images/icon-global-delivery.6306a5c7.svg";
import returnImage from "../../../images/icon-7days-return.1d791f24.svg";
import Select from "../../Select";

class DeliveryAndReturn extends Component {
  render() {
    return (
      <Content>
        <Title>貨品配送</Title>
        <FlexBody>
          <Icon>
            <img src={storeImage} alt="" />
          </Icon>
          <Text>
            <b>親臨分店取貨</b>
            <br />
            網上訂購商品，親臨分店取貨。此服務僅適用於香港分店。
          </Text>
        </FlexBody>
        <FlexBody>
          <Icon>
            <img src={carImage} alt="" />
          </Icon>
          <Text>
            <b>香港本地送貨</b>
            <br />
            免費送貨服務至本港地址。
          </Text>
        </FlexBody>
        <FlexBody>
          <Icon>
            <img src={flatImage} alt="" />
          </Icon>
          <Text>
            <b>國際送遞</b>
            <br />
            我們貨品運至逾40多個地區，服務收費因應目的地而有所不同。
            <div>
              <Select />
            </div>
          </Text>
        </FlexBody>
        <Title>您的訂單包括</Title>
        <div>
          鑒定證書（如適用） 銷售發票（辦理售後服務時適用） 精美禮盒包裝
          (包裝圖片只供參考)
        </div>
        <Title>退貨及換貨</Title>
        <FlexBody>
          <Icon>
            <img src={returnImage} alt="" />
          </Icon>
          <Text>
            <b>退貨及換貨政策</b>
            <br />
            7天無理由退換貨。<a>了解更多</a>
          </Text>
        </FlexBody>
      </Content>
    );
  }
}

export default DeliveryAndReturn;
