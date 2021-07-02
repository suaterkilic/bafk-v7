import "../public/css/custom.css";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import withRedux, { createWrapper } from "next-redux-wrapper";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.fonts.onloadingdone = () => {
      document.getElementById("__myApp").classList.add("myOpacity");
    };
    document.fonts.ready.then(() =>
      document.getElementById("__myApp").classList.add("myOpacity")
    );
  }, []);
  return (
    <Provider store={store}>
      <div id="__myApp" className="overOpacityMain">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
