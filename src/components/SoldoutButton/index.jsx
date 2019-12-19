import React, { Component } from "react";
import { Button } from "./css";
import { Translation } from "react-i18next";
import Modal from "../Modal";
// import { lockBody, unlockBody } from "../../function/bodyLockStatus";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

class SoldoutButton extends Component {
  targetElement = null;
  state = {
    active: false
  };

  componentDidMount() {
    this.targetElement = document.querySelector("#test-modal");
  }

  componentWillMount() {
    clearAllBodyScrollLocks();
  }

  openModal = () => {
    disableBodyScroll(this.targetElement);
    this.setState({
      active: true
    });
  };

  closeModal = () => {
    enableBodyScroll(this.targetElement);
    this.setState({
      active: false
    });
  };

  render() {
    return (
      <>
        <Button onClick={this.openModal}>
          <Translation>{t => <>{t("product.9")}</>}</Translation>
        </Button>
        <Modal
          title="TESTING"
          body="body content"
          active={this.state.active}
          closeModal={this.closeModal.bind(this)}
          id="test-modal"
        />
      </>
    );
  }
}

export default SoldoutButton;
