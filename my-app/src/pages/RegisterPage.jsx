import React, { useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import "./styles/RegisterPage.css";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/register", { name, email, password });
            setSuccess(response.data.message);
            setError(""); // Clear any previous errors
        } catch (err) {
            setError(err.response?.data?.error || "Registration failed.");
            setSuccess(""); // Clear any previous success messages
        }
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Register</button>
            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <p>
                Already have an account?{" "}
                <Link to="/login">Login here</Link>
            </p>
        </div>
    );
};

export default RegisterPage;
