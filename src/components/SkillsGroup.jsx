import React from "react";
import "./skillsGroup.css";

const SkillsGroup = ({ children, title, color}) => {
  return (
    <div
      className="skill_group"
      style={{ borderColor: `${color}` }}
    >
      <div className="group_title">
        <h3>{title}</h3>
      </div>
      <div className="group">
        <ul className="group_items">
          {children.map((item, index) => {
            return (
              <li className="group_item" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SkillsGroup;
