import React from "react";
import { useSelector } from "react-redux";
import "Styles/header-resume.css";

export default function Header() {
  const items = useSelector((state) => state.header);
  const firstName = items.firstName.text;
  const lastName = items.lastName.text;
  const title = items.title.text;
  return (
    <div id="header-resume">
      <p>
        {firstName} {lastName}
      </p>
      <p>{title}</p>
    </div>
  );
}
