import React, { Component } from "react";
import { ModalBackground, ModalContent, ModalHead, ModalBody, CloseButton } from "./Modal-css";
import Swipe from "react-easy-swipe";

class Modal extends Component {
  backgroundClick = e => {
    const { id } = e.target;
    if (id === "modal-background") {
      this.props.closeModal();
    }
  };

  onSwipeMove = (position, event) => {
    console.log(position);
    if (position.x > 80 && position.y < 10) {
      this.props.closeModal();
    }
  };

  render() {
    const { title, body, closeModal, active, id } = this.props;
    return (
      <>
        <ModalBackground active={active} id="modal-background" onClick={this.backgroundClick}>
          <ModalContent active={active}>
            <Swipe onSwipeMove={this.onSwipeMove}>
              <ModalHead>
                {title}
                <CloseButton onClick={closeModal} />
              </ModalHead>

              <ModalBody id={id}>
                <div>{body}</div>
              </ModalBody>
            </Swipe>
          </ModalContent>
        </ModalBackground>
      </>
    );
  }
}

export default Modal;
