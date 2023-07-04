import React from "react";
import { Header, Photo, Side, Description } from "./personal-information-components";

const className = "personalInformation";

export default function PersonalInformation() {
  return (
    <fieldset>
      <legend>Personal Information</legend>
      <Header className={className} />
      <Photo className={className} />
      <Side className={className} />
      <Description className={className} />
    </fieldset>
  );
}
