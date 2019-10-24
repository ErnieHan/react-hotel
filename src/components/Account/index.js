import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../store/actions";
import {
  Content,
  Right,
  Left,
  Title,
  MemberLevel,
  StarMoney,
  SubSection,
  MemberGrid,
  MemberDetail,
  DetailKey,
  DetailValue
} from "./Account-css";
import { Translation } from "react-i18next";
import SubTitle from "./SubTitle";
import startImage from "../../images/stardollar-blue-xs.png";

class Account extends Component {
  render() {
    const { getMemberInfoSuccessfully, memberInfo } = this.props;
    return (
      <Content>
        {getMemberInfoSuccessfully && (
          <>
            {console.log(memberInfo)}
            <Left>Left</Left>
            <Right>
              <Title>
                <h2>
                  {memberInfo.gsx$name.$t}，
                  <Translation>
                    {t => <>{t("myAccountPage.welcome")}</>}
                  </Translation>
                </h2>
                <StarMoney>
                  <h3>
                    <img src={startImage} alt="" />
                    <Translation>
                      {t => <>{t("myAccountPage.startMoneyTitle")}</>}
                    </Translation>
                    : $0
                  </h3>
                  <h4>
                    (
                    <Translation>
                      {t => <>{t("myAccountPage.startMoneyComment")}</>}
                    </Translation>
                    )
                  </h4>
                </StarMoney>
              </Title>
              {/* 會籍說明 */}
              <SubSection>
                <SubTitle
                  title={
                    <Translation>
                      {t => <>{t("myAccountPage.myMember")}</>}
                    </Translation>
                  }
                  buttonName={
                    <Translation>
                      {t => <>{t("myAccountPage.seeMore")}</>}
                    </Translation>
                  }
                />
                <div>
                  <MemberLevel>
                    <Translation>
                      {t => <>{t("myAccountPage.memberLevelTitle")}</>}
                    </Translation>
                    :{" "}
                    <span>
                      <Translation>
                        {t => <>{t("myAccountPage.silverMember")}</>}
                      </Translation>
                    </span>
                  </MemberLevel>
                  <MemberLevel>
                    <span>
                      <Translation>
                        {t => <>{t("myAccountPage.clickHere")}</>}
                      </Translation>
                    </span>{" "}
                    <Translation>
                      {t => <>{t("myAccountPage.eachMemberLevel")}</>}
                    </Translation>
                  </MemberLevel>
                </div>
              </SubSection>
              {/* 會員資料 */}
              <SubSection>
                <SubTitle
                  title={
                    <Translation>
                      {t => <>{t("myAccountPage.memberData")}</>}
                    </Translation>
                  }
                  buttonName={
                    <Translation>
                      {t => <>{t("myAccountPage.editAndCheck")}</>}
                    </Translation>
                  }
                />
                <MemberGrid>
                  <MemberDetail>
                    <DetailKey>
                      <Translation>
                        {t => <>{t("myAccountPage.name")}</>}
                      </Translation>
                    </DetailKey>
                    <DetailValue>{memberInfo.gsx$name.$t}</DetailValue>
                  </MemberDetail>
                  <MemberDetail>
                    <DetailKey>
                      <Translation>
                        {t => <>{t("myAccountPage.mobile")}</>}
                      </Translation>
                    </DetailKey>
                    <DetailValue>{memberInfo.gsx$phonenumber.$t}</DetailValue>
                  </MemberDetail>
                  <MemberDetail>
                    <DetailKey>
                      <Translation>
                        {t => <>{t("myAccountPage.email")}</>}
                      </Translation>
                    </DetailKey>
                    <DetailValue>{memberInfo.gsx$email.$t}</DetailValue>
                  </MemberDetail>
                </MemberGrid>
              </SubSection>
            </Right>
          </>
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
)(Account);
