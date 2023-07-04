import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { toggle } from "Slices/coloredButtonsSlice";
import "Styles/colored-buttons.css";

export default function ColoredButtons({ handlePrint }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const coloredButtonsDiv = document.querySelector("#coloredButtons");
    const [generatePDF, loadExampleButton, resetButton] =
      coloredButtonsDiv.querySelectorAll("button");
    generatePDF.addEventListener("click", () => handlePrint());
    [loadExampleButton, resetButton].forEach((button) => {
      button.addEventListener("click", () => {
        const payload = {
          target: button.id
        };
        dispatch(toggle(payload));
      });
    });
  }, []);
  return (
    <div id="coloredButtons">
      <div>
        <button type="button" id="generatePDF">
          Generate PDF
        </button>
      </div>
      <div>
        <button type="button" id="loadExample">
          Load Example
        </button>
      </div>
      <div>
        <button type="button" id="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

ColoredButtons.propTypes = {
  handlePrint: PropTypes.func.isRequired
};
