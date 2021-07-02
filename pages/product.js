import React, { Fragment } from "react";
import Layout from "../components/layout";
import ProductDetail from "../components/product/ProductDetail";
import ProductBanner from "../components/product/ProductBanner";
import ProductInterview from "../components/product/ProductInterview";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addToCartFooter: "",
      cartFixed: "",
      showSizeTable: false,
      isVideo: false,
      videoCount: 0,
      isLoading: true,
      fixedCount: 0
    };

    this.selector = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  isVideoActive = () => {
    if (this.state.isVideo === true) {
      document.getElementById("myBody").classList.add("photoswipe-blur");
    }
  };

  handleScroll = () => {
    const windowWidth = window.innerWidth;

    if (!this.selector.current) {
      return 0;
    } else {
      if (windowWidth >= 760) {
        if (
          Math.ceil(window.scrollY) >
          Math.ceil(this.selector.current.getBoundingClientRect().top) + 100
        ) {
          this.setState({
            addToCartFooter: "bafk-has-cart-fixed",
            cartFixed: false,
            fixedCount: this.state.fixedCount + 1
          });

          document
            .getElementById("myBody")
            .classList.add("bafk-has-cart-fixed");

          this.isVideoActive();
        } else {
          const cartBtn = document.getElementById("footer-cart-position");

          if (window.scrollY > cartBtn.offsetTop + cartBtn.offsetHeight) {
            this.setState({
              addToCartFooter: "",
            });

            document
              .getElementById("myBody")
              .classList.remove("bafk-has-cart-fixed");

            this.isVideoActive();
          }
        }
      } else if (windowWidth <= 760) {
        if (
          Math.ceil(window.scrollY) >
          Math.ceil(this.selector.current.getBoundingClientRect().top) + 800
        ) {
          this.setState({
            addToCartFooter: "bafk-has-cart-fixed",
            cartFixed: false,
            fixedCount: this.state.fixedCount + 1

          });
          document
            .getElementById("myBody")
            .classList.add("bafk-has-cart-fixed");

          this.isVideoActive();
        } else {
          const cartBtn = document.getElementById("footer-cart-position");

          if (window.scrollY > cartBtn.offsetTop + cartBtn.offsetHeight) {
            this.setState({
              addToCartFooter: "",

            });
            document
              .getElementById("myBody")
              .classList.remove("bafk-has-cart-fixed");

            this.isVideoActive();
          }
        }
      }
    }
  };

  mobileAddToCartTop = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 760) {
      window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth",
      });

      this.setState({
        showSizeTable: true,
      });

      setTimeout(() => {
        const sizeWarning = document.getElementById("sizeWarning");
        sizeWarning.classList.remove("select-size-text-animate");
      }, 3000);
    }

    if(windowWidth > 760 && windowWidth <= 1025 ){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }

  };

  videoClose = () => {
    document.getElementById("videoOverlay").classList.remove("active");
    document.getElementById("videoContainer").classList.remove("active");

    const myBody = document.getElementById("myBody");
    myBody.classList.remove("photoswipe-blur");

    this.setState({
      isVideo: false,
    });
  };

  videOverylayHideEvent = (e) => {
    this.setState({
      videoCount: this.state.videoCount + 1,
    });

    const videoOverlay = document.getElementById("videoOverlay");
    if (e.target === videoOverlay) {
      if (this.state.isVideo == true && this.state.videoCount > 1) {
        this.videoClose();
      }
    }
  };

  componentDidMount() {
    const windowWidth = window.innerWidth;

    this.setState({
      isLoading: false
    })

    document.getElementById('myBody').classList.add('myOpacity')

    if (windowWidth <= 760) {
      this.setState({
        cartFixed: true,
      });
    }
    window.addEventListener("scroll", this.handleScroll, false);
    window.addEventListener("click", this.videOverylayHideEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }

  hasVideo = (data) => {
    if (data === true) {
      this.setState({
        isVideo: true,
      });
    }
  };

  render() {
    return (
      <>
        <div
          id="myBody"
          footer-data="1"
          className="overOpacityMain product-template-default single single-product postid-3986 wp-embed-responsive theme-bafk app_theme app_theme-page app_theme-no-js bafk-js-composer js-comp-ver-6.3.0 vc_responsive no-offcanvas-animation header-has-title header-has-overlap catalog-ajax-filter posts-has-parallax has-wishlist bb_classic_notif tag-cloud-default"
          style={{ scrollBehavior: "smooth" }}
        >
          <Layout>
            <div
              id="primary"
              style={{ marginBottom: "534px" }}
              className="footer-parent product-content-area"
            >
              <div id="content" className="site-content" role="main">
                <div className="product_layout product_layout_default ">

                  <div
                    id="product-3986"
                    className={this.state.isLoading === false && "myOpacity" +  " overOpacityMain product type-product post-3986 status-publish first instock product_cat-erkek-esofmanlari has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-variable"}
                  >
                    <ProductDetail
                      hasVideo={(e) => this.hasVideo(e)}
                      showSizeTable={this.state.showSizeTable}
                    />
                    <div className="marquee__container">
                      <div className="marquee__text marquee__text--left">
                        <span>
                          TÜM ÜRÜNLERDE KARGO BEDAVA
                        </span>
                        <span>
                          TÜM ÜRÜNLERDE KARGO BEDAVA
                        </span>
                        <span>
                          TÜM ÜRÜNLERDE KARGO BEDAVA
                        </span>
                        <span>
                          TÜM ÜRÜNLERDE KARGO BEDAVA
                        </span>
                      </div>
                    </div>
                    <div
                      ref={this.selector}
                      id="bannerContent"
                      style={{ position: "relative"}}
                    >
                      <ProductBanner />
                    </div>
                    <ProductInterview />
                  </div>
                </div>
              </div>
              <div className="prefooter" />
            </div>
          </Layout>
            <div id="addToCartFixed" className="bafk-add-to-cart-fixed">
              <div className="bafk-wrap-content-inner">
                <div className="bafk-wrap-content grid-container">
                  <div className="bafk-wrap-content-sections grid-x align-middle">
                    <div className="bafk-fixed-product-info cell shrink">
                      <div className="bafk-thumb-clone">
                        <img src="/images/product/cart-footer.jpg" />
                      </div>
                      <div className="bafk-title-clone">
                        <h3 className="bottom-cart-product-name">Basis Zip Through Hooide Grey</h3>
                        <span className="price">
                          <del>
                            <span className="amount">
                              <span className="app_theme-Price-amount amount">
                                <bdi>
                                  <span className="app_theme-Price-currencySymbol">
                                    ₺
                                  </span>
                                  109<sup>,90</sup>
                                </bdi>
                              </span>
                            </span>
                          </del>
                          <ins>
                            <span className="amount">
                              <span className="app_theme-Price-amount amount">
                                <bdi>
                                  <span className="app_theme-Price-currencySymbol">
                                    ₺
                                  </span>
                                  89<sup>,90</sup>
                                </bdi>
                              </span>
                            </span>
                          </ins>
                        </span>
                      </div>
                    </div>
                    <div
                      id="bafk-fixed-product-variations-wrap"
                      className="bafk-fixed-product-variations-wrap cell auto"
                    >
                      <div
                        id="bafk-fixed-product-variations"
                        className="bafk-fixed-product-variations"
                      >
                        <div className="bafk-attr-wrap-clone bafk-attr-wrap-1 tawcvs-swatches">
                          <span
                            className="bafk-attr-clone swatch-clone-1 bafk-attr-label-clone bafk-attribute_pa_beden"
                            data-target=".swatch-1"
                          >
                            XS<span className="swatch__tooltip">XS</span>
                          </span>
                          <span
                            className="bafk-attr-clone swatch-clone-2 bafk-attr-label-clone bafk-attribute_pa_beden"
                            data-target=".swatch-2"
                          >
                            S<span className="swatch__tooltip">S</span>
                          </span>
                          <span
                            className="bafk-attr-clone swatch-clone-3 bafk-attr-label-clone bafk-attribute_pa_beden"
                            data-target=".swatch-3"
                          >
                            M<span className="swatch__tooltip">M</span>
                          </span>
                          <span
                            className="bafk-attr-clone swatch-clone-4 bafk-attr-label-clone bafk-attribute_pa_beden"
                            data-target=".swatch-4"
                          >
                            L<span className="swatch__tooltip">L</span>
                          </span>
                          <span
                            className="bafk-attr-clone swatch-clone-5 bafk-attr-label-clone bafk-attribute_pa_beden"
                            data-target=".swatch-5"
                          >
                            XL<span className="swatch__tooltip">XL</span>
                          </span>
                          <span
                            className="bafk-attr-clone swatch-clone-6 bafk-attr-label-clone bafk-attribute_pa_beden"
                            data-target=".swatch-6"
                          >
                            XXL<span className="swatch__tooltip">XXL</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bafk-fixed-product-btn cell shrink">
                      <div className="bafk-single-btn-clone single_variation_wrap-clone bafk-clone-disable">
                        <div className="app_theme-variation-add-to-cart-clone">
                          <div className="addtocart-button-group">
                            <div className="quantity hidden">
                              <input
                                type="hidden"
                                className="qty"
                                name="quantity"
                                defaultValue={1}
                              />
                            </div>
                            <div className="button-group-inner">
                              <div className="addtocart-button-group-inner">
                                <button
                                  type="submit"
                                  className="single_add_to_cart_button button alt progress-btn disabled wc-variation-selection-needed"
                                >
                                  <div className="btn-text">Sepete Ekle</div>
                                  <div className="progress" />
                                  <div className="checked" />
                                </button>
                                <input
                                  type="hidden"
                                  name="add-to-cart"
                                  defaultValue={3986}
                                />
                                <input
                                  type="hidden"
                                  name="product_id"
                                  defaultValue={3986}
                                />
                                <input
                                  type="hidden"
                                  name="variation_id"
                                  className="variation_id"
                                  defaultValue={0}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            id="mobileAddToCartTop"
                            onClick={this.mobileAddToCartTop}
                            className="app_theme-variation-mob-btn-clone button"
                          >
                            <div className="btn-text">Sepete Ekle</div>
                            <div className="progress" />
                            <div className="checked" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div id="videoContainer" className="single_video_container">
            <div className="youtube-video">
              <iframe
                title="Superfresh Reklamı"
                src="https://player.vimeo.com/video/414210727?dnt=1&app_id=122963"
                width={1280}
                height={720}
                frameBorder={0}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />{" "}
              <div
                onClick={() => this.videoClose()}
                className="close-icon"
                data-close
                aria-label="Close modal"
              >
                <span className="close-icon_top" />
                <span className="close-icon_bottom" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
