import React from "react";

function SkillCard({ name, icon }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <label className="skill-name">{name}</label>
      </div>
    </div>
  );
}

export default SkillCard;
