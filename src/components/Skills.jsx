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
  SiTailwindcss
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="container">
      <Title title="Skills" />
      <div className="skills_container">
        <ul>
          <li>
            <AiFillHtml5 />
          </li>
          <li>
            <FaCss3Alt />
          </li>
          <li>
            <SiJavascript />
          </li>
          <li>
            <FaNode />
          </li>
          <li>
            <FaReact />
          </li>
          <li>
            <SiExpress />
          </li>
          <li>
            <FaGitAlt />
          </li>
          <li>
            <FaBootstrap />
          </li>
          <li>
            <SiMongodb />
          </li>
          <li>
            <FaSass />
          </li>
          <li>
            <SiPostman />
          </li>
          <li>
            <SiNextdotjs />
          </li>
          <li>
            <FaPython />
          </li>
          <li>
            <SiDjango />
          </li>
          <li>
            <SiTypescript />
          </li>
          <li>
              <SiTailwindcss/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
