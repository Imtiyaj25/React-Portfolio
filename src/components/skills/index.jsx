import React from 'react';

import Angular from "../../images/angular.png";
import ReactJS from "../../images/react.png";
import NodeJS from "../../images/node-js.png";
import ExpressJS from "../../images/express-js.png";
import GitHub from "../../images/github.png";
import Render from "../../images/render-logo.png";
import HTML5 from "../../images/html5.png";
import CSS3 from "../../images/css3.png";
import JavaScript from "../../images/JavaScript-logo.png";
import Sass from "../../images/sass.png";
import Java from "../../images/java.svg";
import Python from "../../images/Python-logo.png";
import mongoDB from "../../images/mongodb_logo.png";

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
                                <a rel="noreferrer" href="https://react.dev/" target='_blank'>
                                    <img src={ReactJS} alt='something wrong'/><p>React JS</p>
                                </a>
                                <a rel="noreferrer" href="https://angular.org/" target='_blank'>
                                    <img src={Angular} alt='something wrong'/><p>Angular</p>
                                </a><br/>
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
                    <div className="card">
                        <div className="box">
                            <div className="text">Back-End</div>
                            <div className="items">
                                <a rel="noreferrer" href="https://nodejs.org/en" target='_blank'>
                                    <img src={NodeJS} alt='something wrong'/><p>Node JS</p>
                                </a>
                                <a rel="noreferrer" href="https://expressjs.com/" target='_blank'>
                                    <img src={ExpressJS} alt='something wrong'/><p>Express JS</p>
                                </a>
                                <a rel="noreferrer" href="https://expressjs.com/" target='_blank'>
                                    <img src={mongoDB} alt='something wrong'/><p>mongoDB</p>
                                </a>
                            </div>                            
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">Programming Languages & Other</div>
                            <div className="items">
                                <a rel="noreferrer" href="https://www.java.com/" target='_blank'>
                                    <img src={Java} alt='something wrong'/><p>Java</p>
                                </a>
                                <a rel="noreferrer" href="https://www.python.com/" target='_blank'>
                                    <img src={Python} alt='something wrong'/><p>Python</p>
                                </a>
                                <a rel="noreferrer" href="https://pages.github.com/" target='_blank'>
                                    <img src={GitHub} alt='something wrong'/><p>GitHub</p>
                                </a>
                                <a rel="noreferrer" href="https://www.render.com/" target='_blank'>
                                    <img src={Render} alt='something wrong'/><p>Render</p>
                                </a>
                            </div>                                                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Skills;