import React, { Component } from "react";
import { Content, Text, Button } from "./SubTitle-css";

class SubTitle extends Component {
  render() {
    const { title, buttonName } = this.props;
    return (
      <Content>
        <Text>{title}</Text>
        <Button>{buttonName}</Button>
      </Content>
    );
  }
}

export default SubTitle;
