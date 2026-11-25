import React from "react";
import CountUp from "react-countup";
import { FaCss3, FaFigma, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiMiro } from "react-icons/si";

const SectionBio = () => {
  return (
    <>
      <section className="projects-section">
        <div className="main-content">
          <div className="title">
            <h1 className="hidden">
              Narratives into <span>Art.</span>
            </h1>
            <p className="hidden">
              I design in Figma and build the whole product: React front ends,
              vanilla JavaScript when a framework isn't needed, and
              Node/Express/MongoDB back ends. I've shipped healthcare,
              e-commerce, industrial and education websites, including
              bilingual English/Arabic builds.
            </p>
          </div>
          <div className="badges">
            <div className="counter experience">
              <CountUp
                start={0}
                end={3}
                duration={1}
                redraw
                delay={0.7}
                className="hidden"
              />{" "}
              <span className="hidden">+</span>
              {/* <h2>1+</h2> */}
              <p className="hidden">years of experience</p>
            </div>
            <div className="counter projects">
              <CountUp
                start={0}
                end={4}
                duration={1}
                redraw
                delay={0.7}
                className="hidden"
              />{" "}
              
              {/* <h2>1+</h2> */}
              <p className="hidden">projects shipped</p>
            </div>
          </div>
          <div className="skills">
            <div className="web">
              <p className="hidden">web development</p>
              <div className="icons">
              <FaHtml5 className="hidden"/>
              <FaCss3 className="hidden"/>
              <FaSass className="hidden"/>
              <RiTailwindCssFill className="hidden"/>
              <FaJs className="hidden"/>
              <FaReact className="hidden"/>
              <FaNodeJs className="hidden"/>
              <FaGithub className="hidden"/>
              </div>
            </div>
            <div className="ux">
              <p className="hidden">UX-UI design</p>
              <div className="icons">
              <FaFigma className="hidden"/>
              <SiMiro className="hidden"/>
              <SiAdobeillustrator className="hidden"/>
              <SiAdobeaftereffects className="hidden"/>
              <SiAdobephotoshop className="hidden"/>
              </div>
            </div>
          </div>
        </div>
        {/* <svg width="100" height="200">
          <circle className="hidden" cx="50" cy="160" r="20" />
          <line className="hidden" x1="50" y1="140" x2="50" y2="-0" />
        </svg> */}
      </section>
    </>
  );
};

export default SectionBio;
