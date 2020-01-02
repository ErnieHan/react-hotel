import React, { Component } from "react";
import { Content, SelectContent } from "./Language-css";
import { connect } from "react-redux";
import { changeLanguage, showLoading } from "../../store/actions";
import { withRouter } from "react-router-dom";

class LanguageSwitch extends Component {
  state = {
    active: false,
  };

  changeEN = () => {
    const { language } = this.props;
    console.log(language, "############");
    window.location.hash = "#/en/product";
    window.location.reload();
  };

  changeTC = () => {
    window.location.hash = "#/tc/product";
    window.location.reload();
  };

  changeJP = () => {
    window.location.hash = "#/jp/product";
    window.location.reload();
  };

  openLanguage = () => {
    this.setState({
      active: true,
    });
  };

  closeLanguage = () => {
    this.setState({
      active: false,
    });
  };

  render() {
    const { language } = this.props;
    const { active } = this.state;
    return (
      <Content onMouseOver={this.openLanguage} onMouseLeave={this.closeLanguage}>
        {language === "tc" ? "繁" : language === "jp" ? "日" : "EN"}
        <SelectContent active={active}>
          <p onClick={language !== "en" ? this.changeEN : null}>EN</p>
          <p onClick={language !== "tc" ? this.changeTC : null}>繁</p>
          <p onClick={language !== "jp" ? this.changeJP : null}>日</p>
        </SelectContent>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  language: state.app.language.language,
});

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: language => {
      dispatch(changeLanguage(language));
    },
    showLoading: bool => {
      dispatch(showLoading(bool));
    },
  };
};

const routerLanguage = withRouter(LanguageSwitch);

export default connect(mapStateToProps, mapDispatchToProps)(routerLanguage);
