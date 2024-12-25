import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";

const Hero = () => {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  const FlipText = ({ text }) => {
    return (
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="flip-text-container"
        style={{ lineHeight: 1 }}
      >
        <div className="flip-text-wrapper">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="flip-char"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
        <div className="flip-text-overlay">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="flip-char"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div id="home" className="hero">
      <h1>
        <span>Hello, I'm Krisha Garg - </span>
      </h1>
      <div className="hero-descriptions">
        <FlipText text="Engineering Student" />
        <FlipText text="Full Stack Developer" />
        <FlipText text="Data Analyst" />
      </div>
      <div className="hero-action">
        {/* Link for downloading the resume */}
        <a
          href="https://drive.google.com/file/d/1O-3P5KoZf33PTBU0omvL3xfWOA6_22r6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          Download Resume
        </a>

        {/* Smooth scroll to Connect section */}
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
