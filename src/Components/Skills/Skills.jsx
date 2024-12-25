import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  SiCplusplus,
  SiPython,
  SiR,
  SiReact,
  SiHtml5,
  SiCss3,
  SiThreedotjs,
  SiJavascript,
  SiFigma,
  SiFramer,
  SiDjango,
  SiFlask,
  SiMongodb,
  SiNodedotjs,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import "./Skills.css";

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1>Skills</h1>
        <DivOrigami />
      </div>
    </div>
  );
};

const DivOrigami = () => {
  return (
    <section className="div-origami">
      {/* Languages */}
      <div className="tech-box">
        <h2>Languages</h2>
        <LogoRolodex
          items={[
            <LogoItem key={1}>
              <SiCplusplus />
              <span>C++</span>
            </LogoItem>,
            <LogoItem key={2}>
              <SiPython />
              <span>Python</span>
            </LogoItem>,
            <LogoItem key={3}>
              <FaJava />
              <span>Java</span>
            </LogoItem>,
            <LogoItem key={4}>
              <SiR />
              <span>R</span>
            </LogoItem>,
          ]}
        />
      </div>

      {/* Frontend */}
      <div className="tech-box">
        <h2>Frontend</h2>
        <LogoRolodex
          items={[
            <LogoItem key={1}>
              <SiReact />
              <span>React</span>
            </LogoItem>,
            <LogoItem key={2}>
              <SiHtml5 />
              <span>HTML</span>
            </LogoItem>,
            <LogoItem key={3}>
              <SiCss3 />
              <span>CSS</span>
            </LogoItem>,
            <LogoItem key={4}>
              <SiJavascript />
              <span>JavaScript</span>
            </LogoItem>,
            <LogoItem key={5}>
              <SiThreedotjs />
              <span>Three.js</span>
            </LogoItem>,
            <LogoItem key={6}>
              <SiFramer />
              <span>Framer Motion</span>
            </LogoItem>,
            <LogoItem key={7}>
              <SiFigma />
              <span>Figma</span>
            </LogoItem>,
          ]}
        />
      </div>

      {/* Backend */}
      <div className="tech-box">
        <h2>Backend</h2>
        <LogoRolodex
          items={[
            <LogoItem key={1}>
              <SiDjango />
              <span>Django</span>
            </LogoItem>,
            <LogoItem key={2}>
              <SiFlask />
              <span>Flask</span>
            </LogoItem>,
            <LogoItem key={3}>
              <SiNodedotjs />
              <span>Node.js</span>
            </LogoItem>,
            <LogoItem key={4}>
              <SiMongodb />
              <span>MongoDB</span>
            </LogoItem>,
            <LogoItem key={5}>
              <SiMysql />
              <span>SQL</span>
            </LogoItem>,
          ]}
        />
      </div>
    </section>
  );
};

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, DELAY_IN_MS);

    return () => clearInterval(intervalRef.current || undefined);
  }, [items.length]);

  return (
    <div className="logo-rolodex">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="logo-item-wrapper"
          transition={{ duration: TRANSITION_DURATION_IN_SECS, ease: "easeInOut" }}
          initial={{ rotateX: 180, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -180, opacity: 0 }}
        >
          {items[index]}
        </motion.div>
      </AnimatePresence>
      <hr className="divider" />
    </div>
  );
};

const LogoItem = ({ children, className }) => {
  return <div className={`logo-item ${className}`}>{children}</div>;
};

export default Skills;
