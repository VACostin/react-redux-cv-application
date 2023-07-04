import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { update, reset, loadExample } from "Slices/photoSlice";
import "Styles/photo-input.css";

export default function Photo(props) {
  const { className } = props;
  const item = useSelector((state) => state.photo);
  const loadExampleFlag = useSelector((state) => state.coloredButtons.loadExample);
  const resetFlag = useSelector((state) => state.coloredButtons.reset);
  const dispatch = useDispatch();
  const skippedFirst = useRef([false, false]);
  useEffect(() => {
    const input = document.querySelector(".imageInput");
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      const payload = {
        text: event.target.result
      };
      dispatch(update(payload));
    });
    input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
    });
  }, []);

  useEffect(() => {
    if (skippedFirst.current[0]) dispatch(loadExample());
    else skippedFirst.current[0] = true;
  }, [loadExampleFlag]);

  useEffect(() => {
    if (skippedFirst.current[1]) dispatch(reset());
    else skippedFirst.current[1] = true;
  }, [resetFlag]);

  return typeof item === "undefined" ? (
    "loading..."
  ) : (
    <label id="photoInput">
      {item.placeholder}
      <input
        type="file"
        accept="image/*"
        key={item.key}
        className={`${className} imageInput`}
        placeholder={item.placeholder}
      />
    </label>
  );
}
Photo.propTypes = {
  className: PropTypes.string.isRequired
};
