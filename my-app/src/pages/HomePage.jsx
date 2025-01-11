import React from "react";
import { useLocation } from "react-router-dom"; // Import Link from React Router
import { Helmet } from "react-helmet-async";
import Header from "../components/header/Header";
import "./styles/HomePage.css";
import illustration from "../icons/mobile.svg"

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
          <div className="article2__content">
            <div className="article__text_wrapper">
              <div className="article__text">
                <h3>Scalable Web Solutions with Creative Precision</h3>
                <p>
                  I craft scalable, efficient, and user-friendly web solutions. With skills in React, Node.js, and design tools like Figma, I combine creativity and precision to deliver impactful results. Whether you need a dynamic web application, a modern online presence, or an intuitive user interface, I'm here to bring your vision to life.
                </p>
              </div>
              <div className="article__text">
                <h3>Streamlined Processes, Reliable Solutions</h3>
                <p>
                  I utilize modern tools and workflows to ensure efficiency and reliability in every project. With Docker, I create containerized environments for seamless deployment. CI/CD pipelines, powered by GitHub Actions, ensure smooth integration and delivery. Hosting platforms like Railway allow me to deploy scalable, production-ready applications. My focus is on delivering solutions that are robust, maintainable, and adaptable.
                </p>
              </div>
              <div className="article__text">
                <h3>Designing for Impact, Developing for Scale</h3>
                <p>
                  Great development is a balance of creativity and precision. My approach combines a user-focused design mindset with a commitment to building scalable, efficient systems. Every line of code and design decision is crafted with purpose to create seamless experiences that solve real-world problems and empower users.
                </p>
              </div>
            </div>
            <img src={illustration} alt="Illustration" className="article__image" />
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
