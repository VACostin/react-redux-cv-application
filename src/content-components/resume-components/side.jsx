import React from "react";
import { useSelector } from "react-redux";
import "Styles/side.css";

export default function Side() {
  const photo = useSelector((state) => state.photo.text);
  const side = useSelector((state) => state.side);
  return (
    <div id="side">
      <div id="photoWrap">
        <img src={photo} alt="not found" />
      </div>
      <div id="personalDetails">
        <p className="sectionTitles">Personal Details</p>
        <hr />
        <div id="contact">
          <p>Address</p>
          <p>{side.address.text}</p>
          <p>Phone Number</p>
          <p>{side.phoneNumber.text}</p>
          <p>Email</p>
          <p>{side.email.text}</p>
        </div>
      </div>
    </div>
  );
}
