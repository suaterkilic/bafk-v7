import React, { Fragment, useEffect } from "react";
import Layout from "../../components/layout";
const MyAccount = () => {

  useEffect(() => {
    document.fonts.onloadingdone = () => {
      document.getElementById('myBody').classList.add('myOpacity');
    };  
    document.fonts.ready
    .then(() => document.getElementById('myBody').classList.add('myOpacity'))
  }, [])
  return (
    <Fragment>
      <div
        id="myBody"
        footer-data="1"
        className="overOpacityMain page-template-default page page-id-1708 logged-in wp-embed-responsive theme-barberry woocommerce-account woocommerce-page woocommerce-js wpb-js-composer js-comp-ver-6.5.0 vc_responsive no-offcanvas-animation header-has-title header-has-overlap catalog-ajax-filter posts-has-parallax has-wishlist bb_classic_notif notice_clickable tag-cloud-equal buy_now_enable"
      >
        <Layout>
          <div
            id="primary"
            className="default-width-page content-area"
            style={{ opacity: 1, visibility: "inherit", padding: 0 }}
          >
            {/* begin site-content */}
            <div id="content" className="site-content" role="main">
              {/* begin grid-container */}
              <div className="grid-container content-page-wrapper" style={{ padding: 0 }}>
                {/* begin grid-x */}
                <div className="grid-x grid-margin-x">
                  {/* begin cell */}
                  <div className="cell large-12">
                    <article
                      id="post-1708"
                      className="post-1708 page type-page status-publish hentry"
                    >
                      <div className="entry-content">
                        <div className="woocommerce">
                          {/* begin grid-x */}
                          <div className="grid-x account-cells">
                            {/* begin account-intro */}
                            <div className="account-intro cell large-4">
                              {/* begin account-intro-wrapper */}
                              <div className="account-intro-wrapper">
                                <div className="account-nav-top">
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
                                        <span className="current">
                                          My account
                                        </span>
                                      </div>
                                      {/* .breadcrumbs */}
                                    </div>
                                    {/* .breadcrumbs-wrapper */}
                                    <div className="page-title-wrapper">
                                      <h1
                                        className="page-title"
                                        style={{
                                          opacity: 1,
                                          visibility: "inherit",
                                          transform: "translate(0px, 0px)",
                                        }}
                                      >
                                        Hi Suat
                                      </h1>{" "}
                                    </div>
                                  </div>
                                  <nav className="woocommerce-MyAccount-navigation">
                                    <ul>
                                      <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--dashboard is-active">
                                        <a href="https://barberry.temashdesign.com/demo-furniture/my-account/">
                                          Dashboard
                                        </a>
                                      </li>
                                      <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders">
                                        <a href="https://barberry.temashdesign.com/demo-furniture/my-account/orders/">
                                          Orders
                                        </a>
                                      </li>
                                      <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--downloads">
                                        <a href="https://barberry.temashdesign.com/demo-furniture/my-account/downloads/">
                                          Downloads
                                        </a>
                                      </li>
                                      <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-address">
                                        <a href="https://barberry.temashdesign.com/demo-furniture/my-account/edit-address/">
                                          Addresses
                                        </a>
                                      </li>
                                      <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account">
                                        <a href="https://barberry.temashdesign.com/demo-furniture/my-account/edit-account/">
                                          Account details
                                        </a>
                                      </li>
                                      <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--wishlist">
                                        <a href="https://barberry.temashdesign.com/demo-furniture/wishlist/">
                                          Wishlist
                                        </a>
                                      </li>
                                      <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout">
                                        <a href="https://barberry.temashdesign.com/demo-furniture/my-account/customer-logout/?_wpnonce=f69b52e543">
                                          Logout
                                        </a>
                                      </li>
                                    </ul>
                                  </nav>
                                </div>
                                <div className="account-nav-bottom">
                                  <a href="https://barberry.temashdesign.com/demo-furniture/my-account/customer-logout/?_wpnonce=f69b52e543">
                                    Logout
                                  </a>
                                </div>
                              </div>
                              {/* end account-intro-wrapper */}
                            </div>
                            {/* end account-intro */}
                            {/* begin account-content */}
                            <div className="account-content cell large-8">
                              <div className="woocommerce-MyAccount-content">
                                <div className="woocommerce-notices-wrapper" />
                                {/* begin dashboard-sections */}
                                <div className="dashboard-sections">
                                  <div className="dashboard-intro">
                                    From your account dashboard you can view
                                    your{" "}
                                    <a href="https://barberry.temashdesign.com/demo-furniture/my-account/orders/">
                                      recent orders
                                    </a>
                                    , manage your{" "}
                                    <a href="https://barberry.temashdesign.com/demo-furniture/my-account/edit-address/">
                                      shipping and billing addresses
                                    </a>
                                    , and{" "}
                                    <a href="https://barberry.temashdesign.com/demo-furniture/my-account/edit-account/">
                                      edit your password and account details
                                    </a>
                                    .
                                  </div>
                                  <h2>Recent orders</h2>
                                  <div className="account-no-orders">
                                    <table className="woocommerce-orders-table woocommerce-MyAccount-orders shop_table shop_table_responsive my_account_orders account-orders-table">
                                      <thead>
                                        <tr>
                                          <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-number">
                                            <span className="nobr">Order</span>
                                          </th>
                                          <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-date">
                                            <span className="nobr">Date</span>
                                          </th>
                                          <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-status">
                                            <span className="nobr">Status</span>
                                          </th>
                                          <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-total">
                                            <span className="nobr">Total</span>
                                          </th>
                                          <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-actions">
                                            <span className="nobr">
                                              Actions
                                            </span>
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td colSpan={11}>
                                            <p>
                                              No order has been made yet.{" "}
                                              <a
                                                className="go-shop-link"
                                                href="https://barberry.temashdesign.com/demo-furniture/shop/"
                                              >
                                                Return to shop
                                              </a>
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="clear" />
                                </div>
                                {/* end dashboard-sections */}
                              </div>
                            </div>
                            {/* end account-content */}
                          </div>
                          {/* end grid-x */}
                        </div>
                      </div>
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

export default MyAccount;
