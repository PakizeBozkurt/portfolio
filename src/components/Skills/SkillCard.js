import React from "react";

function SkillCard({ name, icon }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <i className={`bi bi-${icon}`}></i>
        <label className="skill-name">{name}</label>
      </div>
    </div>
  );
}

export default SkillCard;
