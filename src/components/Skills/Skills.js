import React from "react";
import SkillCard from "./SkillCard";



function Skills () {
  return (
    <div className="text-center my-5">
      <h2 className="display-5 fw-bolder">
        <span className="text-gradient d-inline">About Me</span>
      </h2>
      <p className="lead fw-light mb-4">My name is Pakize,</p>
      <p className="text-muted">
        I love creating websites with user-friendly. Living for learning....
      </p>
      <div className="skills">
        <div className="skills-container">
          <div className="skills-section">
            <label className="fs-1 my-5 py-5">Skills</label>
            <div className="d-flex justify-content-between">
              <SkillCard name="ReactJS" icon="react" />
              <SkillCard name="HTML5" icon="code" />
              <SkillCard name="CSS3" icon="css3" />
              <SkillCard name="JavaScript" icon="javascript" />
              <SkillCard name="NodeJS" icon="nodejs" />
              <SkillCard name="SQL" icon="database" />
              <SkillCard name="MongoDB" icon="mongo" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Skills;
