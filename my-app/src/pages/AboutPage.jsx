import React from "react";
import "./styles/About.css";
import iphone from "../assets/iPhone.svg"; // iPhone mockup image
import email from "../icons/at-sign.svg"; // Email icon
import github from "../icons/github.svg"; // GitHub icon
import linkedin from "../icons/linkedin.svg"; // LinkedIn icon

const AboutPage = () => {
    return (
        <div className="about-container">
            <div className="about-text">
                <h1>About me</h1>

                <section>
                    <h2>Webdeveloper</h2>
                    <p>
                        I'm currently studying web development at NTNU, focusing on building modern and user-friendly web applications. My education covers front-end and back-end development, UI/UX design, and frameworks such as React and Vue. I enjoy working on interactive and accessible web solutions.
                    </p>
                </section>

                <section>
                    <h2>Certified Computer Electronics Specialist</h2>
                    <p>
                        I have my certification as a <strong>Dataelektroniker</strong>, specializing in the installation, maintenance, and troubleshooting of IT and electronic systems. My background includes working with network infrastructure, embedded systems, and computer hardware.
                    </p>
                </section>

                <section>
                    <h2>Hobbies</h2>
                    <p>
                        In my free time, I like walking outside around the city I live in. I'm passionate about animals and enjoy outdoor activities such as having a day outside looking at birds, dogs and cats in the park. I also like playing video games and working on design projects in Figma.
                    </p>
                </section>

                <section>
                    <h2>Future Plans and Education</h2>
                    <p>
                        I plan to continue expanding on my knowledge in both web development, design and computer electronics, exploring opportunities in full-stack development, IoT (Internet of Things) and DevOps. My goal is to grow further and now start a master degree in something I find enjoyable.
                    </p>
                </section>

                <div className="contact-icons">
                    <a href="https://github.com/Jonhels" target="_blank" rel="noopener noreferrer">
                        
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/jon-helge-skj%C3%A6rstein-a84107231/" target="_blank" rel="noopener noreferrer">
                       
                        LinkedIn
                    </a>
                    <a href="mailto:jon.helge@skjaerstein.com">
                        
                        Email
                    </a>
                </div>
            </div>

            <div className="about-image">
                <img src={iphone} alt="iPhone mockup" />
            </div>
        </div>
    );
};

export default AboutPage;
