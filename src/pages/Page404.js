import React, { Component } from "react";
import styled from "styled-components";

const Content = styled.div`
  min-height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    font-weight: normal;
    margin-bottom: 1rem;
  }
  h3 {
    text-align: center;
    font-weight: normal;
  }
`;

export class Page404 extends Component {
  render() {
    return (
      <Content>
        <div>
          <h1>Page 404</h1>
          <h3>Sorry, we can't find this page ...</h3>
        </div>
      </Content>
    );
  }
}

export default Page404;
