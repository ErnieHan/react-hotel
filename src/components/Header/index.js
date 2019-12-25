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
  ListContent,
} from "./Header-css";
import logo from "../../images/logo-black.25b6dfd5.svg";
import Basic from "./Navbar/Basic";
import Listing from "./Navbar/Listing";
import Collection from "./Navbar/Collection";
import LanguageSwitch from "../LanguageSwitch";
import MiniBag from "../MiniBag";
import Favorite from "../Favorite";
import { Translation } from "react-i18next";
import { connect } from "react-redux";

export class Header extends Component {
  state = {
    sticky: false,
    activeContent: null,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.sticky !== this.state.sticky ||
      nextState.activeContent !== this.state.activeContent ||
      nextProps.language !== this.props.language
    )
      return true;
    return false;
  }

  handleScroll = () => {
    const elementTop = this.getAbsPos(this.refs["layout"]).y;
    if (window.pageYOffset > elementTop) {
      this.setState({
        sticky: true,
      });
    } else {
      this.setState({
        sticky: false,
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
      activeContent: data.type,
    });
  };

  closeContent = data => {
    this.setState({
      activeContent: null,
    });
  };

  openRegister = () => {
    //1. open window
    window.openedPage = window.open("/react-hotel/#/opened", "你好", "resizable,height=550,width=430");
    //2. 註冊一個變數，Opened頁面則使用此變數是否正確顯示，來阻止直接輸入網址而進入的情況
    const data = {
      name: "Ernie",
      value: "爾尼",
    };
    window.ernie = JSON.stringify(data);
    // 3. 在第一步驟的行為window.openedPage 就是另開視窗的名稱，可以使用window.openedPage.close()去執行關閉他
  };

  render() {
    const { sticky } = this.state;
    const navbarLists = [
      {
        name: <Translation>{t => <>{t("header.brand")}</>}</Translation>,
        component: null,
        type: "nomarl",
      },
      {
        name: <Translation>{t => <>{t("header.collections")}</>}</Translation>,
        component: <Collection />,
        type: "collection",
      },
      {
        name: <Translation>{t => <>{t("header.jewellery")}</>}</Translation>,
        component: <Listing />,
        type: "listing",
      },
      {
        name: <Translation>{t => <>{t("header.services")}</>}</Translation>,
        component: <Basic />,
        type: "basic",
      },
      { name: "MEMBER", component: null, type: "nomarl" },
    ];
    return (
      <Content>
        <Top>
          <Left>幣值 | 分店</Left>
          <Center>
            <a href={`#/${this.props.language}/home`}>
              <img src={logo} alt="" />
            </a>
          </Center>
          <Right>
            <span onClick={this.openRegister}>註冊 / 登入</span> | <Favorite />
            |
            <MiniBag /> | <LanguageSwitch />
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
              <NavRight sticky={sticky}>
                <span>註冊 / 登入</span>| 喜愛清單 | <MiniBag />
              </NavRight>
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

const mapStateToProps = state => ({
  language: state.app.language.language,
});

export default connect(mapStateToProps, null)(Header);
