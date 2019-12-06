import React, { Component } from "react";
import {
  ModalBackground,
  ModalContent,
  ModalHead,
  ModalBody,
  CloseButton
} from "./Modal-css";

class Modal extends Component {
  backgroundClick = e => {
    const { id } = e.target;
    if (id === "modal-background") {
      this.props.closeModal();
    }
  };
  render() {
    const { title, body, closeModal, active } = this.props;
    return (
      <ModalBackground
        active={active}
        id="modal-background"
        onClick={this.backgroundClick}
      >
        <ModalContent active={active}>
          <ModalHead>
            {title}
            <CloseButton onClick={closeModal} />
          </ModalHead>
          <ModalBody>{body}</ModalBody>
        </ModalContent>
      </ModalBackground>
    );
  }
}

export default Modal;
