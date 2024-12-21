import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../api/api";

const VerifyEmailPage = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await api.get(`/verify-email?token=${token}`);
                setSuccess(response.data.message);
            } catch (err) {
                setError(err.response?.data?.error || "Email verification failed.");
            }
        };
        verifyEmail();
    }, [token]);

    return (
        <div>
            <h1>Verify Email</h1>
            {success && <p>{success}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default VerifyEmailPage;
