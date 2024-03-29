import React from "react";
import "./Skill.css";

function SkillCard({ name }) {
  return (
    <div className=" d-flex flex-wrap justify-content-between algin-items-center bgCircle bg-dark  text-light p-3 m-3">
      <label className="skill-name">{name}</label>
    </div>
  );
}

export default SkillCard;
