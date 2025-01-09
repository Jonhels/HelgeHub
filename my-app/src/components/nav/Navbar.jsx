import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import AuthContext from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
    const { user } = useContext(AuthContext); // Access user state from AuthContext
    const logout = useLogout();

    return (
       <nav>
            <ul>
                <li className="navigationLogo">
                    <Link to="/">Skjærstein, Jon Helge</Link>
                </li>
                <li className="contactGrayButton">
                    <Link to="/contact">Contact me</Link>
                </li>
                {user ? (
                    <>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <button onClick={logout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        {/* <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li> */}
                    </>
                )}
            </ul>
        </nav> 
       
    );
};

export default Navbar;
