import React, { Component } from "react";
import {
  ModalBackground,
  ModalContent,
  ModalHead,
  ModalBody,
  CloseButton
} from "./Modal-css";
import Swipe from "react-easy-swipe";

class Modal extends Component {
  backgroundClick = e => {
    const { id } = e.target;
    if (id === "modal-background") {
      this.props.closeModal();
    }
  };

  onSwipeMove = (position, event) => {
    if (position.x >= 45) {
      this.props.closeModal();
    }
  };

  render() {
    const { title, body, closeModal, active, id } = this.props;
    return (
      <>
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

            <ModalBody id={id}>
              <Swipe onSwipeMove={this.onSwipeMove}>
                {body}
                <input type="text" />
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
              </Swipe>
            </ModalBody>
          </ModalContent>
        </ModalBackground>
      </>
    );
  }
}

export default Modal;
