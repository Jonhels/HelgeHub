import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
    const logout = useLogout();

    return (
        <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={logout}>Logout</button>
        </nav>
    );
};

export default Navbar;
