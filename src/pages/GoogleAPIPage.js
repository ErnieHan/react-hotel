import React, { Component } from "react";
import styled from "styled-components";
import $ from "jquery";
import { connect } from "react-redux";
import { showLoading } from "../store/actions";
import WindowOldUi from "../components/WindowOldUi";

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: #e9e8e7;
  margin-bottom: 1rem;
  &:hover {
    background: #d9d9d9;
  }
`;

export const FlexBody = styled.div`
  display: flex;
`;

export const Box = styled.div`
  width: 33.33%;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
`;

export const FormBody = styled.div`
  margin-bottom: 1rem;
  min-height: 250px;
  input,
  select {
    width: 100%;
    padding: 1rem;
    border: 1px solid #d1d1d1;
    margin-bottom: 1rem;
    appearance: none;
    background: #fff;
  }
`;

export const ErrorText = styled.div`
  color: red;
  text-align: center;
  margin-bottom: 1rem;
`;

class GoogleAPIPage extends Component {
  state = {
    name: "",
    phone: "",
    order: "default",
    notFinished: false,
    searchResponse: [],
  };

  handleSubmit = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  postGoogleAPI = async () => {
    const time = new Date();
    if ([this.state.name, this.state.phone].includes("") || this.state.order === "default") {
      // 尚未填寫完畢
      this.setState({
        notFinished: true,
      });
    } else {
      // 皆填寫完畢
      this.setState({
        notFinished: false,
      });
      this.props.showLoading(true);
      const data = {
        name: this.state.name,
        phone: `+${this.state.phone}`,
        time: time.toLocaleString(),
        order: this.state.order,
        price: "4800",
        orderNum: "1",
      };
      $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbxwfuuzVWs2ZtrmTTSLys-TH28gerVYLFFwwJhRdStS_l-YJFs/exec",
        data: data,
        dataType: "JSON",
        success: response => {
          console.log(response);
          this.props.showLoading(false);
          this.setState({
            name: "",
            phone: "",
            order: "default",
          });
        },
      });
    }
  };

  search = () => {
    if ([this.state.name, this.state.phone].includes("")) {
      console.log("錯誤");
    } else {
      this.props.showLoading(true);
      var data = {
        name: this.state.name,
        phone: this.state.phone,
      };
      $.ajax({
        type: "post",
        url: "https://script.google.com/macros/s/AKfycbxQyvLycM7PgAYc2w0bzKeroFC0Rqh0QxHMFW3jaP-AP21-_egW/exec",
        data: data,
        dataType: "JSON",
        success: response => {
          console.log(response);
          this.props.showLoading(false);
          this.setState({
            searchResponse: response,
          });
        },
      });
    }
  };

  setting = () => {
    var data = {
      name: "Apple先生",
      phone: "+123",
      index: "9",
      status: "ABC有被更改嗎",
    };
    $.ajax({
      type: "post",
      url: "https://script.google.com/macros/s/AKfycbxqtlFIHCK88Wh0GiJglLYsVeRgh1znuH5Ki_jgWRUypPwYvFw/exec",
      data: data,
      dataType: "JSON",
      mode: "cors",
      success: function(response) {
        console.log(response);
        alert("成功");
      },
    });
  };
  render() {
    return (
      <>
        {/* 舊版本Ｗindow系列UI */}
        <WindowOldUi />
        <Content>
          <FlexBody>
            <Box>
              <FormBody>
                <form onChange={this.handleSubmit}>
                  <input placeholder="請輸入您的姓名" name="name" value={this.state.name} />
                  <input placeholder="請輸入您的手機號碼" name="phone" value={this.state.phone} />
                  <select value="default" name="order" readOnly>
                    <option value={this.state.order} disabled>
                      請選擇所要訂購的商品
                    </option>
                    <option>水星</option>
                    <option>金星</option>
                    <option>地球</option>
                    <option>火星</option>
                    <option>木星</option>
                    <option>天王星</option>
                    <option>海王星</option>
                    <option>月球</option>
                  </select>
                  <input
                    type="text"
                    placeholder="商品售價"
                    value={this.state.order !== "default" ? "售價NTD4,800" : ""}
                    readOnly
                  />
                </form>
              </FormBody>
              <Button onClick={this.postGoogleAPI}>送出表單</Button>
              {this.state.notFinished && <ErrorText>尚未填寫完畢</ErrorText>}
            </Box>
            <Box>
              <FormBody>
                <form>
                  <input placeholder="請輸入您的姓名" name="name" value={this.state.name} />
                  <input placeholder="請輸入您的手機號碼" name="phone" value={this.state.phone} />
                </form>
                {this.state.searchResponse.map(item =>
                  item.data.map((query, j) => (
                    <div key={j}>
                      {query}
                      {console.log(typeof query)}
                    </div>
                  ))
                )}
              </FormBody>
              <Button onClick={this.search}>查詢表單</Button>
            </Box>
            <Box>
              <Button onClick={this.setting}>更改資料</Button>
            </Box>
          </FlexBody>
        </Content>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showLoading: bool => {
      dispatch(showLoading(bool));
    },
  };
};

export default connect(null, mapDispatchToProps)(GoogleAPIPage);
