import React from "react";
import Header from "./resume-components/header";
import Main from "./resume-components/main";
import Side from "./resume-components/side";

export default function Resume() {
  return (
    <div id="resume">
      <Header />
      <Main />
      <Side />
    </div>
  );
}
