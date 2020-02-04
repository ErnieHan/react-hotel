import React, { Component } from "react";
import { Button } from "./css";
import { Translation } from "react-i18next";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";
// Redux
import { connect } from "react-redux";
import { showLockProductModal } from "../../store/actions";

class SoldoutButton extends Component {
  targetElement = null;
  componentDidMount() {
    this.targetElement = document.querySelector("#lock-product-modal");
  }
  openModal = () => {
    disableBodyScroll(this.targetElement);
    this.props.showLockProductModal(true);
  };
  render() {
    return (
      <>
        <Button onClick={this.openModal}>
          <Translation>{t => <>{t("product.9")}</>}</Translation>
        </Button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  lockProductModalActive: state.app.lockProductModal.active
});

const mapDispatchToProps = dispatch => {
  return {
    showLockProductModal: bool => {
      dispatch(showLockProductModal(bool));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SoldoutButton);
