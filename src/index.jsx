import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import "Styles/index.css";
import "Styles/reset.css";

function init() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

// eslint-disable-next-line jest/require-hook
init();
