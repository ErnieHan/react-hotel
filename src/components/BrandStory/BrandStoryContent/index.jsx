import React, { Component } from "react";
import { Body, BannerImage, CollectionCotent, ImageContent, TextContent } from "./css";
// import logo from "../../../images/logo-embrace.svg";
// import { Translation } from "react-i18next";
import { HOST_URL } from "../../../constants";

class BrandStoryContent extends Component {
  render() {
    return (
      <>
        <Body>
          <BannerImage>
            <CollectionCotent>
              <ImageContent>
                <img src={`${HOST_URL}/images/logo-embrace.svg`} alt="" />
              </ImageContent>
              <TextContent>
                Go from daily chic to party-perfect in a flash! These fabulous designs are fun, delightful and pairs
                well with a variety of looks. Let your personal style shine through!
              </TextContent>
            </CollectionCotent>
          </BannerImage>
        </Body>
      </>
    );
  }
}

export default BrandStoryContent;
