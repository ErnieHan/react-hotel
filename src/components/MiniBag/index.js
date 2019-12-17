import React, { Component } from "react";
import { Content, Number } from "./MiniBag-css";
import { connect } from "react-redux";
import { showMiniBag } from "../../store/actions";
import { Translation } from "react-i18next";
import bagImage from "../../images/bag.png";

class MiniBag extends Component {
  openMiniBag = () => {
    this.props.showMiniBag(true);
  };
  closeMiniBag = () => {
    this.props.showMiniBag(false);
  };
  render() {
    const { active } = this.props;
    return (
      <Content>
        <img src={bagImage} alt="" />
        <Number>1</Number>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  active: state.app.miniBag.active
});

const mapDispatchToProps = dispatch => {
  return {
    showMiniBag: bool => {
      dispatch(showMiniBag(bool));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniBag);
