import React, { Component } from "react";
import { Content, SelectContent } from "./Language-css";
import { connect } from "react-redux";
import { changeLanguage, showLoading } from "../../store/actions";
import writeCookie from "../../function/writeCookie";
import i18n from "i18next";

class LanguageSwitch extends Component {
  state = {
    active: false
  };

  changeLanguage = () => {
    // 判斷目前的語系
    const { language, changeLanguage } = this.props;
    if (language === "zhTW") {
      // 切換為英文
      writeCookie("language", "en");
      i18n.changeLanguage("en");
      changeLanguage("en");
    } else {
      // 切換為中文
      writeCookie("language", "zhTW");
      i18n.changeLanguage("zhTW");
      changeLanguage("zhTW");
    }
  };

  changeEN = () => {
    this.loadingHalfSec();
    const { changeLanguage } = this.props;
    // 切換為英文
    writeCookie("language", "en");
    i18n.changeLanguage("en");
    changeLanguage("en");
  };

  changezhTW = () => {
    this.loadingHalfSec();
    const { changeLanguage } = this.props;
    // 切換為中文
    writeCookie("language", "zhTW");
    i18n.changeLanguage("zhTW");
    changeLanguage("zhTW");
  };

  changeJP = () => {
    this.loadingHalfSec();
    const { changeLanguage } = this.props;
    // 切換為中文
    writeCookie("language", "jp");
    i18n.changeLanguage("jp");
    changeLanguage("jp");
  };

  loadingHalfSec = () => {
    this.props.showLoading(true);
    setTimeout(() => {
      this.props.showLoading(false);
    }, 500);
  };

  openLanguage = () => {
    this.setState({
      active: true
    });
  };

  closeLanguage = () => {
    this.setState({
      active: false
    });
  };

  render() {
    const { language } = this.props;
    const { active } = this.state;
    return (
      <Content
        onMouseOver={this.openLanguage}
        onMouseLeave={this.closeLanguage}
      >
        {language === "zhTW" ? "繁" : language === "jp" ? "日" : "EN"}
        <SelectContent active={active}>
          <p onClick={this.changeEN}>EN</p>
          <p onClick={this.changezhTW}>繁</p>
          <p onClick={this.changeJP}>日</p>
        </SelectContent>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  language: state.app.language.language
});

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: language => {
      dispatch(changeLanguage(language));
    },
    showLoading: bool => {
      dispatch(showLoading(bool));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSwitch);
