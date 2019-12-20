import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { showLoading } from "../store/actions";
import Masonry from "react-masonry-component";

const Box = styled.div`
  width: 350px;
  height: ${props => (props.active ? "350px" : "250px")};
  background: #e9e8e7;
  padding: 15px;
  border: 1px solid #d1d1d1;
  margin: 0 1rem 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;
const StillLoading = styled.div`
  text-align: center;
  color: tan;
  padding: 35px;
`;

class ListPage extends Component {
  state = {
    fetchPage: 1,
    stop: true,
    stopEvery: false,
    productList: []
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.fetchProductList(this.state.fetchPage);
  }

  handleScroll = () => {
    const footerHeight = document.querySelector("footer").offsetHeight;
    const ableScrollLength =
      document.body.offsetHeight - window.innerHeight - footerHeight;
    if (window.pageYOffset > ableScrollLength && this.state.stop) {
      if (this.state.stopEvery) {
        return;
      } else {
        console.log("現在正fetch第", this.state.fetchPage + 1, "筆資料");
        this.setState({
          fetchPage: this.state.fetchPage + 1,
          stop: false
        });
        this.fetchProductList(this.state.fetchPage);
      }
    } else {
      //   console.log("停止fetch");
    }
  };

  fetchProductList = async page => {
    // this.props.showLoading(true);
    // document.body.style.overflow = "hidden";
    // document.body.style.paddingRight = "17px";
    try {
      const url = `http://localhost:8081/pages?_page=${page}}&_limit=9`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      });
      const result = await response.json();
      const { productList } = this.state;
      for (var i = 0; i < result.length; i++) {
        productList.push(result[i]);
      }
      if (result.length === 9) {
        this.setState({
          productList: productList,
          stop: true
        });
      } else {
        this.setState({
          stopEvery: true
        });
      }
    } catch {
    } finally {
      //   setTimeout(() => {
      //     this.props.showLoading(false);
      //     document.body.style.overflow = "";
      //     document.body.style.paddingRight = "";
      //   }, 1000);
    }
  };

  render() {
    const { productList, stopEvery } = this.state;
    const masonryOptions = {
      transitionDuration: 500
    };
    const imagesLoadedOptions = { background: ".my-bg-image-el" };
    return (
      <>
        <>
          <Masonry
            className={"my-gallery-class"} // default ''
            elementType={"div"} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            imagesLoadedOptions={imagesLoadedOptions} // default {}
          >
            {productList.map((data, index) => (
              <Box key={index} active={index % 2 === 0}>
                {data.author}
                {index}
              </Box>
            ))}
          </Masonry>
        </>
        {stopEvery ? (
          <StillLoading>到達最底部</StillLoading>
        ) : (
          <StillLoading>載入中</StillLoading>
        )}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showLoading: bool => {
      dispatch(showLoading(bool));
    }
  };
};

export default connect(null, mapDispatchToProps)(ListPage);
