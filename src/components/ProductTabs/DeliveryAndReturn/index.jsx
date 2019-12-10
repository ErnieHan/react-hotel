import React, { Component } from "react";
import {
  Content,
  Title,
  FlexBody,
  Icon,
  Text,
  Section
} from "./DeliveryAndReturn-css";
import storeImage from "../../../images/icon-instore.5fcffbbd.svg";
import carImage from "../../../images/icon-local-delivery.541c81ff.svg";
import flatImage from "../../../images/icon-global-delivery.6306a5c7.svg";
import returnImage from "../../../images/icon-7days-return.1d791f24.svg";
import Select from "../../Select";
import { Translation } from "react-i18next";

class DeliveryAndReturn extends Component {
  render() {
    return (
      <Content>
        <Section>
          <Title>
            <Translation>{t => <>{t("tabs.2-1")}</>}</Translation>
          </Title>
          <FlexBody>
            <Icon>
              <img src={storeImage} alt="" />
            </Icon>
            <Text>
              <b>
                <Translation>{t => <>{t("tabs.2-2")}</>}</Translation>
              </b>
              <br />
              <Translation>{t => <>{t("tabs.2-3")}</>}</Translation>
            </Text>
          </FlexBody>

          <FlexBody>
            <Icon>
              <img src={carImage} alt="" />
            </Icon>
            <Text>
              <b>
                <Translation>{t => <>{t("tabs.2-4")}</>}</Translation>
              </b>
              <br />
              <Translation>{t => <>{t("tabs.2-5")}</>}</Translation>
            </Text>
          </FlexBody>
          <FlexBody>
            <Icon>
              <img src={flatImage} alt="" />
            </Icon>
            <Text>
              <b>
                <Translation>{t => <>{t("tabs.2-12")}</>}</Translation>
              </b>
              <br />
              <Translation>{t => <>{t("tabs.2-13")}</>}</Translation>
              <div>{/* <Select /> */}</div>
            </Text>
          </FlexBody>
        </Section>
        <Section>
          <Title>
            <Translation>{t => <>{t("tabs.2-6")}</>}</Translation>
          </Title>
          <div style={{ marginBottom: "1rem" }}>
            <Translation>{t => <>{t("tabs.2-7")}</>}</Translation>
            <div>
              <img
                src="//cdn.chowsangsang.com/eshop/tw/newweb/packing.jpg"
                alt=""
              />
            </div>
          </div>
        </Section>
        <Section>
          <Title>
            <Translation>{t => <>{t("tabs.2-8")}</>}</Translation>
          </Title>
          <FlexBody>
            <Icon>
              <img src={returnImage} alt="" />
            </Icon>
            <Text>
              <b>
                <Translation>{t => <>{t("tabs.2-9")}</>}</Translation>
              </b>
              <br />
              <Translation>{t => <>{t("tabs.2-10")}</>}</Translation>
              <a href="/">
                <Translation>{t => <>{t("tabs.2-11")}</>}</Translation>
              </a>
            </Text>
          </FlexBody>
        </Section>
      </Content>
    );
  }
}

export default DeliveryAndReturn;
