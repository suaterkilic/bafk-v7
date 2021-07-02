import React, { Fragment } from "react";
import { SideBySideMagnifier } from "react-image-magnifiers";

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  scroll = () => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      alert("you're at the bottom of the page");
  }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.scroll, false)
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.scroll, false)
  }
  render() {
    return (
      <Fragment>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div
          style={{
            border: "3px solid #333",
            overflow: "hidden",
            width: "300px",
            height: "300px",
            marginTop: "116px",
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: 0,
          }}
        >
          <img
            className="imgZoomOut"
            src="/images/product/slider/1.jpg"
            style={{ maxWidth: "100%", height: "292px" }}
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </Fragment>
    );
  }
}

export default Image;
