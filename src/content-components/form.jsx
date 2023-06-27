import React from "react";
import PersonalInformation from "./form-components/personal-information";
import Experience from "./form-components/experience";
import Education from "./form-components/education";
import ColoredButtons from "./form-components/colored-buttons";

export default function Form() {
  return (
    <form>
      <PersonalInformation />
      <Experience />
      <Education />
      <ColoredButtons />
    </form>
  );
}
