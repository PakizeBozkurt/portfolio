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
    <div className="text-center my-5 p-5">
      <h2 className="display-5 fw-bolder p-5 my-5">
        <span className="text-gradient d-inline ">About Me</span>
      </h2>
      <p className="lead fw-light mb-4 fs-2 p-5 ">My name is Pakize,</p>
      <p className=" fs-3">
        I love creating websites with user-friendly. Living for learning....
      </p>
      <div className="skills">
        <div className="skills-container">
          <div className="skills-section px-5 fs-4 ">
            <label className="fs-1 my-5 py-5 bgCircle  ">Skills</label>
            <div className=" d-flex flex-wrap justify-content-between algin-items-center ">
              <FaReact className="fs-1  " />
              <SkillCard name="ReactJS" />
              <FaHtml5 className="fs-1 ms-3 " />
              <SkillCard name="HTML5" />
              <FaCss3Alt className="fs-1 ms-3" />
              <SkillCard name="CSS3" />
              <BiLogoJavascript className="fs-1 ms-3 " />
              <SkillCard name="JavaScript" />
              <FaNode className="fs-1 ms-3 " />
              <SkillCard name="NodeJS" />
              <BiLogoPostgresql className="fs-1 " />
              <SkillCard name="SQL" />
              <BiLogoMongodb className="fs-1 ms-3 " />
              <SkillCard name="MongoDB" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
