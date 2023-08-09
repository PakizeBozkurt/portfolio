import React from "react";
import SkillCard from "./SkillCard";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

function Skills() {
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
            <div className="skills-list d-flex justify-content-between">
              <SkillCard name="ReactJS" />
              <FaReact />
              <SkillCard name="HTML5" />
              <FaHtml5 />
              <SkillCard name="CSS3" />
              <FaCss3Alt />
              <SkillCard name="JavaScript" /> <FaNodeJs />
              <SkillCard name="NodeJS" />
              <SkillCard name="SQL" icon="./skill-icons/sql.svg" />
              <SkillCard name="MongoDB" icon="./skill-icons/mongodb.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
