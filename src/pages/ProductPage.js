import React, { Component } from "react";
import LR from "../components/LR";
import ScrollAddToBag from "../components/ScrollAddToBag";
import Breadcrumbs from "../components/Breadcrumbs";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Content = styled.div`
  max-width: 1420px;
  margin: 0 auto;
`;

class ProductPage extends Component {
  render() {
    return (
      <Content>
        <Helmet>
          <title> Boltenstern 18K黃金綠石髓手鍊 &nbsp;|&nbsp; EMPHASIS</title>
          <meta
            name="description"
            content="少年漫畫是指以青少年為主要讀者對象的漫畫，另外讀者組別甚廣，有許多的兒童和少女、甚至成人也是忠實讀者。題材一般以打鬥、懸疑、冒險、科幻為主。"
          />
        </Helmet>
        <Breadcrumbs />
        <LR />
        <ScrollAddToBag />
      </Content>
    );
  }
}

export default ProductPage;
