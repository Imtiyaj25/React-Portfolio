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

import "./style.css";
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
                            <img src={Next} />
                            <img src={ReactJS} /><br/>
                            <img src={NodeJS} />
                            <img src={ExpressJS} />
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">Hosting Platforms</div>
                            <img src={GitHub} /><br/>
                            <img src={Netlify} />
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">Programming Languages</div>
                            <img src={HTML5} alt="" />
                            <img src={CSS3} alt="" />
                            <img src={JavaScript} alt="" />
                            <img src={Sass} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Skills;