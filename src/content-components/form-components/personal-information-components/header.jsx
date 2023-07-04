import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { update, reset, loadExample } from "Slices/headerSlice";

export default function Header(props) {
  const { className } = props;
  const items = useSelector((state) => state.header);
  const loadExampleFlag = useSelector((state) => state.coloredButtons.loadExample);
  const resetFlag = useSelector((state) => state.coloredButtons.reset);
  const dispatch = useDispatch();
  const skippedFirst = useRef([false, false]);
  const onChange = (event, key) => {
    const payload = {
      target: key,
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

  return typeof items === "undefined" ? (
    "loading..."
  ) : (
    <>
      {Object.values(items).map((item) => (
        <input
          key={item.key}
          value={item.text}
          className={className}
          placeholder={item.placeholder}
          onChange={(event) => onChange(event, item.key)}
        />
      ))}
    </>
  );
}

Header.propTypes = {
  className: PropTypes.string.isRequired
};
