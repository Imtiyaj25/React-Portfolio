import React from 'react';

import Next from "../../images/nextjs.png";
import ReactJS from "../../images/react.png";
import NodeJS from "../../images/nodejs1.png";
import ExpressJS from "../../images/expressJS.png";
import GitHub from "../../images/github.png";
import Netlify from "../../images/Netlify1.png";
import HTML5 from "../../images/html5.png";
import CSS3 from "../../images/css3.png";
import JavaScript from "../../images/javascript.png";
import Sass from "../../images/sass.png";

import "./style.scss";
const Skills = () => {
  return (
    <section
            className="skills"
            id="skills"
        >
            <div className="max-width">
                <h2 className="title">Technologies</h2>
                <div className="skills-content">
                    <div className="card">
                        <div className="box">
                            <div className="text">FrameWorks</div>
                            <a href="https://nextjs.org/" target='_blank'>
                                <img src={Next} />
                            </a>
                            <a href="https://react.dev/" target='_blank'>
                                <img src={ReactJS} />
                            </a><br/>
                            <a href="https://nodejs.org/en" target='_blank'>
                                <img src={NodeJS} />
                            </a>
                            <a href="https://expressjs.com/" target='_blank'>
                                <img src={ExpressJS} />
                            </a>
                            
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">Hosting Platforms</div>
                            <a href="https://pages.github.com/" target='_blank'>
                                <img src={GitHub} />
                            </a><br/>
                            <a href="https://www.netlify.com/" target='_blank'>
                                <img src={Netlify} />
                            </a>
                            
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">Programming Languages</div>
                            <a href="https://www.w3schools.com/html/" target='_blank'>
                                <img src={HTML5} alt="" />
                            </a>
                            <a href="https://www.css3.com/" target='_blank'>
                                <img src={CSS3} alt="" />
                            </a>
                            <a href="https://www.javascript.com/" target='_blank'>
                                <img src={JavaScript} alt="" />
                            </a>
                            <a href="https://sass-lang.com/" target='_blank'>
                                <img src={Sass} alt="" />
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Skills;