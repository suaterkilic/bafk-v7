import React, { Fragment } from "react";
import Layout from "../../components/layout";

const Compare = () => {
  return (
    <Fragment>
      <div
        id="myBody"
        footer-data="1"
        className="page-template page-template-page-view-compare page-template-page-view-compare-php page page-id-10958 logged-in wp-embed-responsive theme-barberry woocommerce-js wpb-js-composer js-comp-ver-6.5.0 vc_responsive no-offcanvas-animation header-has-title header-has-overlap catalog-ajax-filter posts-has-parallax has-wishlist bb_classic_notif notice_clickable tag-cloud-equal buy_now_enable"
      >
        <Layout>
          <div className="page-header page-title-default title-size-default title-design-default color-scheme-default">
            {/* begin title-section */}
            <div
              className="title-section grid-container"
              data-parallax='{"y" : -40, "smoothness": 10}'
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
                WebkitTransform:
                  "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
              }}
            >
              {/* begin title-section-wrapper */}
              <div className="title-section-wrapper grid-x align-middle align-center">
                {/* begin page-title-wrapper */}
                <div className="title-wrapper">
                  <div className="breadcrumbs-wrapper">
                    <div
                      className="breadcrumbs"
                      style={{
                        opacity: 1,
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      <span>
                        <a
                          href="https://barberry.temashdesign.com/demo-furniture/"
                          rel="v:url"
                          property="v:title"
                        >
                          Home
                        </a>
                      </span>
                      <span className="delimiter">/</span>
                      <span className="current">Compare</span>
                    </div>
                    {/* .breadcrumbs */}
                  </div>
                  {/* .breadcrumbs-wrapper */}
                  {/* begin page-title-wrapper */}
                  <div className="page-title-wrapper">
                    <h1
                      className="page-title entry-title"
                      style={{
                        opacity: 1,
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      Compare{" "}
                    </h1>
                  </div>
                  {/* end .page-title-wrapper */}
                </div>
                {/* end .title-wrapper */}
              </div>
              {/* end .title-section-wrapper */}
            </div>
            {/* end .title-section */}
            {/* begin page-title-wrapper */}
            <div className="page-header-bg-wrapper bg-loaded">
              <div
                className="page-header-bg rellax"
                data-rellax-speed="-1.5"
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              />
            </div>
            {/* end .page-title-wrapper */}
          </div>
          <div
            id="primary"
            className="default-width-page content-area"
            style={{ opacity: 1, visibility: "inherit", padding: 0, marginBottom: 0 }}
          >
            {/* begin site-content */}
            <div id="content" className="site-content" role="main">
              {/* begin grid-container */}
              <div className="grid-container content-page-wrapper">
                {/* begin grid-x */}
                <div className="grid-x grid-margin-x">
                  {/* begin cell */}
                  <div className="cell large-12">
                    <div className="barberry-wrap-table-compare">
                      <div className="empty-compare-section">
                        <i className="barberry-empty-icon" />
                        <h4 className="text-center margin-bottom-30 empty woocommerce-compare__empty-message">
                          No product added to compare!
                        </h4>
                        <p className="text-center">
                          <a
                            href="https://barberry.temashdesign.com/demo-furniture/shop/"
                            className="button barberry-sidebar-return-shop btn--border"
                            title="Return to shop"
                          >
                            Return to shop
                          </a>
                        </p>
                      </div>
                    </div>
                    <article
                      id="post-10958"
                      className="post-10958 page type-page status-publish hentry"
                    >
                      <div className="entry-content"></div>
                      {/* .entry-content */}
                    </article>
                    {/* #post */}
                  </div>
                  {/* end cell large-12 */}
                </div>
                {/* end grid-x */}
              </div>
              {/* end grid-container */}
            </div>
            {/* end site-content */}
            <div className="prefooter" />
          </div>
        </Layout>
      </div>
    </Fragment>
  );
};

export default Compare;
