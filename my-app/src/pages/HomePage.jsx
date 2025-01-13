import React from "react";
import { useLocation } from "react-router-dom"; // Import Link from React Router
import { Helmet } from "react-helmet-async";
import Header from "../components/header/Header";
import "./styles/HomePage.css";
import illustration from "../icons/mobile.svg"
import puzzle from "../icons/puzzle.svg"
import umbrella from "../icons/umbrella.svg"
import cogwheel from "../icons/settings.svg"
import trending from "../icons/trending-up.svg"
import user from "../icons/user.svg"
import check from "../icons/check.svg"
import shield from "../icons/shield.svg"

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
          <div className="article__content_centered">
            <div className="article__text_wrapper">
              <div className="article__text article__text_flex">
                <img className="article__icon" src={user} alt="user" />
                <div>
                  <h3>User-Centered Design</h3>
                  <p>
                    Every project starts with the user in mind. I prioritize intuitive interfaces that make your users’ journey seamless and enjoyable.
                  </p>
                </div>

              </div>
              <div className="article__text article__text_flex">
                <img className="article__icon" src={check} alt="check" />
                <div>
                  <h3>Efficient Functionality</h3>
                  <p>
                    I develop robust and scalable systems that ensure your applications run smoothly, no matter the load.
                  </p>
                </div>
              </div>

              <div className="article__text article__text_flex">
                <img className="article__icon" src={shield} alt="shield" />
                <div>
                  <h3>Stability You Can Trust</h3>
                  <p>
                    I prioritize building solutions that are robust, secure and maintainable, ensuring your applications are dependable now and in the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="article article5">
          <h2>
            <span>Building scalable solutions</span> with elegance
          </h2>
        </article>

        <article className="article article6">
          <div className="article__content article__content_flex_reverse">
            <div className="article__text_wrapper">
              <div className="article__text article__text_flex">
                <img className="article__icon" src={trending} alt="Trending" />
                <div>
                  <h3>Starting Small, Thinking Big</h3>
                  <p>
                    I create solutions with <span className="highlight">future growth</span> in mind, ensuring that even the smallest projects have room to expand when needed.
                  </p>
                </div>

              </div>
              <div className="article__text article__text_flex">
                <img className="article__icon" src={cogwheel} alt="cogwheel" />
                <div>
                  <h3>Efficiency in Every Step</h3>
                  <p>
                    I use tools like Docker and GitHub Actions to <span className="highlight">streamline development</span>, making sure the process is smooth and efficient.
                  </p>
                </div>
              </div>

              <div className="article__text article__text_flex">
                <img className="article__icon" src={umbrella} alt="umbrella" />
                <div>
                  <h3>Keeping It Simple</h3>
                  <p>
                    <span className="highlight">Simplicity</span> makes solutions easier to maintain and improve. I aim to keep my designs and code clean, so they're easy to work with.
                  </p>
                </div>
              </div>
            </div>
            <img src={puzzle} alt="Puzzle" className="article__image_puzzle" />
          </div>
        </article>

        <article className="article article7">
          <h2>
            <span>Let's shape the future,</span> together
          </h2>
        </article>

        <article className="article article8">
          <div className="article__content">
            <div className="article__text_wrapper">
              <div className=".article__text_contact">
                <div className="article__contact">
                  <h3>Do you like me?</h3>
                  <p>
                    Have a project or an idea in mind? Let's work together to make it happen.
                  </p>
                  <a className="headerContact__link" href="mailto:jon.helge@skjaerstein.com">Contact me</a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default HomePage;
