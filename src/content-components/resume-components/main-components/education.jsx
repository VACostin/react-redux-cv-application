import React from "react";
import { useSelector } from "react-redux";
import "Styles/education-resume.css";

export default function Education() {
  const list = useSelector((state) => state.education);
  return (
    <div id="education-resume">
      <p className="sectionTitles">Education</p>
      <hr />
      {list.map((item, index) => (
        <div className="educationField" key={`${item.city.key + index}`}>
          <p className="dates">
            {item.from.text} - {item.to.text}
          </p>
          <div className="degrees">
            <p>
              {item.universityName.text}, {item.city.text}
            </p>
            <p>Degree: {item.degree.text}</p>
            <p>Subject: {item.subject.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
