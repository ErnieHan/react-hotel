import React, { Component } from "react";
import styled from "styled-components";
import $ from "jquery";

const Content = styled.div`
  min-height: 70vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 15px;
`;

const Button = styled.button`
  padding: 1rem;
  background: #1a1a1a;
  color: #fff;
  margin-bottom: 1rem;
`;

class API extends Component {
  doPost = () => {
    const time = new Date().toLocaleString();
    const data = {
      action: "write",
      time: time,
      name: "Erbue",
      gender: "male",
      remark: "測試寫入功能",
    };
    $.ajax({
      type: "post",
      data: data,
      url: "https://script.google.com/macros/s/AKfycbxn_mCf4elSzpbprnFLGMOTkZcXSWOsfKLRNV3kUGTnbfKxqzWq/exec",
      success: function() {
        console.log("成功");
      },
      error: function() {},
      complete: function() {
        console.log("總是出現我");
      },
    });
  };

  doRead = () => {
    // $.ajax({
    //   type: "post",
    //   data: {
    //     action: "read",
    //     query: "Erbue",
    //   },
    //   url: "https://script.google.com/macros/s/AKfycbxn_mCf4elSzpbprnFLGMOTkZcXSWOsfKLRNV3kUGTnbfKxqzWq/exec",
    //   success: function(e) {
    //     alert(e);
    //   },
    // });
    $.ajax({
      type: "post",
      data: {
        method: "read",
        query: "Mary",
      },
      url: "https://script.google.com/macros/s/AKfycbxN6sBikcLtDNxzZU1-hrylbGUzJ1qD2yXjZjmiw9ra7hPHPgo/exec", // 填入網路應用程式網址
      success: function(e) {
        alert(e);
      },
    });
  };

  render() {
    return (
      <Content>
        <div>
          <Button onClick={this.doPost}>GOOGLE APPS SCRIPT_POST</Button>
        </div>
        <div>
          <Button onClick={this.doRead}>GOOGLE APPS SCRIPT_READ</Button>
        </div>
      </Content>
    );
  }
}

export default API;
