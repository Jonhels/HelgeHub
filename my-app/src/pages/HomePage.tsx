import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"
import { useTranslation, Trans } from "react-i18next"
import Header from "../components/header/Header"
import "./styles/HomePage.css"
import check from "../icons/check.svg"
import illustration from "../icons/mobile.svg"
import puzzle from "../icons/puzzle.svg"
import cogwheel from "../icons/settings.svg"
import shield from "../icons/shield.svg"
import trending from "../icons/trending-up.svg"
import umbrella from "../icons/umbrella.svg"
import user from "../icons/user.svg"

const HomePage = () => {
  const location = useLocation()
  const isJonHelgePage = location.pathname === "/jon-helge"
  const { t, i18n } = useTranslation()

  return (
    <div className="home" style={{ width: "100%", height: "100%" }}>
      <Helmet>
        <html lang={i18n.language} />
        <title>
          {isJonHelgePage
            ? t("homepage.meta.titleAlt")
            : t("homepage.meta.titleDefault")}
        </title>
        <meta
          name="description"
          content={
            isJonHelgePage
              ? t("homepage.meta.descriptionAlt")
              : t("homepage.meta.descriptionDefault")
          }
        />
      </Helmet>
      <div className="home__header">
        <Header />
      </div>

      <div className="home__content">
        <article className="article article1">
          <h2>
            <Trans
              i18nKey="homepage.articles.1.headline"
              components={[<span key="0" />]}
            />
          </h2>
        </article>

        <article className="article article2">
          <div className="article__content">
            <div className="article__text_wrapper">
              <div className="article__text">
                <h3>{t("homepage.articles.2.heading1")}</h3>
                <p>{t("homepage.articles.2.body1")}</p>
              </div>
              <div className="article__text">
                <h3>{t("homepage.articles.2.heading2")}</h3>
                <p>{t("homepage.articles.2.body2")}</p>
              </div>
              <div className="article__text">
                <h3>{t("homepage.articles.2.heading3")}</h3>
                <p>{t("homepage.articles.2.body3")}</p>
              </div>
            </div>
            <img
              src={illustration}
              alt="Illustration"
              className="article__image"
            />
          </div>
        </article>

        <article className="article article3">
          <h2>
            <Trans
              i18nKey="homepage.articles.3.headline"
              components={[<span key="0" />]}
            />
          </h2>
        </article>

        <article className="article article4">
          <div className="article__content_centered">
            <div className="article__text_wrapper">
              <div className="article__text article__text_flex">
                <img className="article__icon" src={user} alt="user" />
                <div>
                  <h3>{t("homepage.articles.4.heading1")}</h3>
                  <p>{t("homepage.articles.4.body1")}</p>
                </div>
              </div>
              <div className="article__text article__text_flex">
                <img className="article__icon" src={check} alt="check" />
                <div>
                  <h3>{t("homepage.articles.4.heading2")}</h3>
                  <p>{t("homepage.articles.4.body2")}</p>
                </div>
              </div>

              <div className="article__text article__text_flex">
                <img className="article__icon" src={shield} alt="shield" />
                <div>
                  <h3>{t("homepage.articles.4.heading3")}</h3>
                  <p>{t("homepage.articles.4.body3")}</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="article article5">
          <h2>
            <Trans
              i18nKey="homepage.articles.5.headline"
              components={[<span key="0" />]}
            />
          </h2>
        </article>

        <article className="article article6">
          <div className="article__content article__content_flex_reverse">
            <div className="article__text_wrapper">
              <div className="article__text article__text_flex">
                <img className="article__icon" src={trending} alt="Trending" />
                <div>
                  <h3>{t("homepage.articles.6.heading1")}</h3>
                  <p>
                    <Trans
                      i18nKey="homepage.articles.6.body1"
                      components={[
                        <span className="highlight" key="0" />,
                      ]}
                    />
                  </p>
                </div>
              </div>
              <div className="article__text article__text_flex">
                <img className="article__icon" src={cogwheel} alt="cogwheel" />
                <div>
                  <h3>{t("homepage.articles.6.heading2")}</h3>
                  <p>
                    <Trans
                      i18nKey="homepage.articles.6.body2"
                      components={[
                        <span className="highlight" key="0" />,
                      ]}
                    />
                  </p>
                </div>
              </div>

              <div className="article__text article__text_flex">
                <img className="article__icon" src={umbrella} alt="umbrella" />
                <div>
                  <h3>{t("homepage.articles.6.heading3")}</h3>
                  <p>
                    <Trans
                      i18nKey="homepage.articles.6.body3"
                      components={[
                        <span className="highlight" key="0" />,
                      ]}
                    />
                  </p>
                </div>
              </div>
            </div>
            <img
              src={puzzle}
              alt="Puzzle"
              className="article__image_puzzle"
            />
          </div>
        </article>

        <article className="article article7">
          <h2>
            <Trans
              i18nKey="homepage.articles.7.headline"
              components={[<span key="0" />]}
            />
          </h2>
        </article>

        <article className="article article8">
          <div className="article__content">
            <div className="article__text_wrapper">
              <div className=".article__text_contact">
                <div className="article__contact">
                  <h3>{t("homepage.articles.8.heading1")}</h3>
                  <p>{t("homepage.articles.8.body1")}</p>
                  <a
                    className="articleContact__link"
                    href="mailto:jon.helge@skjaerstein.com"
                  >
                    {t("homepage.articles.8.contactCta")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default HomePage
