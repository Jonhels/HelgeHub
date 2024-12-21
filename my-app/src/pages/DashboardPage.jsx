import React from "react";
import useLogout from "../hooks/useLogout";

const DashboardPage = () => {
    const logout = useLogout();

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default DashboardPage;
