import React, { Component } from "react";
import { Content, Select, Modal, ModalContent, SubmitButton, Option } from "./css";

export class FilterBarMobile extends Component {
  state = {
    active: false,
  };
  open = () => {
    this.setState({
      active: !this.state.active,
    });
  };
  render() {
    return (
      <Content>
        <Select onClick={this.open}>Filter By</Select>
        <Select onClick={this.open}>Sort By</Select>
        <Modal active={this.state.active}>
          <ModalContent>
            <Option>Category</Option>
            <Option>Metal</Option>
            <Option>Gemstone</Option>
            <Option>Designers & Collections</Option>
            <SubmitButton>Apply All</SubmitButton>
          </ModalContent>
        </Modal>
      </Content>
    );
  }
}

export default FilterBarMobile;
