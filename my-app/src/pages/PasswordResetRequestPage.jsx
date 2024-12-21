import React, { useState } from "react";
import api from "../api/api";

const PasswordResetRequestPage = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handlePasswordResetRequest = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/password-reset-request", { email });
            setSuccess(response.data.message);
        } catch (err) {
            setError(err.response?.data?.error || "Failed to send password reset request.");
        }
    };

    return (
        <div>
            <h1>Password Reset Request</h1>
            <form onSubmit={handlePasswordResetRequest}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <button type="submit">Send Reset Link</button>
            </form>
            {success && <p>{success}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default PasswordResetRequestPage;
