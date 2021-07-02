import React, { Fragment } from "react";
import Link from "next/link";

class Items extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    }
  }


  componentDidMount = () => {
    this.setState({
      isLoading: true
    })

  }
  
  
  render(){
    const style = this.state.isLoading ? {} : {opacity: 1 , transition: 'all 0.8s ease-in-out'}
    return (
      <Fragment>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-12">
              <ul style={style} className="category-ul products columns-3 category-grid-layout-1 product-grid-layout-1 ">
                <li className="product type-product displayVisible post-3986 status-publish first instock product_cat-erkek-esofmanlari has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-variable">
                  <div className="product-inner-wrapper">
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
                              src="/images/category/items/1.webp"
                              className
                              alt=""
                              loading="lazy"
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
                                <span className="tooltip">Seçenekler</span>
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
                                <span className="tooltip">Favorilere Ekle </span>
                              </a>
                          </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-details-wrapper">
                        <div className="product-details">
                          <h3 className="product-title product-text-center">
                            <Link href="/product">
                              <a className="text-limit">
                                Test
                              </a>
                            </Link>
                          </h3>
                          <span className="product-text-center price">
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
                <li className="product type-product displayVisible post-3967 status-publish instock product_cat-erkek-esofmanlari has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-variable">
                  <div className="product-inner-wrapper">
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
                            src="/images/category/items/2.webp"
                            className
                            alt=""
                            loading="lazy"
                          />
                        </a>
                        </Link>
                        <div className="footer-section">
                          <div className="footer-section-inner">
                          <Link href="/product">
                            <a
                              data-quantity={1}
                              className="button product_type_variable add_to_cart_button bafk_addtocart_button"
                              data-product_id={3967}
                              data-product_sku
                              aria-label="“Basis Zip Througr Hoodie Black” için seçenekleri seçin"
                              rel="nofollow"
                            >
                              <span className="tooltip">Seçenekler</span>
                              Seçenekler
                            </a>
                          </Link>
                          <Link href="/product">
                            <a
                              data-product-id={3967}
                              data-product-type="variable"
                              data-browse-wishlist-text="Favorilerim"
                              className="button bafk_product_wishlist_button add_to_wishlist"
                              rel="nofollow"
                            >
                              <span className="tooltip">Favorilere Ekle </span>
                            </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-details-wrapper">
                        <div className="product-details">
                          <h3 className="product-title product-text-center">
                            <Link href="/product">
                              <a className="text-limit">
                                Test
                              </a>
                            </Link>
                          </h3>
                          <span className="price product-text-center">
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
                                    39<sup>,90</sup>
                                  </bdi>
                                </span>
                              </span>
                            </ins>
                          </span>
                          <Link href="/product">
                            <a
                              data-quantity={1}
                              className="button product_type_variable add_to_cart_button bafk_addtocart_button"
                              data-product_id={3967}
                              data-product_sku
                              aria-label="“Basis Zip Througr Hoodie Black” için seçenekleri seçin"
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
                <li className="product type-product displayVisible post-3948 status-publish last instock product_cat-erkek-esofmanlari has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-variable">
                  <div className="product-inner-wrapper">
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
                            src="/images/category/items/3.webp"
                            className
                            alt=""
                            loading="lazy"
                          />
                        </a>
                      </Link>
                        <div className="footer-section">
                          <div className="footer-section-inner">
                            <Link href="/product">
                            <a
                              data-quantity={1}
                              className="button product_type_variable add_to_cart_button bafk_addtocart_button"
                              data-product_id={3948}
                              data-product_sku
                              aria-label="“Contrast Core Plus Poly Tracksuit Top” için seçenekleri seçin"
                              rel="nofollow"
                            >
                              <span className="tooltip">Seçenekler</span>
                              Seçenekler
                            </a>
                            </Link>
                            <Link href="/product">
                            <a
                              data-product-id={3948}
                              data-product-type="variable"
                              data-browse-wishlist-text="Favorilerim"
                              className="button bafk_product_wishlist_button add_to_wishlist"
                              rel="nofollow"
                            >
                              <span className="tooltip">Favorilere Ekle </span>
                            </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-details-wrapper">
                        <div className="product-details">
                          <h3 className="product-text-center product-title">
                            <Link href="/product">
                            <a className="text-limit">
                            Test
                            </a>
                            </Link>
                          </h3>
                          <span className="product-text-center price">
                            <del>
                              <span className="amount">
                                <span className="app_theme-Price-amount amount">
                                  <bdi>
                                    <span className="app_theme-Price-currencySymbol">
                                      ₺
                                    </span>
                                    119<sup>,90</sup>
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
                                    99<sup>,90</sup>
                                  </bdi>
                                </span>
                              </span>
                            </ins>
                          </span>
                          <Link href="/product">
                            <a
                              data-quantity={1}
                              className="button product_type_variable add_to_cart_button bafk_addtocart_button"
                              data-product_id={3948}
                              data-product_sku
                              aria-label="“Contrast Core Plus Poly Tracksuit Top” için seçenekleri seçin"
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
      </Fragment>
    );
  }
}


export default Items;
