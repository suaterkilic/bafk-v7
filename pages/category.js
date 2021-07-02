import React, { Fragment, useState, useEffect } from "react";
import Layout from "../components/header-layout";
import Header from "../components/categories/Header";
import SearchIcon from "../components/header/SearchIcon";
import Footer from "../components/footer/Footer";
import Filter from "../components/categories/Filter";
import Items from "../components/categories/Items";
import Link from "next/link";
import axios from 'axios'


const Category =  () => {
  useEffect(() => {
    document.fonts.onloadingdone = () => {
      document.getElementById("myBody").classList.add("myOpacity");
    };
    document.fonts.ready.then(() =>
      document.getElementById("myBody").classList.add("myOpacity")
    );

    document.getElementById("categoryHeader").classList.add("imgZoomOut");
  }, [])

  return(
    <Fragment>
      <Fragment>
        <div
          id="myBody"
          footer-data="1"
          className="overOpacityMain archive tax-product_cat term-erkek-esofmanlari term-148 wp-embed-responsive theme-bafk app_theme app_theme-page app_theme-no-js bafk-js-composer js-comp-ver-6.3.0 vc_responsive no-offcanvas-animation app_theme-shop header-has-title header-has-overlap catalog-ajax-filter shop-pagination-infinite_scroll blog-pagination-load_more_button posts-has-parallax bb_classic_notif tag-cloud-default"
        >
          <Layout>
            <div className="page-header page-title-default title-size-small title-design-default color-scheme-light with-back-btn">
              {/* begin title-section */}
              <div
                className="title-section grid-container"
                data-parallax='{"y" : -40, "smoothness": 10}'
              >
                {/* begin title-section-wrapper */}
                <div className="title-section-wrapper grid-x align-middle align-center">
                  {/* begin page-title-wrapper */}
                  <div className="title-wrapper">
                    <div className="breadcrumbs-wrapper">
                      <div className="breadcrumbs" itemProp="breadcrumb">
                        <span>
                          <Link href="/">
                            <a>Home</a>
                          </Link>
                        </span>
                        <span className="delimiter">/</span>
                        <span>Erkek Eşofmanlari</span>
                      </div>
                    </div>
                    {/* begin page-title-wrapper */}
                    <div className="page-title-wrapper">
                      <Link href="/">
                        <a className="back-btn">
                          <svg
                            className="svg-icon"
                            viewBox="0 0 32 32"
                            enableBackground="new 0 0 32 32"
                            xmlSpace="preserve"
                          >
                            <use x={0} y={0} xlinkHref="#i-back" />
                          </svg>
                        </a>
                      </Link>
                      <h1 className="page-title entry-title">
                        Erkek Eşofmanlari
                      </h1>
                    </div>
                    {/* end .page-title-wrapper */}
                    <div className="term-description">
                      <p>
                        Dünyaca ünlü tasarımcıların imzasını taşıyan Erkek
                        Eşofmanları şimdi BAKF markası ile BAFK.com.tr’de.
                      </p>
                    </div>
                  </div>
                  {/* end .title-wrapper */}
                </div>
                {/* end .title-section-wrapper */}
              </div>
              {/* end .title-section */}
              {/* begin page-title-wrapper */}
              <div
                id="pageHeaderCategory"
                className="page-header-bg-wrapper"
                style={{ backgroundColor: "#000" }}
              >
                <div
                  id="categoryHeader"
                  className="page-header-bg rellax "
                  style={{
                    backgroundImage: "url(/images/category/background.webp)",
                  }}
                />
              </div>
              {/* end .page-title-wrapper */}
            </div>
            <div id="primary" className="footer-parent content-area">
              <main id="main" className="site-main" role="main">
                <div id="content" className="site-content " role="main">
                  <div className="category-main-grid grid-container content-page-wrapper">
                    <div className="grid-x grid-margin-x main-shop-container">
                      <div
                        className="small-12 large-12 cell "
                        id="content-section"
                      >
                        <div id="shop-content" className="shop-content">
                          <div className="shop-content-inner">
                            <div id="shop-loading" className="shop-loading">
                              <div className="bafk-loader" />
                            </div>
                            <Items />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="content-section-bottom" />
                <div className="prefooter" />
              </main>
            </div>
          </Layout>
        </div>
      </Fragment>
    </Fragment>
  )
}

/*export async function getStaticProps () {
  const res = await axios.get(`https://admin.bafkoriginal.com/api/product`);
  const todos = res.data;
  //console.log(  todos);

  return {
    props: {
      todos,
    },
    revalidate: 60
  };
}*/

export default Category;
