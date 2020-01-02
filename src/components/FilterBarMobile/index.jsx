import React, { Component } from "react";
import {
  Content,
  Select,
  Modal,
  ModalContent,
  SubmitButton,
  Option,
  HadSelection,
  CancelAllButton,
  SelectedOption,
} from "./css";

export class FilterBarMobile extends Component {
  state = {
    active: null,
  };
  toggleFilter = () => {
    if (this.state.active === "filter") {
      this.closeFilterBar();
    } else {
      this.setState({
        active: "filter",
      });
    }
  };
  toggleSort = () => {
    if (this.state.active === "sort") {
      this.closeFilterBar();
    } else {
      this.setState({
        active: "sort",
      });
    }
  };
  closeFilterBar = () => {
    this.setState({
      active: null,
    });
  };
  render() {
    return (
      <Content>
        <Select onClick={this.toggleFilter}>Filter By 篩選</Select>
        <Select onClick={this.toggleSort}>Sort By 排序</Select>
        <Modal active={this.state.active === "filter"}>
          <ModalContent>
            <Option>
              Category 配戴
              <div>
                <span>手鍊</span>
                <span>手鐲</span>
              </div>
            </Option>
            <Option>Metal 金屬</Option>
            <Option>Gemstone 寶石</Option>
            <Option>Designers & Collections 設計師 & 系列</Option>
            <HadSelection>
              <div>
                <CancelAllButton onClick={this.closeFilterBar}>Cancel All 取消</CancelAllButton>
              </div>
              <div>
                <SelectedOption>Bangles & Bracelets</SelectedOption>
                <SelectedOption>Pendants</SelectedOption>
                <SelectedOption>Jewellery</SelectedOption>
                <SelectedOption>Rings</SelectedOption>
                <SelectedOption>Earrings</SelectedOption>
              </div>
            </HadSelection>
            <SubmitButton onClick={this.closeFilterBar}>Apply All 套用全部</SubmitButton>
          </ModalContent>
        </Modal>
        <Modal active={this.state.active === "sort"}>
          <ModalContent>
            <Option>New to EMPHASIS 最新上架</Option>
            <Option>Price from High to Low 價格由高至低</Option>
            <Option>Price from Low to High 價格由低至高</Option>
          </ModalContent>
        </Modal>
      </Content>
    );
  }
}

export default FilterBarMobile;
