import React, { Component } from "react";
import { Cotent, Box, Image, Label, Sub } from "./css";
import { HOST_URL } from "../../constants";
import { Link } from "react-router-dom";

class ProductLists extends Component {
  render() {
    const list = [
      {
        collectionName: "Timeless",
        productName: "「Boltenstern」 18K Gold Chrysoprase Bracelet",
        price: "$169.00",
        image: `${HOST_URL}/images/list01.jpg`,
        image2: "",
        label: "新品",
      },
      {
        collectionName: "Embance",
        productName: "「Boltenstern」 18K Gold Chrysoprase Bracelet",
        price: "$179.00",
        image: `${HOST_URL}/images/list02.jpg`,
        image2: "",
        label: "母親節優惠",
      },
      {
        collectionName: "Embance",
        productName: "「Boltenstern」 18K Gold Chrysoprase Bracelet",
        price: "$179.00",
        image: `${HOST_URL}/images/list03.jpg`,
        image2: "",
        label: "指定兩件9折",
      },
      {
        collectionName: "Embance",
        productName: "「Boltenstern」 18K Gold Chrysoprase Bracelet",
        price: "$249.00",
        image: `${HOST_URL}/images/list04.jpg`,
        image2: "",
        label: "Motherday's Gift",
      },
      {
        collectionName: "Embance",
        productName: "「Boltenstern」 18K Gold Chrysoprase Bracelet",
        price: "$179.00",
        image: `${HOST_URL}/images/list05.jpg`,
        image2: "",
        label: "15% off",
      },
      {
        collectionName: "Embance",
        productName: "「Boltenstern」 18K Gold Chrysoprase Bracelet",
        price: "$129.00",
        image: `${HOST_URL}/images/list06.jpg`,
        image2: "",
        label: "15% off",
      },
      {
        collectionName: "Embance",
        productName: "「Boltenstern」 18K Gold Chrysoprase Bracelet",
        price: "$179.00",
        image: `${HOST_URL}/images/list07.jpg`,
        image2: "",
        label: null,
      },
    ];
    return (
      <Cotent>
        {list.map((data, index) => (
          <Box key={index} scaleSize={this.props.scale === "50%"}>
            <Link to={"/en/product"}>
              <Image image={data.image}>{data.label && <Label>{data.label}</Label>}</Image>
            </Link>
            <Sub>
              <h3>{data.collectionName}</h3>
              <p className="product-title">{data.productName}</p>

              <p className="product-price">{data.price}</p>
            </Sub>
          </Box>
        ))}
      </Cotent>
    );
  }
}

export default ProductLists;
