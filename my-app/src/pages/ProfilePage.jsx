import React, { useState, useContext } from "react";
import api from "../api/api";
import AuthContext from "../context/AuthContext";

const ProfilePage = () => {
    const { user, setUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.name || "");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await api.put("/update", { name, password });
            setUser(response.data.user);
            setSuccess("Profile updated successfully.");
        } catch (err) {
            setError(err.response?.data?.error || "Update failed.");
        }
    };

    return (
        <div>
            <h1>Profile</h1>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="New Password"
                />
                <button type="submit">Update Profile</button>
            </form>
            {success && <p>{success}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default ProfilePage;
