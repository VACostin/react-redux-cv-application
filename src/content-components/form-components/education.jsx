import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { update, remove } from "Slices/educationSlice";

export default function Education({ index }) {
  const items = useSelector((state) => state.education[index]);
  const id = `deleteEducationButton${index}`;
  const dispatch = useDispatch();
  useEffect(() => {
    const button = document.querySelector(`#${id}`);
    const removeExperience = () => {
      const payload = { index };
      dispatch(remove(payload));
    };
    button.addEventListener("click", removeExperience);

    return () => {
      button.removeEventListener("click", removeExperience);
    };
  }, []);

  const onChange = (event, key) => {
    const payload = {
      position: index,
      target: key,
      text: event.target.value
    };
    dispatch(update(payload));
  };

  return typeof items === "undefined" ? (
    "loading..."
  ) : (
    <>
      {Object.values(items).map((item) => (
        <input
          key={item.key}
          value={item.text}
          className="education"
          placeholder={item.placeholder}
          onChange={(event) => onChange(event, item.key)}
        />
      ))}
      <div key={`${id}Wrap`}>
        <button type="button" key={id} id={id}>
          Delete
        </button>
      </div>
    </>
  );
}

Education.propTypes = {
  index: PropTypes.number.isRequired
};
