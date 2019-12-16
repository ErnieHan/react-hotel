import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button``;

export class OpenedPage extends Component {
  state = {
    getWindowOpener: false
  };
  componentDidMount() {
    if (window.opener) {
      this.setState({
        getWindowOpener: true
      });
      console.log("opener", window.opener.ernie);
      console.log("parent", window.parent.ernie);
    }
  }

  click = () => {
    if (window.opener.ernie) {
      //叫父層去執行某一個事件
      window.opener.postMessage("OPENED_PAGE_CALLING", "*");
    }
  };
  render() {
    const data = window.opener
      ? window.opener.ernie
        ? JSON.parse(window.opener.ernie)
        : null
      : null;
    return (
      <div>
        {this.state.getWindowOpener && (
          <div>
            <h1>
              OpenedPage{window.opener.ernie ? window.opener.ernie : "沒抓到"}
            </h1>
            <h1>
              {data ? (
                <>
                  {data.name} / {data.value}
                </>
              ) : null}
            </h1>
            <Button onClick={this.click}>點擊叫父層去執行某一個事件</Button>
          </div>
        )}
        Error Page
      </div>
    );
  }
}

export default OpenedPage;
