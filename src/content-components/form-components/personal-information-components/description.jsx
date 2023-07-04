import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { update, reset, loadExample } from "Slices/descriptionSlice";

export default function Description(props) {
  const { className } = props;
  const item = useSelector((state) => state.description);
  const loadExampleFlag = useSelector((state) => state.coloredButtons.loadExample);
  const resetFlag = useSelector((state) => state.coloredButtons.reset);
  const dispatch = useDispatch();
  const skippedFirst = useRef([false, false]);
  const onChange = (event) => {
    const payload = {
      text: event.target.value
    };
    dispatch(update(payload));
  };

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
    <textarea
      id="description-form"
      key={item.key}
      value={item.text}
      className={className}
      placeholder={item.placeholder}
      onChange={(event) => onChange(event)}
    />
  );
}

Description.propTypes = {
  className: PropTypes.string.isRequired
};
