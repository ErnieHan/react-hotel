import React, { Component } from "react";
import { Content, Info, Title, Item, LogoutButton } from "./MiniMemberInfo-css";
import { connect } from "react-redux";
import { login } from "../../store/actions";
import { Translation } from "react-i18next";
import { Link } from "react-router-dom";

class MiniMemberInfo extends Component {
  state = {
    active: false
  };

  openInfo = () => {
    this.setState({
      active: true
    });
  };

  closeInfo = () => {
    this.setState({
      active: false
    });
  };

  logout = () => {
    localStorage.removeItem("user");
    this.props.login(false);
    window.location = "./";
  };

  render() {
    const { memberInfo, getMemberInfoSuccessfully } = this.props;
    const { active } = this.state;
    return (
      <Content onMouseOver={this.openInfo} onMouseLeave={this.closeInfo}>
        <i className="fas fa-user" />
        {getMemberInfoSuccessfully && (
          <Info active={active}>
            <Title>
              <Translation>{t => <>{t("memberInfo.hello")}</>}</Translation>,{" "}
              {memberInfo.gsx$name.$t}!
            </Title>
            <div>
              <Link to="/my-account">
                <Item>
                  <Translation>
                    {t => <>{t("memberInfo.account")}</>}
                  </Translation>
                </Item>
              </Link>
              <Item>
                <Translation>
                  {t => <>{t("memberInfo.shoppingRecord")}</>}
                </Translation>
              </Item>
              <Item>
                <Translation>
                  {t => <>{t("memberInfo.membersOnly")}</>}
                </Translation>
              </Item>
              <Item>
                <Translation>{t => <>{t("memberInfo.more")}</>}</Translation>
              </Item>
            </div>
            <LogoutButton onClick={this.logout}>
              <Translation>{t => <>{t("memberInfo.logout")}</>}</Translation>
            </LogoutButton>
          </Info>
        )}
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  memberInfo: state.app.memberInfo.memberInfo,
  getMemberInfoSuccessfully: state.app.memberInfo.getMemberInfoSuccessfully
});

const mapDispatchToProps = dispatch => {
  return {
    login: bool => {
      dispatch(login(bool));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniMemberInfo);
