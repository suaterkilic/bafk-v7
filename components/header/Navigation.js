import React, { Fragment } from "react";
import Link from "next/link";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    const el = document.getElementById("myBody");
    el.classList.add("offcanvas_open", "offcanvas_left", "lock-scroll");

    const test = document.getElementById("testEl");
    test.classList.remove("hide_toggle_menu");

    const myMenu = document.getElementById("myMenu");

    if (myMenu.classList.contains("leftMenu")) {
      myMenu.classList.remove("leftMenu");
    }

    myMenu.classList.add("noneLeft");
    myMenu.style.visibility = "visible";

    const myOverlay = document.getElementById("myOverlay");
    if (myOverlay.classList.contains("overlayHide")) {
      myOverlay.classList.remove("overlayHide");
    }
    myOverlay.classList.add("toggle_menu_overlay");
  };

  mouseOver = (e) => {
    const hoverHeader = document.getElementById("hoverHeader");
    hoverHeader.setAttribute("data-sticky", "visible");
    const mainHeader = document.getElementById("mainHeader");
    mainHeader.setAttribute("data-sticky", "visible");

    e.currentTarget.className += " is-active";

    e.currentTarget.querySelector("ul").classList.add("js-dropdown-active");

    const myOverlay = document.getElementById("myOverlay");
    myOverlay.classList.add("toggle_menu_overlay");
  };

  mouseOut = (e) => {
    const hoverHeader = document.getElementById("hoverHeader");
    hoverHeader.removeAttribute("data-sticky");

    e.currentTarget.querySelector("li").classList.remove("is-active");
    e.currentTarget.querySelector("ul").classList.remove("js-dropdown-active");

    const myOverlay = document.getElementById("myOverlay");
    myOverlay.classList.remove("toggle_menu_overlay", "opacityImportant");
  };

  render() {
    return (
      <Fragment>
        <div className="left-nav bafk-navigation cell auto">
          <nav className="navigation-foundation">
            <ul
              id="menu-primary-menu"
              className="dropdown menu"
              data-dropdown-menu
              data-hover-delay={150}
              data-closing-time={0}
              role="menubar"
              data-n="9ijprz-n"
            >
                <li
                id="menu-item-3609"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3488 current_page_item menu-item-3609 active"
              >
                  <Link href="/">
                <a>
                  <span>Ana Sayfa</span>
                </a>
                </Link>
              </li>
              <li
                id="menu-item-3609"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3488 current_page_item menu-item-3609 active"
              >
                  <Link href="/about">
                <a>
                  <span>Biz Kimiz</span>
                </a>
                </Link>
              </li>
              <li
                onMouseOver={(e) => this.mouseOver(e)}
                onMouseOut={(e) => this.mouseOut(e)}
                id="menu-item-2135"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2135 dropdown is-dropdown-submenu-parent is-mega-menu opens-right with-offsets"
                role="menuitem"
                aria-haspopup="true"
                aria-label="The Shop"
                data-is-click="false"
              >
                <Link href="/category">
                  <a className="dropdown-toggle">
                    <span>Erkek</span>
                  </a>
                </Link>
                <ul
                  className="dropdown-submenu menu submenu is-dropdown-submenu first-sub vertical"
                  data-submenu
                  role="menubar"
                  style={{}}
                >
                  <li
                    role="menuitem"
                    className="is-submenu-item is-dropdown-submenu-item"
                  >
                    <div
                      style={{
                        backgroundImage:
                          "url(/images/header/menu/menu-bg.jpg)",
                        backgroundPosition: "right top",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "scroll",
                        backgroundColor: "#ffffff",
                        width: "1000px",
                        height: "auto"
                      }}
                      className="mega-menu-content"
                    >
                      <div className="grid-x">
                        <div id="menu-item-29" className="cell medium-3">
                          <div className="menu-item-mega">
                            <Link href="/category">
                              <a className="dropdown-toggle">Üst Giyim</a>
                            </Link>
                            <div className="mega-menu-submenu">
                              <ul className="sub-menu check">
                                <li
                                  id="menu-item-3280"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3280"
                                  role="menuitem"
                                >
                                  <Link href="/category">
                                    <a>
                                      <span>Mont</span>
                                    </a>
                                  </Link>
                                </li>
                                <li
                                  id="menu-item-30"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-30"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/shop/?shop_sidebar=0&products_per_row=4">
                                    <span>No Sidebar</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-31"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-31"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/shop/?products_per_row=4&products_layout=product-grid-layout-1">
                                    <span>Classic Product Style</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3394"
                                  className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3394"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/product-category/livingroom/">
                                    <span>Category with background</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3287"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3287"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/shop/?products_per_row=3">
                                    <span>Shop – 3 Columns</span>
                                    <span className="items-badge">
                                      <span className="trending-badge">
                                        Trending
                                      </span>
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-176"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-176"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/shop/?products_per_row=4">
                                    <span>Shop – 4 Columns</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3295"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3295"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/shop/?header_layout=offcanvas">
                                    <span>Offcanvas header menu</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div id="menu-item-32" className="cell medium-3">
                          <div className="menu-item-mega">
                            <a href="#" className="dropdown-toggle">
                              Product Layout
                            </a>
                            <div className="mega-menu-submenu">
                              <ul className="sub-menu check">
                                <li
                                  id="menu-item-3288"
                                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3288"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/product/spot-table-lamp/">
                                    <span>Product – Style 1</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3289"
                                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3289"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/product/lounge-chair/">
                                    <span>Product – Style 2</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3290"
                                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3290"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/product/aliquam-venenatis-bathtub/">
                                    <span>Product – Style 3</span>
                                    <span className="items-badge">
                                      <span className="hot-badge">Hot</span>
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3849"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3849"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/product/commodo-blown-lamp/?product_sidebar=1">
                                    <span>Product – with sidebar</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3291"
                                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3291"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/product/commodo-blown-lamp/">
                                    <span>Simple product (On Sale)</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3292"
                                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3292"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/product/spot-table-lamp/">
                                    <span>Variable product</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3418"
                                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3418"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/product/libero-headphones/">
                                    <span>
                                      Variable product with description
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3293"
                                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3293"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/product/vulputate-mixer/">
                                    <span>Grouped product</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div id="menu-item-174" className="cell medium-3">
                          <div className="menu-item-mega">
                            <a href="#" className="dropdown-toggle">
                              Other Pages
                            </a>
                            <div className="mega-menu-submenu">
                              <ul className="sub-menu check">
                                <li
                                  id="menu-item-2143"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2143"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/cart/">
                                    <span>Cart</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-2922"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2922"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/checkout/">
                                    <span>Checkout</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-2921"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2921"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/my-account/">
                                    <span>My account</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3066"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3066"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/order-tracking/">
                                    <span>Order Tracking</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3286"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3286"
                                  role="menuitem"
                                >
                                  <a href="https://bafk.temashdesign.com/demo-furniture/wishlist/">
                                    <span>Wishlist</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
                
              <li
                id="menu-item-3609"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3488 current_page_item menu-item-3609 active"
              >
                  <Link href="/blog">
                <a>
                  <span>Blog</span>
                </a>
                </Link>
              </li>
            
            </ul>

            <div
              onClick={() => this.toggleMenu()}
              className="menu-trigger grid-x align-middle"
            >
              <div className="nav_burger cell shrink">
                <span className="burger_top" />
                <span className="burger_middle" />
                <span className="burger_bottom" />
              </div>
              <div className="menu-title cell auto">
                <span>Menu</span>
              </div>
            </div>
          </nav>
        </div>
      </Fragment>
    );
  }
}

export default Navigation;
