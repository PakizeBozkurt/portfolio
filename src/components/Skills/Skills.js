import React from "react";
import SkillCard from "./SkillCard";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";


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
            <div className=" d-flex justify-content-between">
              <SkillCard name="ReactJS" />
              <FaReact />
              <SkillCard name="HTML5" />
              <FaHtml5 />
              <SkillCard name="CSS3" />
              <FaCss3Alt />
              <SkillCard name="JavaScript" /> <BiLogoJavascript />
              <SkillCard name="NodeJS" />
              <FaNode />
              <SkillCard name="SQL" /> <BiLogoPostgresql />
              <SkillCard name="MongoDB" />
              <BiLogoMongodb />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
