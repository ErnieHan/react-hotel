import React, { Component } from "react";
import {
  Content,
  Table,
  Question,
  NextButton,
  DisableButton,
  Answer
} from "./css";

export class index extends Component {
  render() {
    return (
      <Content>
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
          <br />
          (A) 15人
          <br />
          (B) 32人
          <br />
          (C) 8人
          <br />
          (D) 72人
          <br />
          <br />
          問題二：何者不是Jolin在instagram中稱呼屋虎的別名？
          <br />
          (1) 皮小胖
          <br />
          (2) 皮在癢
          <br />
          (3) 皮皮剉
          <br />
          (4) 皮卡丘
          <Answer>
            <input type="text" />
          </Answer>
        </Question>
        {/* <DisableButton>下一步</DisableButton>
        <NextButton>下一步</NextButton> */}
      </Content>
    );
  }
}

export default index;
