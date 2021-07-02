import React, { Fragment } from "react";

class ScrollTop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollState: true,
      isScroll: true
    };
  }
  handleScrollGoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  handleScrollTop = () => {

      const scrollContainer = document.getElementById("scrollContainer");
      if (Math.ceil(window.scrollY) > 450) {
        const bodyScroll = window.scrollY;
        this.setState({
          scrollState: true,
        });
        scrollContainer.classList.add("is-visible", "is-active");
  
        if (
          Math.ceil(window.innerHeight) + Math.ceil(window.scrollY) >=
          document.body.offsetHeight - 360
        ) {
          this.setState({
            scrollState: false,
          });
          scrollContainer.classList.add("is-visible", "is-active");
        }
      } else {
        this.setState({
          scrollState: true,
        });
        scrollContainer.classList.remove("is-visible", "is-active");
      }

  };

  componentDidMount = () => {
    const windowWidth = window.innerWidth;
    if(window.location.pathname != '/product'){
      window.addEventListener("scroll", this.handleScrollTop, false);
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScrollTop, false);
  };

  render() {
    return (
      <Fragment>
        {this.state.scrollState === true ? (
          <div
            onClick={this.handleScrollGoTop}
            id="scrollContainer"
            className="scrollContainerDark progress-page is-animating"
          >
            <div className="scrolltotop is-active is-visible">
              <div id="state1" className="bafk-arrow-top-dark arrow-top" />
              <div
                id="state2"
                className="bafk-arrow-top-line-dark arrow-top-line"
              />
              <span className="tooltip">Yukarı Çık</span>
            </div>
            <svg
              id="svgDarkDefault"
              className="dark1 scrollTopSvg bafk-scroll-circle-dark progress-circle svg-content"
              width="100%"
              height="100%"
              viewBox="-1 -1 102 102"
            >
              <path
                d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                style={{
                  transition: "stroke-dashoffset 10ms linear 0s",
                  strokeDasharray: "307.919, 307.919",
                  strokeDashoffset: "307.919",
                }}
              />
            </svg>
          </div>
        ) : (
          <div
            onClick={this.handleScrollGoTop}
            id="scrollContainer"
            className="scrollContainerLight progress-page is-animating"
          >
            <div className="scrolltotop is-active is-visible">
              <div id="state1" className="ligth1 arrow-top" />
              <div id="state2" className="ligth2 arrow-top-line" />
              <span className="tooltip">Yukarı Çık</span>
            </div>
            <svg
              id="state3"
              className="scrollSvgLight scrollTopSvg progress-circle svg-content"
              width="100%"
              height="100%"
              viewBox="-1 -1 102 102"
            >
              <path
                d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                style={{
                  transition: "stroke-dashoffset 10ms linear 0s",
                  strokeDasharray: "307.919, 307.919",
                  strokeDashoffset: "307.919",
                }}
              />
            </svg>
          </div>
        )}
      </Fragment>
    );
  }
}
export default ScrollTop;
