import React from "react";
import { useLocation } from "react-router-dom"; // Import Link from React Router
import { Helmet } from "react-helmet-async";
import Header from "../components/header/Header";
import "./styles/HomePage.css";

const HomePage = () => {
  const location = useLocation();
  const isJonHelgePage = location.pathname === "/jon-helge";

  return (
    <div className="home" style={{ width: "100%", height: "100%" }}>
      <Helmet>
        <title>{isJonHelgePage ? "Jon Helge | Skjærstein" : "Skjærstein | Home"}</title>
        <meta
          name="description"
          content={
            isJonHelgePage
              ? "Explore Jon Helge's portfolio for innovative web development and design solutions."
              : "Welcome to Skjærstein, where innovative design meets scalable functionality."
          }
        />
      </Helmet>
      <div className="home__header">
        <Header />
      </div>
      <div className="home__content">
        <article className="article article1">
          <h2>
            <span>Skjærstein</span> creates you
          </h2>
        </article>
        <article className="article article2">
          <div className="article__content">
            <p>test</p>
          </div>
        </article>
        <article className="article article3">
          <h2>
            <span>Where Innovative design</span> meets seamless functionality
          </h2>
        </article>
        <article className="article article4">
          <div className="article__content">
            <p>test</p>
          </div>
        </article>
        <article className="article article5">
          <h2>
            <span>Building scalable solutions</span> with elegance
          </h2>
        </article>
        <article className="article article6">
          <div className="article__content">
            <p>test</p>
          </div>
        </article>
        <article className="article article7">
          <h2>
            <span>Let’s shape the future,</span> together
          </h2>
        </article>
        <article className="article article8">
          <div className="article__content">
            <p>test</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default HomePage;
