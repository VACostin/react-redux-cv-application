import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, reset, loadExample } from "Slices/experienceSlice";
import Experience from "./experience";

export default function ExperienceList() {
  const length = useSelector((state) => state.experience.length);
  const loadExampleFlag = useSelector((state) => state.coloredButtons.loadExample);
  const resetFlag = useSelector((state) => state.coloredButtons.reset);
  const dispatch = useDispatch();
  const skippedFirst = useRef([false, false]);
  useEffect(() => {
    const button = document.querySelector(".addExperience");
    button.addEventListener("click", () => {
      dispatch(add());
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

  const list = [];
  for (let i = 0; i < length; i += 1) list.push(<Experience index={i} key={i} />);
  return (
    <fieldset>
      <legend>Experience</legend>
      {list}
      <div>
        <button type="button" className="addExperience">
          Add
        </button>
      </div>
    </fieldset>
  );
}
