import React from "react";
import "./skills.css";
import Title from "./Title";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaNode,
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaSass,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiNextdotjs,
  SiDjango,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import SkillsGroup from "./SkillsGroup";

const Skills = () => {
  return (
    <div className="container">
      <Title title="Skills" />
      <div className="skills_container">
        <div className="frontend_skills">
          <SkillsGroup title="Front-End">
            <div>
              <AiFillHtml5 />
              <p>html</p>
            </div>
            <div>
              <FaCss3Alt />
              <p>css</p>
            </div>
            <div>
              <SiJavascript />
              <p>js</p>
            </div>

            <div>
              <FaReact />
              <p>React</p>
            </div>
            <div>
              <FaBootstrap />
              <p>Boostrap</p>
            </div>
            <div>
              <FaSass />
              <p>Sass</p>
            </div>
          </SkillsGroup>
        </div>

        <div className="backend_skills">
          <SkillsGroup title="Back-End">
            <div>
              <FaNode />
              <p>node</p>
            </div>
            <div>
              <SiExpress />
              <p>Express</p>
            </div>
            <div>
              <SiMongodb />
              <p>MongoDB</p>
            </div>
            <div>
              <FaPython />
              <p>Python</p>
            </div>
            <div>
              <SiDjango />
              <p>Django</p>
            </div>
          </SkillsGroup>
        </div>
        <div className="devtools_skills">
          <SkillsGroup title="Dev-Tools">
            <div>
              <FaGitAlt />
              <p>Git</p>
            </div>
            <div>
              <SiPostman />
              <p>Postman</p>
            </div>
          </SkillsGroup>
        </div>

        <div className="others_skills">
          <SkillsGroup title="Cosas que quiero aprender">
            <div>
              <SiNextdotjs />
              <p>Next</p>
            </div>
            <div>
              <SiTypescript />
              <p>TypeScript</p>
            </div>
            <div>
              <SiTailwindcss />
              <p>Tailwind</p>
            </div>
          </SkillsGroup>
        </div>
      </div>
    </div>
  );
};

export default Skills;
