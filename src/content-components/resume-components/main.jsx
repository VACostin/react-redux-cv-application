import React from "react";
import { Description, Experience, Education } from "./main-components";
import "Styles/main.css";

export default function Main() {
  return (
    <div id="main">
      <Description />
      <Experience />
      <Education />
    </div>
  );
}
