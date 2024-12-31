import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div style={{margin: 0, padding: 0, minHeight: "100vh" }}>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
