import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import AuthContext from "../context/AuthContext";
import api from "../api/api";

const HomePage = () => {

    return (
        <div>
            hello
            <Link to="/login">Login here</Link>
            <Link to="/register">Register here</Link>
            <Link to="/password-reset-request">Forgot password?</Link>
        </div>
    );
};

export default HomePage;
