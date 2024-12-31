import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import api from "../api/api";

const LoginPage = () => {
    const { user, setUser, loading } = useContext(AuthContext); // Include loading state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // Separate loading for form submission
    const navigate = useNavigate();

    // Redirect to the dashboard if the user is already logged in
    useEffect(() => {
        if (!loading) {
            if (user) {
                console.log("User is logged in, redirecting to dashboard...");
                navigate("/dashboard");
            } else {
                console.log("No user logged in.");
            }
        }
    }, [loading, user, navigate]);
    
    

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Both email and password are required.");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await api.post("/login", { email, password });
            setUser(response.data.user);
            navigate("/dashboard");
        } catch (err) {
            setError(err.response?.data?.error || "Login failed.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        // Show a loading spinner while checking authentication state
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
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
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Logging in..." : "Login"}
                </button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <p>
                Don't have an account?{" "}
                <Link to="/register">Register here</Link>
            </p>
        </div>
    );
};

export default LoginPage;
