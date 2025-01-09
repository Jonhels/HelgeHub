import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link from React Router
import AuthContext from "../context/AuthContext";
import api from "../api/api";
import Header from "../components/header/Header";
import { Helmet } from "react-helmet-async"

const HomePage = () => {

  const location = useLocation();
  const isJonHelgePage = location.pathname === "/jon-helge";
  return (
    <div className="home" style={{ width: "100%", height: "100%" }}>
      |<Helmet>
        <title>{isJonHelgePage ? "Jon Helge | Skjærstein" : "Skjærstein | Home"}</title>
        <meta name="description"
          content={isJonHelgePage ? "Explore Jon Helge's portfolio for innovative web development and design solutions."
            : "Welcome to Skjærstein, where innovative design meets scalable functionality."
          }
        />
      </Helmet>
      <Header />
    </div>
  );
};

export default HomePage;
