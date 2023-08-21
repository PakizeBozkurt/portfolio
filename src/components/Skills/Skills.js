import React from "react";
import SkillCard from "./SkillCard";
import { FaReact, FaHtml5, FaCss3Alt, FaNode } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoPostgresql,
} from "react-icons/bi";
import "./Skill.css";

const skillsData = [
  { icon: <FaReact />, name: "ReactJS" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <BiLogoJavascript />, name: "JavaScript" },
  { icon: <FaNode />, name: "NodeJS" },
  { icon: <BiLogoPostgresql />, name: "SQL" },
  { icon: <BiLogoMongodb />, name: "MongoDB" },
];

function Skills() {
  return (
    <div className="text-center my-5 p-5">
      <h2 className="display-5 fw-bolder p-5 my-5">
        <span className="text-gradient d-inline">About Me</span>
      </h2>
      <p className="lead fw-bold mb-4 fs-1 p-5">My name is Pakize,</p>
      <p className="fs-3">
        I love creating websites with user-friendly. Living for learning....
      </p>
      <div className="skills">
        <div className="skills-container">
          <div className="skills-section px-5 fs-4 icon">
            <label className="fs-1 my-5 py-5 bgCircle ">Skills</label>
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              {skillsData.map(({ icon, name }) => (
                <React.Fragment key={name}>
                  {icon}
                  <SkillCard name={name} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
