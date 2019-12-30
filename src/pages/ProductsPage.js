import React, { Component } from "react";
import { Layout, Content } from "./ProductPage";
import styled from "styled-components";
import ProductLists from "../components/ProductLists";
import FilterBarMobile from "../components/FilterBarMobile";
import ScrollTopButton from "../components/ScrollTopButton";

const Title = styled.div`
  h1 {
    font-weight: 500;
    font-size: 28px;
  }
  margin-top: 1rem;
  margin-bottom: 2rem;
  @media (max-width: 767px) {
    margin-bottom: 1rem;
    h1 {
      font-size: 22px;
    }
  }
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    display: none;
  }
`;

const Item = styled.div`
  display: inline-block;
  margin: 0 1rem;
  position: relative;
  padding-right: 1rem;
  cursor: pointer;
  &::after {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    right: 0;
    background: url(/images/down-arrow.png) no-repeat center center;
    background-size: contain;
    transform: translateY(-50%);
  }
`;

const FindProducts = styled.div`
  margin-bottom: 1rem;
  color: #8e8e8e;
  @media (max-width: 767px) {
    text-align: center;
  }
`;

const SacleSection = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
    margin-bottom: 1rem;
    font-size: 2.25rem;
  }
`;

const ScaleOption = styled.i`
  cursor: pointer;
  margin-right: 0.5rem;
  color: ${props => (props.scaleSize ? "tan" : "#e9e8e7")};
`;

class ProductsPage extends Component {
  state = {
    scale: "50%",
  };
  scale50 = () => {
    this.setState({
      scale: "50%",
    });
  };
  scale100 = () => {
    this.setState({
      scale: "100%",
    });
  };
  render() {
    return (
      <Layout>
        <Content>
          <Title>
            <h1>Bracelet</h1>
          </Title>
          <FilterBar>
            <div>
              篩選：
              <Item>佩戴</Item>
              <Item>金屬</Item>
              <Item>寶石</Item>
              <Item>系列</Item>
            </div>
            <div>
              排序：<Item>最新上架</Item>
            </div>
          </FilterBar>
          <SacleSection>
            <ScaleOption className="fas fa-th-large" scaleSize={this.state.scale === "50%"} onClick={this.scale50} />
            <ScaleOption className="fas fa-square" scaleSize={this.state.scale === "100%"} onClick={this.scale100} />
          </SacleSection>

          <FilterBarMobile />
          <FindProducts>找到 7 件飾品</FindProducts>
          <ProductLists scale={this.state.scale} />
        </Content>
        <ScrollTopButton />
      </Layout>
    );
  }
}

export default ProductsPage;
