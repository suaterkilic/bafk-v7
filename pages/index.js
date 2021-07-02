import React, { Fragment, useState, useEffect } from "react";
import dynamic from 'next/dynamic';

const Layout          = dynamic(() => import('../components/layout'));
const SectionBanner   = dynamic(() => import('../components/home/banner/SectionBanner'));
const Slider          = dynamic(() => import('../components/home/slider/Slider'));
const Categories      = dynamic(() => import('../components/home/categories/Categories'));
const Product         = dynamic(() => import('../components/home/product/Product'));

const Home = () => {

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
        className="overOpacityMain home page-template-default page page-id-3488 page-parent wp-embed-responsive vc_responsive no-offcanvas-animation header-has-no-title header-has-overlap posts-has-parallax bb_classic_notif tag-cloud-default"
      >
      
            <Layout>
              <div id="primary" className="default-width-page content-area">
                <div id="content" className="site-content" role="main">
                  <div className="home-grid-container grid-container content-page-wrapper">
                    <div className="grid-x grid-margin-x">
                      <div className="cell large-12">
                        <article
                          id="post-3488"
                          className="post-3488 page type-page status-publish hentry"
                        >
                          <div className="entry-content">
                            <Slider />
                            <Categories />
                            <Product />

                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="prefooter" />
              </div>
              {/* Components */}
              <SectionBanner />
              {/* Components */}
            </Layout>
         
      </div>
    </Fragment>
  );
}

export default Home;