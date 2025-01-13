import React from "react";
import useLogout from "../hooks/useLogout";
import "./styles/Dashboard.css";

const DashboardPage = () => {
    const logout = useLogout();

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-heading">Dashboard</h1>
            <button className="dashboard-logout-button" onClick={logout}>
                Logout
            </button>
        </div>
    );
};

export default DashboardPage;
