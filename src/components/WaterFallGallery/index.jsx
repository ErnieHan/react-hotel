import React, { Component } from "react";
import Masonry from "react-masonry-component";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

export class index extends Component {
  render() {
    const masonryOptions = {
      transitionDuration: 200 //螢幕縮放時的位移動化時間ms為單位
    };
    const imagesLoadedOptions = { background: ".my-bg-image-el" };
    const lists = [
      "1",
      "2",
      "1",
      "6",
      "1",
      "4",
      "1",
      "5",
      "1",
      "1",
      "6",
      "1",
      "1",
      "7",
      "1",
      "1",
      "8",
      "1",
      "1"
    ];
    return (
      <>
        <Masonry
          className={"my-gallery-class"} // default ''
          elementType={"ul"} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          {lists.map((data, index) => (
            <li
              className="image-element-class"
              style={{
                width: "200px",
                border: "1px solid black"
              }}
              key={index}
            >
              I am no.{index}
              <img
                className="lazyload"
                data-src="https://cdn.chowsangsang.com/dfs/ivCssModelImages/90792/ada726b9d2a0f75f2db19bee3a6ceaf9.jpg"
                alt=""
              />
            </li>
          ))}
        </Masonry>
      </>
    );
  }
}

export default index;
