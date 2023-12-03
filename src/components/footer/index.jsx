import React from "react";
import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
    FaHackerrank,
    // FaStackOverflow,
    // FaInstagram,
} from "react-icons/fa";

import Section from "../shared/section";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

import "./style.scss";

const Footer = () => {
    return (
        <Section
            background="light"
            className="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                <a>Say<span className="logo">yad.</span></a>
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("blogs")}
                    >
                        Blogs & Articles
                    </li>
                    <li
                        className="footer-menu-item"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcon
                        color="#FF0000"
                        icon={<FaYoutube />}
                        link="https://youtube.com/@imtiyajsayyad8576?si=4q5CHF2QPLG_fJMv"
                    />
                    <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://github.com/Imtiyaj25"
                    />
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedinIn />}
                        link="https://linkedin.com/in/imtiyaj-sayyad-39b934212"
                    />
                    <SocialIcon
                        color="#f2740d"
                        icon={<FaHackerrank />}
                        link="https://www.hackerrank.com/imtiyajsayyad97"
                    />
                    {/* <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                    /> */}
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2023 Imtiyaj Sayyad | All Rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
