import React, { Fragment } from "react";
import Link from "next/link";

class Product extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading: false
    }

    this.handleImageLoad = this.handleImageLoad.bind(this);
  }

  handleImageLoad = () => {
    this.setState({
      isLoading: true
    })
  }

  render(){
    const style = this.state.isLoading ? {} : {opacity: 1 , transition: 'all 0.8s ease-in-out'}
    return (
      <Fragment>
        <div
          style={{}}
          data-vc-full-width="true"
          data-vc-full-width-init="false"
          className="normal_height vc_row bafk_row vc_row-fluid"
        >
          <div className="bafk_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="bafk_wrapper">
                <h3
                  style={{ textAlign: "center" }}
                  className="vc_custom_heading vc_custom_1541512558503"
                >
                  Recent Products
                </h3>
                <div className="bafk_text_column bafk_content_element ">
                  <div className="bafk_wrapper">
                    <p style={{ textAlign: "center" }}>
                      <span style={{ color: "#666666" }}>
                        Recent posuere neque eu lectus ultrices
                      </span>
                    </p>
                  </div>
                </div>
                <div className="vc_empty_space" style={{ height: "20px" }}>
                  <span className="vc_empty_space_inner" />
                </div>
                <div className="app_theme columns-4 ">
                  <div className="grid-container">
                    <div className="grid-x grid-margin-x">
                      <div className="cell large-12">
                        <ul className="products columns-4 category-grid-layout-1 product-grid-layout-1 ">
                          
                          <li className="home-product-card product-card product type-product post-3986 status-publish last instock product_cat-erkek-esofmanlari has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-variable">
                            <div style={style} className="product-inner-wrapper">
                              <div className="product-labels labels-bordered">
                              </div>
                              <div className="product-inner">
                                <div className="product-image">
                                  <Link href="/product">
                                    <a
                                      className="loop-thumbnail product-thumbnail-single"
                                    >
                                      <img
                                        width={500}
                                        height={700}
                                        src="/images/product/1.webp"
                                        className
                                        alt=""
                                        loading="lazy"
                                        onLoad={this.handleImageLoad}
                                      />
                                    </a>
                                  </Link>
                                  <div className="footer-section">
                                    <div className="footer-section-inner">
                                      <Link href="/product">
                                      <a
                                        data-quantity={1}
                                        className="button product_type_variable add_to_cart_button bafk_addtocart_button"
                                        data-product_id={3986}
                                        data-product_sku
                                        aria-label="“Basis Zip Through Hooide Grey” için seçenekleri seçin"
                                        rel="nofollow"
                                      >
                                        <span className="tooltip">
                                          Seçenekler
                                        </span>
                                        Seçenekler
                                      </a>
                                      </Link>
                                      <Link href="/product">
                                      <a
                                        data-product-id={3986}
                                        data-product-type="variable"
                                        data-wishlist-url="favorilerim/index.html"
                                        data-browse-wishlist-text="Favorilerim"
                                        className="button bafk_product_wishlist_button add_to_wishlist"
                                        rel="nofollow"
                                      >
                                        <span className="tooltip">
                                          Favorilere Ekle{" "}
                                        </span>
                                      </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-details-wrapper">
                                  <div className="product-text-center product-details">
                                    <h3 className="product-title">
                                      <Link href="/product">
                                      <a className="text-limit">
                                        Basis Zip Through Hooide Grey
                                      </a>
                                      </Link>
                                    </h3>
                                    <span className="product-price-center price">
                                      <del>
                                        <span className="amount">
                                          <span className="app_theme-Price-amount amount">
                                           
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
                                              89
                                              <sup>,90</sup>
                                            </bdi>
                                          </span>
                                        </span>
                                      </ins>
                                    </span>
                                    <Link href="/product">
                                    <a
                                      data-quantity={1}
                                      className="button product_type_variable add_to_cart_button bafk_addtocart_button"
                                      data-product_id={3986}
                                      data-product_sku
                                      aria-label="“Basis Zip Through Hooide Grey” için seçenekleri seçin"
                                      rel="nofollow"
                                    >
                                      <span className="tooltip">Seçenekler</span>
                                      Seçenekler
                                    </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="home-product-card product-card product type-product post-3986 status-publish last instock product_cat-erkek-esofmanlari has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-variable">
                            <div style={style} className="product-inner-wrapper">
                              <div className="product-labels labels-bordered">
                              </div>
                              <div className="product-inner">
                                <div className="product-image">
                                  <Link href="/product">
                                    <a
                                      className="loop-thumbnail product-thumbnail-single"
                                    >
                                      <img
                                        width={500}
                                        height={700}
                                        src="/images/product/1.webp"
                                        className
                                        alt=""
                                        loading="lazy"
                                        onLoad={this.handleImageLoad}
  
                                      />
                                    </a>
                                  </Link>
                                  <div className="footer-section">
                                    <div className="footer-section-inner">
                                      <Link href="/product">
                                      <a
                                        data-quantity={1}
                                        className="button product_type_variable add_to_cart_button bafk_addtocart_button"
                                        data-product_id={3986}
                                        data-product_sku
                                        aria-label="“Basis Zip Through Hooide Grey” için seçenekleri seçin"
                                        rel="nofollow"
                                      >
                                        <span className="tooltip">
                                          Seçenekler
                                        </span>
                                        Seçenekler
                                      </a>
                                      </Link>
                                      <Link href="/product">
                                      <a
                                        data-product-id={3986}
                                        data-product-type="variable"
                                        data-wishlist-url="favorilerim/index.html"
                                        data-browse-wishlist-text="Favorilerim"
                                        className="button bafk_product_wishlist_button add_to_wishlist"
                                        rel="nofollow"
                                      >
                                        <span className="tooltip">
                                          Favorilere Ekle{" "}
                                        </span>
                                      </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-details-wrapper">
                                  <div className="product-text-center product-details">
                                    <h3 className="product-title">
                                      <Link href="/product">
                                      <a className="text-limit">
                                        Basis Zip Through Hooide Grey
                                      </a>
                                      </Link>
                                    </h3>
                                    <span className="product-price-center price">
                                      <del>
                                        <span className="amount">
                                          <span className="app_theme-Price-amount amount">
                                            <bdi>
                                              <span className="app_theme-Price-currencySymbol">
                                                ₺
                                              </span>
                                              109
                                              <sup>,90</sup>
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
                                              89
                                              <sup>,90</sup>
                                            </bdi>
                                          </span>
                                        </span>
                                      </ins>
                                    </span>
                                    <Link href="/product">
                                    <a
                                      data-quantity={1}
                                      className="button product_type_variable add_to_cart_button bafk_addtocart_button"
                                      data-product_id={3986}
                                      data-product_sku
                                      aria-label="“Basis Zip Through Hooide Grey” için seçenekleri seçin"
                                      rel="nofollow"
                                    >
                                      <span className="tooltip">Seçenekler</span>
                                      Seçenekler
                                    </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="home-product-card product-card product type-product post-3986 status-publish last instock product_cat-erkek-esofmanlari has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-variable">
                            <div style={style} className="product-inner-wrapper">
                              <div className="product-labels labels-bordered">
                              </div>
                              <div className="product-inner">
                                <div className="product-image">
                                  <Link href="/product">
                                    <a
                                      className="loop-thumbnail product-thumbnail-single"
                                    >
                                      <img
                                        width={500}
                                        height={700}
                                        src="/images/product/1.webp"
                                        className
                                        alt=""
                                        loading="lazy"
                                        onLoad={this.handleImageLoad}
  
                                      />
                                    </a>
                                  </Link>
                                  <div className="footer-section">
                                    <div className="footer-section-inner">
                                    <Link href="/product">
                                      <a
                                        data-quantity={1}
                                        className="button product_type_variable add_to_cart_button bafk_addtocart_button"
                                        data-product_id={3986}
                                        data-product_sku
                                        aria-label="“Basis Zip Through Hooide Grey” için seçenekleri seçin"
                                        rel="nofollow"
                                      >
                                        <span className="tooltip">
                                          Seçenekler
                                        </span>
                                        Seçenekler
                                      </a>
                                      </Link>
                                      <Link href="/product">
                                      <a
                                        data-product-id={3986}
                                        data-product-type="variable"
                                        data-browse-wishlist-text="Favorilerim"
                                        className="button bafk_product_wishlist_button add_to_wishlist"
                                        rel="nofollow"
                                      >
                                        <span className="tooltip">
                                          Favorilere Ekle{" "}
                                        </span>
                                      </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-details-wrapper">
                                  <div className="product-text-center product-details">
                                    <h3 className="product-title">
                                      <Link href="/product">
                                      <a className="text-limit">
                                        Basis Zip Through Hooide Grey
                                      </a>
                                      </Link>
                                    </h3>
                                    <span className="product-price-center price">
                                      <del>
                                        <span className="amount">
                                          <span className="app_theme-Price-amount amount">
                                            <bdi>
                                              <span className="app_theme-Price-currencySymbol">
                                                ₺
                                              </span>
                                              109
                                              <sup>,90</sup>
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
                                              89
                                              <sup>,90</sup>
                                            </bdi>
                                          </span>
                                        </span>
                                      </ins>
                                    </span>
                                    <Link href="/product">
                                    <a
                                      data-quantity={1}
                                      className="button product_type_variable add_to_cart_button bafk_addtocart_button"
                                      data-product_id={3986}
                                      data-product_sku
                                      aria-label="“Basis Zip Through Hooide Grey” için seçenekleri seçin"
                                      rel="nofollow"
                                    >
                                      <span className="tooltip">Seçenekler</span>
                                      Seçenekler
                                    </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="home-product-card product-card product type-product post-3986 status-publish last instock product_cat-erkek-esofmanlari has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-variable">
                            <div style={style} className="product-inner-wrapper">
                              <div className="product-labels labels-bordered">
                              </div>
                              <div className="product-inner">
                                <div className="product-image">
                                  <Link href="/product">
                                    <a
                                      className="loop-thumbnail product-thumbnail-single"
                                    >
                                      <img
                                        width={500}
                                        height={700}
                                        src="/images/product/1.webp"
                                        className
                                        alt=""
                                        loading="lazy"
                                        onLoad={this.handleImageLoad}
  
                                      />
                                    </a>
                                  </Link>
                                  <div className="footer-section">
                                    <div className="footer-section-inner">
                                      <Link href="/product">
                                      <a
                                        data-quantity={1}
                                        className="button product_type_variable add_to_cart_button bafk_addtocart_button"
                                        data-product_id={3986}
                                        data-product_sku
                                        aria-label="“Basis Zip Through Hooide Grey” için seçenekleri seçin"
                                        rel="nofollow"
                                      >
                                        <span className="tooltip">
                                          Seçenekler
                                        </span>
                                        Seçenekler
                                      </a>
                                      </Link>
                                      <Link href="/product">
                                      <a
                                        data-product-id={3986}
                                        data-product-type="variable"
                                        data-browse-wishlist-text="Favorilerim"
                                        className="button bafk_product_wishlist_button add_to_wishlist"
                                        rel="nofollow"
                                      >
                                        <span className="tooltip">
                                          Favorilere Ekle{" "}
                                        </span>
                                      </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-details-wrapper">
                                  <div className="product-text-center product-details">
                                    <h3 className="product-title">
                                      <Link href="/product">
                                      <a className="text-limit">
                                        Basis Zip Through Hooide Grey
                                      </a>
                                      </Link>
                                    </h3>
                                    <span className="product-price-center price">
                                      <del>
                                        <span className="amount">
                                          <span className="app_theme-Price-amount amount">
                                            <bdi>
                                              <span className="app_theme-Price-currencySymbol">
                                                ₺
                                              </span>
                                              109
                                              <sup>,90</sup>
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
                                              89
                                              <sup>,90</sup>
                                            </bdi>
                                          </span>
                                        </span>
                                      </ins>
                                    </span>
                                    <Link href="/product">
                                    <a
                                      data-quantity={1}
                                      className="button product_type_variable add_to_cart_button bafk_addtocart_button"
                                      data-product_id={3986}
                                      data-product_sku
                                      aria-label="“Basis Zip Through Hooide Grey” için seçenekleri seçin"
                                      rel="nofollow"
                                    >
                                      <span className="tooltip">Seçenekler</span>
                                      Seçenekler
                                    </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
  
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vc_empty_space" style={{ height: "40px" }}>
                  <span className="vc_empty_space_inner" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vc_row-full-width vc_clearfix" />
      </Fragment>
    );
  }
}

export default Product;
