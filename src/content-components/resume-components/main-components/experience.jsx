import React from "react";
import { useSelector } from "react-redux";
import "Styles/experience-resume.css";

export default function Experience() {
  const list = useSelector((state) => state.experience);
  return (
    <div id="experience-resume">
      <p className="sectionTitles">Experience</p>
      <hr />
      {list.map((item, index) => (
        <div className="experienceField" key={`${item.city.key + index}`}>
          <p className="dates">
            {item.from.text} - {item.to.text}
          </p>
          <div className="companies">
            <p>{item.position.text}</p>
            <p>
              {item.company.text}, {item.city.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
