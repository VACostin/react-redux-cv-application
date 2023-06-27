import React from "react";
import Form from "./content-components/form";
import Resume from "./content-components/resume";
import "./styles/content.css";

export default function Content() {
  return (
    <div id="content">
      <Form />
      <Resume />
    </div>
  );
}
