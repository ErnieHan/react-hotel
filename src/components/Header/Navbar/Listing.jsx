import React, { Component } from "react";
import styled from "styled-components";
import image from "../../../images/navbar/submenu_thm.jpg";

export const Content = styled.div``;

export const Title = styled.div`
  margin-bottom: 1rem;
`;

export const FlexContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.div`
  h3 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
    a:hover {
      color: tan;
    }
  }
  img {
    max-width: 250px;
  }
`;

class Listing extends Component {
  render() {
    const listingData = {
      title: "所有珠寶",
      subitems: [
        { titleName: "最新產品", items: [{ itemName: "推薦新品" }] },
        {
          titleName: "佩戴",
          items: [
            { itemName: "戒指" },
            { itemName: "手鍊" },
            { itemName: "耳飾" },
            { itemName: "頸鏈" },
            { itemName: "吊墜" }
          ]
        },
        {
          titleName: "寶石",
          items: [
            { itemName: "鑽石" },
            { itemName: "珍珠" },
            { itemName: "彩色寶石" },
            { itemName: "彩色鑽石" }
          ]
        },
        {
          titleName: "金屬",
          items: [
            { itemName: "18K金" },
            { itemName: "Ecruloy 絲緞" },
            { itemName: "純銀" }
          ]
        }
      ]
    };
    return (
      <Content>
        <Title>{listingData.title}</Title>
        <FlexContent>
          {listingData.subitems.map((data, index) => (
            <Item key={index}>
              <h3>{data.titleName}</h3>
              {data.items.map((item, index) => (
                <p key={index}>
                  <a href="#/list">{item.itemName}</a>
                </p>
              ))}
            </Item>
          ))}
          <Item>
            <img src={image} alt="" />
          </Item>
        </FlexContent>
      </Content>
    );
  }
}

export default Listing;
