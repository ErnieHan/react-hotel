import React, { Component } from "react";
import {
  Content,
  OptionSection,
  Option,
  OptionDisable,
  MobileSelect,
  Table
} from "./Select-css";
import { Translation } from "react-i18next";
import { withTranslation } from "react-i18next";

class Select extends Component {
  state = {
    active: false,
    activeName: "default",
    activeValue: "default"
  };

  showOptions = event => {
    const { id } = event.target;
    if (id === "select-country") {
      this.setState({
        active: true
      });
      window.addEventListener("click", this.clicking);
    }
  };

  selectOption = data => {
    this.setState({
      activeValue: data.value,
      activeName: data.name,
      active: false
    });
  };

  handleChange = (e, countries) => {
    const { value } = e.target;
    const active = countries.find(data => data.value === value);
    this.setState({
      activeValue: value,
      activeName: active.name
    });
  };

  clicking = e => {
    if (e.target.id !== "select-country") {
      this.setState({
        active: false
      });
      window.removeEventListener("click", this.clicking);
    }
  };

  render() {
    const { t } = this.props;
    const { activeName, active } = this.state;
    const countries = [
      {
        name: t("countries.tw"),
        value: "TW"
      },
      {
        name: t("countries.jp"),
        value: "JP"
      },
      {
        name: t("countries.hk"),
        value: "HK"
      },
      {
        name: t("countries.kr"),
        value: "KR"
      },
      {
        name: t("countries.cn"),
        value: "CN"
      },
      {
        name: t("countries.rs"),
        value: "RS"
      },
      {
        name: t("countries.ph"),
        value: "PH"
      },
      {
        name: t("countries.us"),
        value: "US"
      },
      {
        name: t("countries.ca"),
        value: "CA"
      },
      {
        name: t("countries.en"),
        value: "EN"
      }
    ];
    const found = countries.find(data => data.value === this.state.activeValue);
    return (
      <>
        <Content id="select-country" onClick={this.showOptions}>
          {found ? found.name : t("countries.select")}
          <OptionSection active={active}>
            <OptionDisable>
              <Translation>{t => <>{t("countries.select")}</>}</Translation>
            </OptionDisable>
            {countries.map((data, index) => (
              <Option key={index} onClick={this.selectOption.bind(this, data)}>
                {data.name}
              </Option>
            ))}
          </OptionSection>
        </Content>
        <div>
          <MobileSelect
            value={this.state.activeValue}
            onChange={e => this.handleChange(e, countries)}
          >
            <Translation>
              {t => (
                <option value="default" disabled>
                  {t("countries.select")}
                </option>
              )}
            </Translation>
            {countries.map((data, index) => (
              <option value={data.value} key={index}>
                {data.name}
              </option>
            ))}
          </MobileSelect>
        </div>
        <div>
          <Table>
            <tbody>
              <tr>
                <th>{t("countries.mode")}</th>
                <th>{t("countries.cost")}</th>
                <th>{t("countries.shippingTime")}</th>
              </tr>
              <tr>
                <td>{t("countries.priority")}</td>
                <td>-</td>
                <td>{t("countries.businessdays")}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default withTranslation()(Select);
