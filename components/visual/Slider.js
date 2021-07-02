import React, { Fragment } from "react";

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className="slick-slider slick-initialized" dir="ltr">
          <button
            type="button"
            data-role="none"
            className="slick-arrow slick-prev"
            style={{ display: "block" }}
          >
            {" "}
            Previous
          </button>
          <div className="slick-list">
            <div
              className="slick-track"
              style={{
                width: "7405px",
                opacity: 1,
                transform: "translate3d(-1481px, 0px, 0px)",
              }}
            >
              <div
                data-index={-1}
                tabIndex={-1}
                className="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: "1481px" }}
              >
                <div>
                  <div
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="slider-content">
                      <div
                        className="slider-content-wrapper"
                        style={{ opacity: 1, visibility: "inherit" }}
                      >
                        <p
                          className="slide-description"
                          style={{ color: "rgb(227, 67, 67)" }}
                        >
                          november sales
                        </p>
                        <h1
                          className="slide-title"
                          style={{ color: "rgb(0, 0, 0)" }}
                        >
                          Clearance Sales
                          <br />
                          Up to 30% Off
                        </h1>
                        <p className="slide-button">
                          <a
                            href="#"
                            style={{
                              borderColor: "rgb(0, 0, 0)",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            Shop Now
                          </a>
                        </p>
                      </div>
                    </div>
                    <img
                      src="/images/home/slider/2.jpg"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
              <div
                data-index={0}
                className="slick-slide slick-active slick-current"
                tabIndex={-1}
                aria-hidden="false"
                style={{ outline: "none", width: "1481px" }}
              >
                <div>
                  <div
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="slider-content">
                      <div
                        className="slider-content-wrapper"
                        style={{ opacity: 1, visibility: "inherit" }}
                      >
                        <p
                          className="slide-description"
                          style={{ color: "rgb(227, 67, 67)" }}
                        >
                          november sales
                        </p>
                        <h1
                          className="slide-title"
                          style={{ color: "rgb(0, 0, 0)" }}
                        >
                          Clearance Sales
                          <br />
                          Up to 30% Off
                        </h1>
                        <p className="slide-button">
                          <a
                            href="#"
                            style={{
                              borderColor: "rgb(0, 0, 0)",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            Shop Now
                          </a>
                        </p>
                      </div>
                    </div>
                    <img
                      src="/images/home/slider/1.jpg"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
              <div
                data-index={1}
                className="slick-slide"
                tabIndex={-1}
                aria-hidden="true"
                style={{ outline: "none", width: "1481px" }}
              >
                <div>
                  <div
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="slider-content">
                      <div
                        className="slider-content-wrapper"
                        style={{ opacity: 1, visibility: "inherit" }}
                      >
                        <p
                          className="slide-description"
                          style={{ color: "rgb(227, 67, 67)" }}
                        >
                          november sales
                        </p>
                        <h1
                          className="slide-title"
                          style={{ color: "rgb(0, 0, 0)" }}
                        >
                          Clearance Sales
                          <br />
                          Up to 30% Off
                        </h1>
                        <p className="slide-button">
                          <a
                            href="#"
                            style={{
                              borderColor: "rgb(0, 0, 0)",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            Shop Now
                          </a>
                        </p>
                      </div>
                    </div>
                    <img
                      src="/images/home/slider/2.jpg"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
              <div
                data-index={2}
                tabIndex={-1}
                className="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: "1481px" }}
              >
                <div>
                  <div
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="slider-content">
                      <div
                        className="slider-content-wrapper"
                        style={{ opacity: 1, visibility: "inherit" }}
                      >
                        <p
                          className="slide-description"
                          style={{ color: "rgb(227, 67, 67)" }}
                        >
                          november sales
                        </p>
                        <h1
                          className="slide-title"
                          style={{ color: "rgb(0, 0, 0)" }}
                        >
                          Clearance Sales
                          <br />
                          Up to 30% Off
                        </h1>
                        <p className="slide-button">
                          <a
                            href="#"
                            style={{
                              borderColor: "rgb(0, 0, 0)",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            Shop Now
                          </a>
                        </p>
                      </div>
                    </div>
                    <img
                      src="/images/home/slider/1.jpg"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
              <div
                data-index={3}
                tabIndex={-1}
                className="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: "1481px" }}
              >
                <div>
                  <div
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="slider-content">
                      <div
                        className="slider-content-wrapper"
                        style={{ opacity: 1, visibility: "inherit" }}
                      >
                        <p
                          className="slide-description"
                          style={{ color: "rgb(227, 67, 67)" }}
                        >
                          november sales
                        </p>
                        <h1
                          className="slide-title"
                          style={{ color: "rgb(0, 0, 0)" }}
                        >
                          Clearance Sales
                          <br />
                          Up to 30% Off
                        </h1>
                        <p className="slide-button">
                          <a
                            href="#"
                            style={{
                              borderColor: "rgb(0, 0, 0)",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            Shop Now
                          </a>
                        </p>
                      </div>
                    </div>
                    <img
                      src="/images/home/slider/2.jpg"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            data-role="none"
            className="slick-arrow slick-next"
            style={{ display: "block" }}
          >
            {" "}
            Next
          </button>
          <ul className="slick-dots" style={{ display: "block" }}>
            <li className="slick-active">
              <button>1</button>
            </li>
            <li className>
              <button>2</button>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Slider;
