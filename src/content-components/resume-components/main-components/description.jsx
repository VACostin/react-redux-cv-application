import React from "react";
import { useSelector } from "react-redux";
import "Styles/description-resume.css";

export default function Description() {
  const description = useSelector((state) => state.description.text);
  return (
    <div id="description-resume">
      <p className="sectionTitles">Description</p>
      <hr />
      <p>{description}</p>
    </div>
  );
}
