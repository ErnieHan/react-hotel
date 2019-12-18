import React, { Component } from "react";
import { Content, List } from "./css";
import { Helmet } from "react-helmet";
import { Translation } from "react-i18next";

class index extends Component {
  render() {
    return (
      <>
        <Helmet>
          <script type="application/ld+json">{`
                {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "EMPHASIS",
                    "item": "https://tw.chowsangsang.com"
                  },{
                    "@type": "ListItem",
                    "position": 2,
                    "name": "戒指",
                    "item": "https://tw.chowsangsang.com/tc/product/Jewellery"
                  }]
                }
          `}</script>
        </Helmet>
        <Content>
          <List>
            <Translation>{t => <>{t("breadcrumbs.home")}</>}</Translation>
          </List>
          <List>Marco Bicego</List>
          <List>
            <Translation>{t => <>{t("breadcrumbs.bracelet")}</>}</Translation>
          </List>
        </Content>
      </>
    );
  }
}

export default index;
