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
        <article className="article article1">Article 1</article>
        <article className="article article2">Article 2</article>
        <article className="article article3">Article 3</article>
        <article className="article article4">Article 4</article>
        <article className="article article5">Article 5</article>
        <article className="article article6">Article 6</article>
        <article className="article article7">Article 7</article>
        <article className="article article8">Article 8</article>
      </div>
    </div>
  );
};

export default HomePage;
