import React from "react";
import PropTypes from "prop-types";
import {
  PersonalInformation,
  ExperienceList,
  EducationList,
  ColoredButtons
} from "./form-components";
import "Styles/form.css";

export default function Form({ handlePrint }) {
  return (
    <form id="form">
      <PersonalInformation />
      <ExperienceList />
      <EducationList />
      <ColoredButtons handlePrint={handlePrint} />
    </form>
  );
}

Form.propTypes = {
  handlePrint: PropTypes.func.isRequired
};
