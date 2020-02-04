import React, { Component } from "react";
import { Content, Body, RowFlex, Row, Item } from "./css";
import { HOST_URL } from "../../constants";
import { Translation } from "react-i18next";
import { connect } from "react-redux";
import i18next from "i18next";

class Footer extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.language !== this.props.language) {
      i18next.changeLanguage(this.props.lang);
    }
  }
  render() {
    return (
      <Content>
        <Body>
          <img
            data-src={`${HOST_URL}/images/footer-icon.svg`}
            className="lazyload"
            alt=""
          />
          <Row>
            <RowFlex>
              <Item>
                <Translation>{t => <>{t("footer.1")}</>}</Translation>
              </Item>
              <Item>
                <Translation>{t => <>{t("footer.2")}</>}</Translation>
              </Item>
            </RowFlex>
            <RowFlex>
              <Item>
                <Translation>{t => <>{t("footer.4")}</>}</Translation>
              </Item>
              <Item>+852 2192 3228</Item>
            </RowFlex>
          </Row>
          <Row>
            <RowFlex>
              <Item>
                <Translation>{t => <>{t("footer.5")}</>}</Translation>
              </Item>
              <Item>
                <Translation>{t => <>{t("footer.6")}</>}</Translation>
              </Item>
              <Item>
                <Translation>{t => <>{t("footer.7")}</>}</Translation>
              </Item>
              <Item>
                <Translation>{t => <>{t("footer.8")}</>}</Translation>
              </Item>
            </RowFlex>
            <RowFlex>
              <Item>
                <Translation>{t => <>{t("footer.9")}</>}</Translation>
              </Item>
            </RowFlex>
            <RowFlex>
              <Item>粤ICP备12061196号-2</Item>
            </RowFlex>
          </Row>
        </Body>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  language: state.app.language.language
});

export default connect(mapStateToProps, null)(Footer);
