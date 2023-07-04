import React from "react";
import Header from "./resume-components/header";
import Main from "./resume-components/main";
import Side from "./resume-components/side";
import "Styles/resume.css";

export default function Resume() {
  return (
    <div id="resume">
      <Header />
      <div style={{ display: "flex", height: "262.6mm" }}>
        <Main />
        <Side />
      </div>
    </div>
  );
}
