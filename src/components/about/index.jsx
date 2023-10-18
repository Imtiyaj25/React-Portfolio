import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/software-dev.png";
import Section from "../shared/section";
import Resume from "../../download/Imtiyaj Sayyad Resume.pdf";

import "./style.scss";

const About = () => {
    return (
        <Section
            background="dark"
            id="About"
        >
            <div className="about-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2>About me..!</h2>
                    <p>
                        I loved programming, so I started web development and improved my skills. This forced me to create somthing new everyday and made me a little bit better with every website.
                        I always has the interest in technology and the IT field
                        is one of the fastest growing profession. So I decided
                        to make my career in the IT field and started to
                        learning new technologies, programming skills and
                        website development Technologies. In this journey I have
                        created some websites all these hosted on my GitHub
                        account. You can cheack my those websites in my
                        portfolio section.
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default About;
