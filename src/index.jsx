import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import "./styles/index.css";
import "./styles/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
function init() {
  root.render(
    <React.StrictMode>
      <Header />
      <Content />
      <Footer />
    </React.StrictMode>
  );
}

// eslint-disable-next-line jest/require-hook
init();
