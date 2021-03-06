import React, { Component } from "react";
import { Title, Table, Banner } from "./css";

export class index extends Component {
  render() {
    return (
      <>
        <Banner />
        <Title>蔡依林 Ugly Beauty 2020 世界巡迴演唱會 高雄站</Title>
        <Table>
          <tbody>
            <tr>
              <td className="dome-key">開始時間</td>
              <td>2020/05/15 20:00 (+0800) </td>
            </tr>
            <tr>
              <td className="dome-key">イベント場所</td>
              <td>高雄巨蛋 / 高雄市左營區博愛二路757號</td>
            </tr>
            <tr>
              <td className="dome-key">主催者</td>
              <td>超級圓頂／凌時差音樂</td>
            </tr>
            <tr>
              <td className="dome-key">チケット種別</td>
              <td>台湾 FamiPort 取引</td>
            </tr>
            <tr>
              <td className="dome-key">支払い方法</td>
              <td>ATM、虛擬帳號</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export default index;
