import React, { Component } from "react";
import { Content, List } from "./css";
import { Helmet } from "react-helmet";
import { Translation } from "react-i18next";
import { Link } from "react-router-dom";

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
                    "name": "Embrace",
                    "item": "https://tw.chowsangsang.com/tc/product/Jewellery"
                  },{
                    "@type": "ListItem",
                    "position": 3,
                    "name": "手鍊",
                    "item": "https://tw.chowsangsang.com/tc/product/Jewellery"
                  }]
                }
          `}</script>
        </Helmet>
        <Content>
          <List>
            <Link to="/">
              <Translation>{t => <>{t("breadcrumbs.home")}</>}</Translation>
            </Link>
          </List>
          <List>
            <Link to="/collections/embrace">Embrace</Link>
          </List>
          <List>
            <Link to="/products/bracelet">
              <Translation>{t => <>{t("breadcrumbs.bracelet")}</>}</Translation>
            </Link>
          </List>
        </Content>
      </>
    );
  }
}

export default index;
