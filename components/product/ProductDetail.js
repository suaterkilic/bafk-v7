import React, { Fragment } from "react";
import Slider from "react-slick";
import { SideBySideMagnifier, TOUCH_ACTIVATION  } from "react-image-magnifiers";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVideo: false,
      isShowSizeTable: false,
      sizeCount: 0,
      nav1: null,
      nav2: null,
    };
  }

  hideFlash = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 760) {
      const sizeWarning = document.getElementById("sizeWarning");
      sizeWarning.classList.add("sizeOpacity");
      sizeWarning.classList.remove("select-size-text-animate");
    }
  };

  handleVideo = () => {
    const myBody = document.getElementById("myBody");
    myBody.classList.add("photoswipe-blur");

    document.getElementById("videoOverlay").classList.add("active");
    document.getElementById("videoContainer").classList.add("active");

    this.props.hasVideo(true);

    this.setState({
      isVideo: true,
    });
  };

  sizeGuide = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.add("zf-has-scroll", "is-reveal-open");

    document.getElementById("myBody").classList.add("photoswipe-blur");

    const sizeGuideOverlay = document.getElementById("sizeGuideOverlay");

    sizeGuideOverlay.style.display = "block";

    this.setState({
      isShowSizeTable: true,
    });
  };

  closeSizeTable = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.remove("zf-has-scroll", "is-reveal-open");

    let myRevealBefore = Array.from(
      document.getElementsByClassName("myReveal")
    );
    myRevealBefore.map((el) => el.classList.add("animated", "fadeOut"));

    setTimeout(() => {
      const sizeGuideOverlay = document.getElementById("sizeGuideOverlay");
      sizeGuideOverlay.style.display = "none";

      let myRevealAfter = Array.from(
        document.getElementsByClassName("myReveal")
      );
      myRevealAfter.map((el) => el.classList.remove("animated", "fadeOut"));
    }, 700);

    document.getElementById("myBody").classList.remove("photoswipe-blur");
  };

  sizeTableHideEvent = (event) => {
    this.setState({
      sizeCount: this.state.sizeCount + 1,
    });
    const myReveal = document.getElementById("sizeGuideOverlay");
    const isShowTable = this.state.isShowSizeTable;

    if (event.target === myReveal) {
      if (isShowTable == true && this.state.sizeCount > 1) {
        this.closeSizeTable();
      }
    }
  };

  componentDidMount = () => {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
    window.addEventListener("click", this.sizeTableHideEvent);
    window.addEventListener("touchmove", this.preventDefault, {
      passive: false,
    });

    const myImg = document.querySelector('.myImg')
    myImg.querySelector('div').classList.add('overflowHidden');
    myImg.querySelector('img').classList.add('imgZoomOut')

  };

  componentWillUnmount = () => {
    window.removeEventListener("touchmove", this.preventDefault, {
      passive: false,
    });
  };
  render() {
    const slickSettingsVerticalNav = {
      arrows: false,
      vertical: true,
      slidesToShow: 4,
      swipeToSlide: true,
      focusOnSelect: true,
      verticalSwiping: true,
      asNavFor: this.state.nav2,
      ref: (slider) => (this.slider1 = slider),
    };

    const slickSettingsVerticalMain = {
      arrows: false,
      speed: 200,
      slidesToShow: 1,
      asNavFor: this.state.nav1,
      ref: (slider) => (this.slider2 = slider),
    };

    let productSummary;
    let productExplain;

    if (this.props.showSizeTable === true) {
      productSummary = "productSummary";
      productExplain = "productExplain";
    }
    return (
      <Fragment>
        <div className="grid-x product-cells align-center">
          {/* begin cell */}
          <div className="cell large-12 xlarge-10 xxlarge-9">
            <div className="app_theme-notices-wrapper" />
            {/* begin grid-x */}
            <div className="product-mobile-grid-x grid-x">
              {/* begin product-images-cell */}
              <div className="product-cover-image product-images-cell cell small-12 medium-5 large-6  thumbs-right">
                <div className="product-images-wrapper">
                  <div
                    className="app_theme-product-gallery app_theme-product-gallery--with-images app_theme-product-gallery--columns-4 images bafk-images"
                    data-columns={4}
                  >
                    {/* begin product-images-inner */}
                    <div className="product-images-inner">
                      <div className="product_tool_buttons_placeholder">
                        <div
                          onClick={() => this.handleVideo()}
                          className="single_product_video_trigger"
                          style={{ marginTop: "-18px" }}
                        >
                          <span className="tooltip">Play Video</span>
                        </div>
                      </div>
                      {/* begin product-image-wrapper */}
                      <div
                        className="product-image-wrapper"
                        style={{ marginTop: "-5px" }}
                      >
                        <figure
                          id="product-images"
                          className="app_theme-product-gallery__wrapper"
                          style={{
                            opacity: 1,
                            visibility: "inherit",
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <Slider {...slickSettingsVerticalMain}>
                            <div
                              id="mymy"
                              style={{ paddingTop: "13px" }}
                              className="overflowHidden app_theme-product-gallery__image product-gallery-cell"
                            >
                              <SideBySideMagnifier
                                alwaysInPlace={true}
                                imageSrc="/images/product/slider/1.jpg"
                                imageAlt="Example"
                                touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}
                                largeImageSrc="/images/product/slider/1.jpg"
                                className="overflowHidden myImg"
                              />
                            </div>
                            <div
                              style={{ paddingTop: "13px" }}
                              className="app_theme-product-gallery__image product-gallery-cell"
                            >
                              <SideBySideMagnifier
                                alwaysInPlace={true}
                                imageSrc="/images/product/slider/2.jpg"
                                imageAlt="Example"
                                touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}

                                largeImageSrc="/images/product/slider/2.jpg"
                              />
                            </div>
                            <div
                              style={{ paddingTop: "13px" }}
                              className="app_theme-product-gallery__image product-gallery-cell"
                            >
                              <SideBySideMagnifier
                                alwaysInPlace={true}
                                imageSrc="/images/product/slider/3.jpg"
                                imageAlt="Example"
                                touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}
                                largeImageSrc="/images/product/slider/3.jpg"
                              />
                            </div>
                            <div
                              style={{ paddingTop: "13px" }}
                              className="app_theme-product-gallery__image product-gallery-cell"
                            >
                              <SideBySideMagnifier
                                alwaysInPlace={true}
                                imageSrc="/images/product/slider/4.jpg"
                                imageAlt="Example"
                                touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}
                                largeImageSrc="/images/product/slider/4.jpg"
                              />
                            </div>
                          </Slider>
                          <button
                            className="pr-prev flickity-button flickity-prev-next-button previous"
                            type="button"
                            aria-label="Previous"
                          >
                            <svg
                              className="flickity-button-icon"
                              viewBox="0 0 100 100"
                            >
                              <path
                                d="M 10,50 L 60,100 L 60,90 L 20,50  L 60,10 L 60,0 Z"
                                className="arrow"
                              />
                            </svg>
                          </button>
                          <button
                            className="pr-next flickity-button flickity-prev-next-button next"
                            type="button"
                            aria-label="Next"
                          >
                            <svg
                              className="flickity-button-icon"
                              viewBox="0 0 100 100"
                            >
                              <path
                                d="M 10,50 L 60,100 L 60,90 L 20,50  L 60,10 L 60,0 Z"
                                className="arrow"
                                transform="translate(100, 100) rotate(180) "
                              />
                            </svg>
                          </button>
                        </figure>
                      </div>
                      {/* end product-image-wrapper */}
                    </div>
                    <div className="product-vr-thumbnails-wrapper">
                      {/* begin product-thumbnails */}
                      <div
                        className="product-vr-thumbnails-container shadow"
                        data-thumb={4}
                        style={{ opacity: 1, marginTop: "-6px" }}
                      >
                        {/* begin product-thumbnails */}
                        <div
                          className="product-vr-thumbnails"
                          style={{
                            opacity: 1,
                            visibility: "inherit",
                          }}
                        >
                          <Slider {...slickSettingsVerticalNav}>
                            <div className="app_theme-product-thumb__image">
                              <img
                                alt=""
                                className="bafk-img"
                                title="gym-king-basis-tracksuit-grey-marl__48_2_2048x2048"
                                src="/images/product/s1.jpg"
                              />
                            </div>
                            <div className="app_theme-product-thumb__image">
                              <img
                                alt=""
                                className="bafk-img"
                                title="gym-king-basis-tracksuit-grey-marl__47_2_2048x2048"
                                src="/images/product/s2.jpg"
                              />
                            </div>
                            <div className="app_theme-product-thumb__image">
                              <img
                                alt=""
                                className="bafk-img"
                                title="gym-king-basis-tracksuit-grey-marl__43_2_2048x2048"
                                src="/images/product/s3.jpg"
                              />
                            </div>
                            <div className="app_theme-product-thumb__image">
                              <img
                                alt=""
                                className="bafk-img"
                                title="gym-king-basis-tracksuit-grey-marl__45_2"
                                src="/images/product/s4.jpg"
                              />
                            </div>
                          </Slider>
                        </div>
                        {/* end product-thumbnails */}
                      </div>
                      {/* end product-thumbnails-container */}
                    </div>

                    {/* end product-vr-thumbnails-wrapper */}
                    {/* begin product-thumbnails-wrapper */}
                    <div className="product-thumbnails-wrapper">
                      {/* begin product-thumbnails */}
                      <div
                        className="product-thumbnails-container"
                        data-thumb={4}
                        data-parallax='{"y" : 30, "smoothness": 20}'
                      >
                        {/* begin product-thumbnails */}
                        <div className="product-thumbnails"></div>
                        {/* end product-thumbnails */}
                      </div>
                      {/* end product-thumbnails-container */}
                    </div>
                    {/* end product-thumbnails-wrapper */}
                  </div>
                </div>
              </div>
              {/* end product-images-cell */}
              {/* begin product-info-cell */}
              <div className="product-info-mobile product-info-cell cell small-12 medium-7 large-6">
                {/* <div class="product-info-wrapper" data-parallax='{"y" : -100, "smoothness": 10}'> */}
                <div className="product-info-wrapper">
                  {/* begin product_summary_top */}
                  <div className="product_summary_top">
                    {/* begin title-wrapper */}
                    <div className="product-text-center title-wrapper">
                      <div className="breadcrumbs-wrapper">
                        <div className="breadcrumbs" itemProp="breadcrumb">
                          <span>
                            <a href="index.html">Home</a>
                          </span>
                          <span className="delimiter">/</span>
                          <span>
                            <a href="urun-kategori/erkek-esofmanlari/index.html">
                              Erkek Eşofmanlari
                            </a>
                          </span>
                          <span className="delimiter">/</span>
                          <span>Basis Zip Through Hooide Grey</span>
                        </div>
                      </div>
                      {/* begin page-title-wrapper */}
                      <div className="page-title-wrapper">
                        <h1 className="product_title entry-title">
                          Basis Zip Through Hooide Grey
                        </h1>
                      </div>
                      {/* end page-title-wrapper */}
                    </div>
                    {/* end title-wrapper */}
                  </div>
                  {/* end product_summary_top */}
                  {/* begin product_summary_middle */}
                  <div className="product_summary_middle">
                    <p className="price">
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
                      </del>{" "}
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
                    </p>
                    <div className="app_theme-product-details__short-description">
                      <p className={productExplain}>
                        6 yaşımda aşçı olmak istedim. 7 yaşımda Napolyon olmak
                        istedim. Hırsım o gün bugündür düzenli bir şekilde
                        artmayı sürdürüyor.
                      </p>
                      {this.props.showSizeTable == true && (
                        <span
                          id="sizeWarning"
                          className="select-size-span select-size-text-animate"
                        >
                          Beden Seç
                        </span>
                      )}
                    </div>
                  </div>
                  {/* end product_summary_middle */}
                  {/* begin product_summary_middle */}
                  <div className={productSummary + " product_summary_bottom"}>
                    <form
                      className="variations_form cart"
                      action="https://bafk.com.tr/product/basis-zip-through-hooide-grey/"
                      method="post"
                      encType="multipart/form-data"
                      data-product_id={3986}
                    >
                      <table className="variations" cellSpacing={0}>
                        <tbody>
                          <tr>
                            <td className="label">
                              <label htmlFor="pa_beden">Beden</label>
                            </td>
                            <td className="value">
                              <div className="variation-selector variation-select-label hidden">
                                <select
                                  id="pa_beden"
                                  className
                                  name="attribute_pa_beden"
                                  data-attribute_name="attribute_pa_beden"
                                  data-show_option_none="yes"
                                >
                                  <option value>Bir seçim yapın</option>
                                  <option value="xs">XS</option>
                                  <option value="s">S</option>
                                  <option value="m">M</option>
                                  <option value="l">L</option>
                                  <option value="xl">XL</option>
                                  <option value="xxl">XXL</option>
                                </select>
                              </div>
                              <div
                                className="product-size-section tawcvs-swatches"
                                data-attribute_name="attribute_pa_beden"
                              >
                                <span
                                  onClick={() => this.hideFlash()}
                                  className="swatch swatch-label swatch-xs "
                                  data-value="xs"
                                >
                                  XS<span className="swatch__tooltip">XS</span>
                                </span>
                                <span
                                  onClick={() => this.hideFlash()}
                                  className="swatch swatch-label swatch-s "
                                  data-value="s"
                                >
                                  S<span className="swatch__tooltip">S</span>
                                </span>
                                <span
                                  onClick={() => this.hideFlash()}
                                  className="swatch swatch-label swatch-m "
                                  data-value="m"
                                >
                                  M<span className="swatch__tooltip">M</span>
                                </span>
                                <span
                                  onClick={() => this.hideFlash()}
                                  className="swatch swatch-label swatch-l "
                                  data-value="l"
                                >
                                  L<span className="swatch__tooltip">L</span>
                                </span>
                                <span
                                  onClick={() => this.hideFlash()}
                                  className="swatch swatch-label swatch-xl "
                                  data-value="xl"
                                >
                                  XL<span className="swatch__tooltip">XL</span>
                                </span>
                                <span
                                  onClick={() => this.hideFlash()}
                                  className="swatch swatch-label swatch-xxl "
                                  data-value="xxl"
                                >
                                  XXL
                                  <span className="swatch__tooltip">XXL</span>
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="single_variation_wrap">
                        <div className="app_theme-variation single_variation" />
                        <div className="app_theme-variation-add-to-cart variations_button">
                          <div className="addtocart-button-group">
                            <div className="quantity hidden">
                              <input
                                type="hidden"
                                id="quantity_6021129dc13c5"
                                className="qty"
                                name="quantity"
                                defaultValue={1}
                              />
                            </div>
                            <div className="button-group-inner">
                              <div className="addtocart-button-group-inner ">
                                <button
                                  type="submit"
                                  className="product-insert-to-cart single_add_to_cart_button button alt progress-btn"
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
                        </div>
                      </div>
                    </form>
                    <div
                      id="footer-cart-position"
                      className="product_summary_bottom_inner"
                    >
                      <div
                        className="yith-wcwl-add-to-wishlist add-to-wishlist-3986  wishlist-fragment on-first-load"
                        data-fragment-ref={3986}
                        data-fragment-options='{"base_url":"","in_default_wishlist":false,"is_single":true,"show_exists":false,"product_id":3986,"parent_product_id":3986,"product_type":"variable","show_view":true,"browse_wishlist_text":"Favorilerim","already_in_wishslist_text":"\u00dcr\u00fcn Zaten Favorilerinizde.","product_added_text":"Favorilere Eklendi","heading_icon":"fa-heart-o","available_multi_wishlist":false,"disable_wishlist":false,"show_count":false,"ajax_loading":false,"loop_position":"after_add_to_cart","item":"add_to_wishlist"}'
                      >
                        {/* ADD TO WISHLIST */}
                        <div className="yith-wcwl-add-button">
                          <a
                            href="index6417.html?add_to_wishlist=3986"
                            rel="nofollow"
                            data-product-id={3986}
                            data-product-type="variable"
                            data-original-product-id={3986}
                            className="add_to_wishlist single_add_to_wishlist"
                            data-title="Favorilere Ekle"
                          >
                            <i className="yith-wcwl-icon fa fa-heart-o" />{" "}
                            <span className="product-fav">Favorilere Ekle</span>
                          </a>
                        </div>

                        {/* COUNT TEXT */}
                      </div>

                      <div
                        onClick={() => this.sizeGuide()}
                        className="sizeguide-link"
                      >
                        <a
                          data-open="sizeGuideModal"
                          className="sizeTextIcon product-size-guide bafk-open-popup bafk-sizeguide-btn"
                        >
                          Beden Tablosu
                        </a>
                        <a
                          style={{ display:'none' }}
                          data-open="sizeGuideModal"
                          className="sizeOnlyIcon product-size-guide bafk-open-popup bafk-sizeguide-btn"
                        >
                        </a>
                      </div>
                      <div className="sizeguide-link">
                        <a
                          data-open="sizeGuideModal"
                          className="commentTextIcon product-size-guide bafk-open-popup bafk-sizeguide-btn"
                        >
                          Yorumlar
                        </a>
                        <a
                          style={{ display:'none' }}
                          data-open="sizeGuideModal"
                          className="commentOnlyIcon product-size-guide bafk-open-popup bafk-sizeguide-btn"
                        >
                        </a>
                      </div>
                      <div
                        className="reveal"
                        id="sizeGuideModal"
                        data-reveal
                        data-close-on-click="true"
                        data-animation-in="fade-in"
                        data-animation-out="fade-out"
                      >
                        <div className="nano">
                          <div className="nano-content">
                            <h3 className="bafk-sizeguide-title">
                              Tişört Beden Tablosu
                            </h3>
                            <div className="bafk-sizeguide-content">
                              <img
                                className="aligncenter wp-image-3882 size-full"
                                src="wp-content/uploads/2020/09/beden.png"
                                alt=""
                                width={998}
                                height={678}
                              />
                            </div>
                            <div className="table-scroll">
                              <table className="bafk-sizeguide-table">
                                <tbody>
                                  <tr>
                                    <td>Size</td>
                                    <td>UK</td>
                                    <td>US</td>
                                    <td>EU</td>
                                    <td>Japan</td>
                                  </tr>
                                  <tr>
                                    <td>XS</td>
                                    <td>6 - 8</td>
                                    <td>4</td>
                                    <td>34</td>
                                    <td>7</td>
                                  </tr>
                                  <tr>
                                    <td>S</td>
                                    <td>8 -10</td>
                                    <td>6</td>
                                    <td>36</td>
                                    <td>9</td>
                                  </tr>
                                  <tr>
                                    <td>M</td>
                                    <td>10 - 12</td>
                                    <td>8</td>
                                    <td>38</td>
                                    <td>11</td>
                                  </tr>
                                  <tr>
                                    <td>L</td>
                                    <td>12 - 14</td>
                                    <td>10</td>
                                    <td>40</td>
                                    <td>13</td>
                                  </tr>
                                  <tr>
                                    <td>XL</td>
                                    <td>14 - 16</td>
                                    <td>12</td>
                                    <td>42</td>
                                    <td>15</td>
                                  </tr>
                                  <tr>
                                    <td>XXL</td>
                                    <td>16 - 28</td>
                                    <td>14</td>
                                    <td>44</td>
                                    <td>17</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div
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
                    </div>
                  </div>
                  {/* end product_summary_middle */}
                </div>
              </div>
              {/* end product-info-cell */}
            </div>
            {/* end grid-x */}
          </div>
          {/* end cell */}
        </div>
        <div id="videoOverlay" className="single_video_overlay"></div>
      </Fragment>
    );
  }
}

export default ProductDetail;
