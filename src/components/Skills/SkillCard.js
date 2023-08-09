import React from "react";

function SkillCard({ name }) {
  return (
    <div className=" d-flex flex-wrap justify-content-between algin-items-center bg-danger p-5 m-2">
      <label className="skill-name">{name}</label>
    </div>
  );
}

export default SkillCard;
