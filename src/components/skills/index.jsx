import React from 'react';

import Next from "../../images/nextjs.png";
import ReactJS from "../../images/react.png";
import NodeJS from "../../images/nodejs1.png";
import ExpressJS from "../../images/expressJS.png";
import GitHub from "../../images/github.png";
import Render from "../../images/render.png";
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
                            <div className="text">Front-End</div>
                            <div className="items">
                                <a rel="noreferrer" href="https://nextjs.org/" target='_blank'>
                                    <img src={Next} alt='something wrong'/><p>Next JS</p>
                                </a>
                                <a rel="noreferrer" href="https://react.dev/" target='_blank'>
                                    <img src={ReactJS} alt='something wrong'/><p>React JS</p>
                                </a><br/>
                                <a rel="noreferrer" href="https://nodejs.org/en" target='_blank'>
                                    <img src={NodeJS} alt='something wrong'/><p>Node JS</p>
                                </a>
                                <a rel="noreferrer" href="https://expressjs.com/" target='_blank'>
                                    <img src={ExpressJS} alt='something wrong'/><p>Express JS</p>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">Hosting Platforms</div>
                            <a rel="noreferrer" href="https://pages.github.com/" target='_blank'>
                                <img src={GitHub} alt='something wrong'/>
                            </a><br/>
                            <a rel="noreferrer" href="https://www.render.com/" target='_blank'>
                                <img src={Render} alt='something wrong'/>
                            </a>
                            
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">Programming Languages</div>
                            <a rel="noreferrer" href="https://www.w3schools.com/html/" target='_blank'>
                                <img src={HTML5} alt='something wrong' />
                            </a>
                            <a rel="noreferrer" href="https://www.css3.com/" target='_blank'>
                                <img src={CSS3} alt='something wrong' />
                            </a>
                            <a rel="noreferrer" href="https://www.javascript.com/" target='_blank'>
                                <img src={JavaScript} alt='something wrong' />
                            </a>
                            <a rel="noreferrer" href="https://sass-lang.com/" target='_blank'>
                                <img src={Sass} alt='something wrong' />
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Skills;