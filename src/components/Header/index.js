import React, { Component } from "react";
import {
  Content,
  Left,
  Center,
  Right,
  NavbarContent,
  Top,
  NavbarLayout,
  NavItem,
  NavLeft,
  NavCenter,
  NavRight,
  ListBody,
  ListContent
} from "./Header-css";
import logo from "../../images/logo-black.25b6dfd5.svg";
import Basic from "./Navbar/Basic";
import Listing from "./Navbar/Listing";
import Collection from "./Navbar/Collection";
import LanguageSwitch from "../LanguageSwitch";
import { Translation } from "react-i18next";

export class Header extends Component {
  state = {
    sticky: false,
    activeContent: null
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.sticky !== this.state.sticky ||
      nextState.activeContent !== this.state.activeContent
    )
      return true;
    return false;
  }

  handleScroll = () => {
    const elementTop = this.getAbsPos(this.refs["layout"]).y;
    if (window.pageYOffset > elementTop) {
      this.setState({
        sticky: true
      });
    } else {
      this.setState({
        sticky: false
      });
    }
  };

  getAbsPos = o => {
    var pos = { x: 0, y: 0 };
    while (o != null) {
      pos.x += o.offsetLeft;
      pos.y += o.offsetTop;
      o = o.offsetParent;
    }
    return pos;
  };

  openContent = data => {
    this.setState({
      activeContent: data.type
    });
  };

  closeContent = data => {
    this.setState({
      activeContent: null
    });
  };

  render() {
    const { sticky } = this.state;

    const navbarLists = [
      {
        name: <Translation>{t => <>{t("header.brand")}</>}</Translation>,
        component: null,
        type: "nomarl"
      },
      {
        name: <Translation>{t => <>{t("header.collections")}</>}</Translation>,
        component: <Collection />,
        type: "collection"
      },
      {
        name: <Translation>{t => <>{t("header.jewellery")}</>}</Translation>,
        component: <Listing />,
        type: "listing"
      },
      {
        name: <Translation>{t => <>{t("header.services")}</>}</Translation>,
        component: <Basic />,
        type: "basic"
      },
      { name: "MEMBER", component: null, type: "nomarl" }
    ];
    return (
      <Content>
        <Top>
          <Left>幣值 | 分店</Left>
          <Center>
            <img src={logo} alt="" />
          </Center>
          <Right>
            註冊登入 | 喜愛清單 | 購物袋 | <LanguageSwitch />
          </Right>
          <NavbarLayout ref="layout">
            <NavbarContent ref="content" sticky={sticky}>
              <NavLeft sticky={sticky}>
                <img src={logo} alt="" />
              </NavLeft>
              <NavCenter>
                {navbarLists.map((data, index) => (
                  <NavItem
                    key={index}
                    onMouseOver={this.openContent.bind(this, data)}
                    onMouseLeave={this.closeContent.bind(this, data)}
                  >
                    {data.name}
                  </NavItem>
                ))}
              </NavCenter>
              <NavRight sticky={sticky}>註冊登入 | 喜愛清單 | 購物袋</NavRight>
              {navbarLists.map((data, index) =>
                data.component !== null ? (
                  <ListBody
                    key={index}
                    active={data.type === this.state.activeContent}
                    onMouseOver={this.openContent.bind(this, data)}
                    onMouseLeave={this.closeContent.bind(this, data)}
                  >
                    <ListContent>{data.component}</ListContent>
                  </ListBody>
                ) : null
              )}
            </NavbarContent>
          </NavbarLayout>
        </Top>
      </Content>
    );
  }
}

export default Header;
