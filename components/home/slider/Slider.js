import React, { Fragment } from "react";
import SlickSlider from "react-slick";

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Fragment>
        <div
          data-vc-full-width="true"
          data-vc-full-width-init="true"
          data-vc-stretch-content="true"
          className="slider-main-wrapp normal_height vc_row bafk_row vc_row-fluid home-slider vc_row-no-padding"
        >
          <div className="bafk_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="bafk_wrapper">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "@media all and (max-width: 768px){#default-slider-60332b1f4336f, #default-slider-60332b1f4336f .bafk_slider-wrapper, #default-slider-60332b1f4336f .bg-wrapper { height:300px!important;}}\n\t#default-slider-60332b1f4336f .flickity-button {color: #000000}\n\t#default-slider-60332b1f4336f .flickity-button .flickity-button-icon {fill: #000000}\n\t#default-slider-60332b1f4336f .bg-wrapper { height:700px; } \n\t#default-slider-60332b1f4336f .bafk_slider-wrapper .flickity-page-dots .dot { background-color: #000000 }\n\t",
                  }}
                />
                <div
                  className="shortcode_bafk_slider"
                  id="default-slider-60332b1f4336f"
                  style={{ height: "700px" }}
                >
                  <div
                    className="bafk_slider-wrapper flickity-enabled is-draggable"
                    style={{ height: "700px" }}
                    data-autoplay="true"
                    data-autoplay-speed={4000}
                    tabIndex={0}
                  >
                    {" "}
                    <div
                      className="sliderWrapp flickity-viewport"
                      style={{ touchAction: "pan-y" }}
                    >
                      <div className="carousel-cell middle_center">
                        <SlickSlider {...settings}>
                          <div>
                            <div className="slider-content">
                              <div
                                className="slider-content-wrapper"
                                style={{ opacity: 1, visibility: "inherit" }}
                              >
                                <p
                                  className="slide-description"
                                  style={{ color: "rgb(227,67,67)" }}
                                >
                                  november sales
                                </p>
                                <h1
                                  className="slide-title"
                                  style={{ color: "#000000" }}
                                >
                                  Clearance Sales
                                  <br />
                                  Up to 30% Off
                                </h1>
                                <p className="slide-button">
                                  <a
                                    href="#"
                                    style={{
                                      borderColor: "rgb(0,0,0)",
                                      color: "rgb(0,0,0)",
                                    }}
                                  >
                                    Shop Now
                                  </a>
                                </p>
                              </div>
                            </div>

                            <img
                              style={{ objectFit: "contain" }}
                              width="100%"
                              height="auto"
                              src="/images/home/slider/1.jpg"
                            />
                          </div>
                          <div>
                            <div className="slider-content">
                              <div
                                className="slider-content-wrapper"
                                style={{ opacity: 1, visibility: "inherit" }}
                              >
                                <p
                                  className="slide-description"
                                  style={{ color: "rgb(227,67,67)" }}
                                >
                                  november sales
                                </p>
                                <h1
                                  className="slide-title"
                                  style={{ color: "#000000" }}
                                >
                                  Clearance Sales
                                  <br />
                                  Up to 30% Off
                                </h1>
                                <p className="slide-button">
                                  <a
                                    href="#"
                                    style={{
                                      borderColor: "rgb(0,0,0)",
                                      color: "rgb(0,0,0)",
                                    }}
                                  >
                                    Shop Now
                                  </a>
                                </p>
                              </div>
                            </div>

                            <img
                              width="100%"
                              height="auto"
                              style={{ objectFit: "contain" }}
                              src="/images/home/slider/2.jpg"
                            />
                          </div>
                        </SlickSlider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row vc_row bafk_row vc_inner vc_row-fluid">
                  <div className="bafk_column vc_column_container vc_col-sm-12 vc_hidden-sm vc_hidden-xs">
                    <div className="vc_column-inner">
                      <div className="bafk_wrapper">
                        <div
                          className="vc_empty_space"
                          style={{ height: "4vw" }}
                        >
                          <span className="vc_empty_space_inner" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row vc_row bafk_row vc_inner vc_row-fluid">
                  <div className="bafk_column vc_column_container vc_col-sm-12 vc_hidden-lg vc_hidden-md">
                    <div className="vc_column-inner">
                      <div className="bafk_wrapper">
                        <div
                          className="vc_empty_space"
                          style={{ height: "40px" }}
                        >
                          <span className="vc_empty_space_inner" />
                        </div>
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
export default Slider;
