import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button``;

export class OpenedPage extends Component {
  state = {
    getWindowOpener: false,
  };
  componentDidMount() {
    if (window.opener) {
      this.setState({
        getWindowOpener: true,
      });
      console.log("opener", window.opener.ernie);
      console.log("parent", window.parent.ernie);
    }
    window.addEventListener("beforeunload", function(e) {
      // Cancel the event
      e.preventDefault();
      // Chrome requires returnValue to be set
      e.returnValue = "";
      console.log(e);
      window.opener.postMessage("CANCEL_PAYMENT", "*");
    });
  }

  click = () => {
    if (window.opener.ernie) {
      //叫父層去執行某一個事件
      window.opener.postMessage("OPENED_PAGE_CALLING", "*");
    }
  };
  render() {
    const data = window.opener ? (window.opener.ernie ? JSON.parse(window.opener.ernie) : null) : null;
    return (
      <div>
        {this.state.getWindowOpener && (
          <div>
            <h1>OpenedPage</h1>
            <p>{window.opener.ernie ? window.opener.ernie : "沒抓到"}</p>
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
        <input type="text" />
        Error Page
      </div>
    );
  }
}

export default OpenedPage;
