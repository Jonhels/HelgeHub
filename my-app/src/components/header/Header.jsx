import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="headerInformation">
                <h1 className="headerInformation__title">Jon Helge Skjærstein</h1>
                <p className="headerInformation__subtitle">
                    Certified Computer Electronics Specialist | Bachelor's in Web Development | Full-Stack Web Developer
                </p>
            </div>
            <div className="headerContactWrapper">
                <div className="headerContact">
                    <p className="headerContact__text">
                        Creating innovative, user-friendly web experiences through clean design and efficient code
                    </p>
                    <Link to="/contact" className="headerContact__link">Contact me</Link>
                </div>
            </div>
        </div>
    );
};


export default Header;
