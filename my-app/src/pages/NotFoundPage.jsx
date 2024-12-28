import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import AuthContext from "../context/AuthContext";
import api from "../api/api";

const NotFoundPage = () => {

    return (
        <div>
            404
            <Link to="/register">Register here</Link>
        </div>
    );
};

export default NotFoundPage;
