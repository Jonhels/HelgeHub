import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../api/api";

const PasswordResetPage = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const [newPassword, setNewPassword] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(`/reset-password?token=${token}`, { newPassword });
            setSuccess(response.data.message);
        } catch (err) {
            setError(err.response?.data?.error || "Password reset failed.");
        }
    };

    return (
        <div>
            <h1>Reset Password</h1>
            <form onSubmit={handlePasswordReset}>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Password"
                />
                <button type="submit">Reset Password</button>
            </form>
            {success && <p>{success}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default PasswordResetPage;
