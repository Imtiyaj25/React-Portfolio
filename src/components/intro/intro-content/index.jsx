import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import girl from "../../../images/girl.png";
import boy from "../../../images/boy.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const IntroContent = () => {
    let [text]=useTypewriter({
        words:[" Software Engineer", "Web Developer"],
        loop:{}
    })
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Imtiyaj Sayyad</span>
                        <span className="text-1"><span className="typing">{text}</span><Cursor/></span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
