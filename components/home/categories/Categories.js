import React, { Fragment } from "react";
import Link from 'next/link';

class Categories extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isLoading: true
    }
  }

  componentDidMount = () => {
    this.setState({
      isLoading: false
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
                <div className="app_theme columns-4">
                  <div className="grid-container">
                    <div className="grid-x grid-margin-x">
                      <div className="cell large-12">
                        <ul className="home-category-list products columns-4 category-grid-layout-1 product-grid-layout-1">
                          <li className="product-category product first">
                            <div style={style} className="overOpacityMain category_wrapper">
                              <div  className=" category_image">
                                <Link href="/category">
                                  <a
                                    className="category-image"
                                  >
                                    <img
                                      src="/images/category/1.webp"
                                      alt="Erkek Eşofmanlari"
                                      width={500}
                                      height={700}
                                    />
                                  </a>
                                </Link>
                              </div>
                              <div className="category_details">
                                <Link href="/category">
                                  <a>
                                    <div className="more-products">4 ürün</div>
                                    <h2 className="category-title">
                                      Erkek Eşofmanlari
                                    </h2>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </li>
                          <li className="product-category product">
                            <div style={style} className="overOpacityMain category_wrapper">
                              <div  className=" category_image">
                                <Link href="/category">
                                  <a
                                    className="category-image"
                                  >
                                    <img
                                      src="/images/category/1.webp"
                                      alt="Erkek Şortları"
                                      width={500}
                                      height={700}
                                    />
                                  </a>
                                </Link>
                              </div>
                              <div className="category_details">
                                <Link href="/category">
                                  <a>
                                    <div className="more-products">6 ürün</div>
                                    <h2 className="category-title">
                                      Erkek Şortları
                                    </h2>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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


export default Categories;
