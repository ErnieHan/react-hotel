import React, { Component } from "react";
import {
  Content,
  Table,
  Question,
  NextButton,
  DisableButton,
  Answer
} from "./css";

let opitions1; // 問題一
let opitions2; // 問題二
let answer; // 正確解答
let apple;

class index extends Component {
  state = {
    answer: ""
  };
  hanldeChange = e => {
    this.setState({
      answer: e.target.value
    });
  };
  checkAnswer = () => {
    if (this.state.answer === "D4") {
      alert("答對了");
    } else {
      alert("答案錯誤");
    }
  };
  render() {
    return (
      <Content>
        {apple}
        <Table>
          <tbody>
            <tr>
              <th>票種</th>
              <th>座位</th>
              <th>票價</th>
              <th>數量</th>
            </tr>
            <tr>
              <td>全票</td>
              <td>特1A區、特1B區</td>
              <td>TWD$4,900</td>
              <td>1</td>
            </tr>
            <tr>
              <td>全票</td>
              <td>紅308區、紅309區</td>
              <td>TWD$4,500</td>
              <td>完售</td>
            </tr>
            <tr>
              <td>全票</td>
              <td>紅308區、紅309區</td>
              <td>TWD$3,600</td>
              <td>完售</td>
            </tr>
            <tr>
              <td>全票</td>
              <td>紅308區、紅309區</td>
              <td>TWD$3,200</td>
              <td>完售</td>
            </tr>
            <tr>
              <td>全票</td>
              <td>紅308區、紅309區</td>
              <td>TWD$3,000</td>
              <td>完售</td>
            </tr>
            <tr>
              <td>全票</td>
              <td>紅308區、紅309區</td>
              <td>TWD$2,000</td>
              <td>完售</td>
            </tr>
            <tr>
              <td>全票</td>
              <td>紅308區、紅309區</td>
              <td>TWD$1,600</td>
              <td>完售</td>
            </tr>
            <tr>
              <td>全票</td>
              <td>紅308區、紅309區</td>
              <td>TWD$800</td>
              <td>完售</td>
            </tr>
          </tbody>
        </Table>
        <Question>
          問題一：在《消極掰》MV中，連同Jolin及演員共有幾人集體跳喪志操？
          <div>
            (A) 8人
            <br />
            (B) 32人
            <br />
            (C) 72人
            <br />
            (D) 15人
          </div>
          問題二：何者不是Jolin在Instagram中稱呼屋虎的別名？
          <div>
            (1) 皮小胖
            <br />
            (2) 皮卡丘
            <br />
            (3) 皮在癢
            <br />
            (4) 皮皮剉
          </div>
          <Answer>
            <input
              type="text"
              placeholder="請在此輸入答案"
              onChange={this.hanldeChange}
            />
          </Answer>
        </Question>
        {this.state.answer !== "" ? (
          <NextButton onClick={this.checkAnswer}>下一步</NextButton>
        ) : (
          <DisableButton>下一步</DisableButton>
        )}
      </Content>
    );
  }
}

export default index;
