import React, { Component } from "react";
import { Button, Tip } from "./TipButton-css";
import { Translation } from "react-i18next";

class TipButton extends Component {
  state = {
    a: "1"
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.a === this.state.a) {
      return false;
    }
  }
  render() {
    return (
      <Button>
        提交
        <Tip>
          <Translation>{t => <>{t("tip.Iagree")}</>}</Translation>
        </Tip>
      </Button>
    );
  }
}

export default TipButton;
