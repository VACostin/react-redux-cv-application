import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { update, remove } from "Slices/experienceSlice";

export default function Experience({ index }) {
  const items = useSelector((state) => state.experience[index]);
  const id = `deleteExperienceButton${index}`;
  const dispatch = useDispatch();
  useEffect(() => {
    const button = document.querySelector(`#${id}`);
    const removeEducation = () => {
      const payload = { index };
      dispatch(remove(payload));
    };
    button.addEventListener("click", removeEducation);

    return () => {
      button.removeEventListener("click", removeEducation);
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
          key={`${item.key}${index}`}
          value={item.text}
          className="experience"
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

Experience.propTypes = {
  index: PropTypes.number.isRequired
};
