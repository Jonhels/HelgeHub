import { type FormEvent, useState } from "react"
import { Helmet } from "react-helmet-async"
import { Trans, useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"
import GiftboxCluster from "../components/giftboxes/GiftboxCluster"
import Header from "../components/header/Header"
import Snow from "../components/snow/Snow"
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

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(t("homepage.articles.8.form.subject"))
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )
    window.location.href = `mailto:info@skjaerstein.com?subject=${subject}&body=${body}`
  }

  const closeContactForm = () => {
    setIsFormOpen(false)
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="home" style={{ width: "100%", height: "100%" }}>
      <Snow />
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
          <GiftboxCluster
            articleIndex={1}
            corner="top-left"
            messageKey="homepage.giftboxes.1"
          />
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
          <GiftboxCluster
            articleIndex={2}
            corner="top-right"
            messageKey="homepage.giftboxes.2"
          />
        </article>

        <article className="article article3">
          <h2>
            <Trans
              i18nKey="homepage.articles.3.headline"
              components={[<span key="0" />]}
            />
          </h2>
          <GiftboxCluster
            articleIndex={3}
            corner="top-left"
            messageKey="homepage.giftboxes.3"
          />
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
          <GiftboxCluster
            articleIndex={4}
            corner="top-right"
            messageKey="homepage.giftboxes.4"
          />
        </article>

        <article className="article article5">
          <h2>
            <Trans
              i18nKey="homepage.articles.5.headline"
              components={[<span key="0" />]}
            />
          </h2>
          <GiftboxCluster
            articleIndex={5}
            corner="top-left"
            messageKey="homepage.giftboxes.5"
          />
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
                      components={[<span className="highlight" key="0" />]}
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
                      components={[<span className="highlight" key="0" />]}
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
                      components={[<span className="highlight" key="0" />]}
                    />
                  </p>
                </div>
              </div>
            </div>
            <img src={puzzle} alt="Puzzle" className="article__image_puzzle" />
          </div>
          <GiftboxCluster
            articleIndex={6}
            corner="top-right"
            messageKey="homepage.giftboxes.6"
          />
        </article>

        <article className="article article7">
          <h2>
            <Trans
              i18nKey="homepage.articles.7.headline"
              components={[<span key="0" />]}
            />
          </h2>
          <GiftboxCluster
            articleIndex={7}
            corner="top-left"
            messageKey="homepage.giftboxes.7"
          />
        </article>

        <article className="article article8">
          <div className="article__content">
            <div className="article__text_wrapper">
              <div className="article__text_contact">
                <div className="article__contact">
                  <h3>{t("homepage.articles.8.heading1")}</h3>
                  <p>{t("homepage.articles.8.body1")}</p>

                  {!isFormOpen && (
                    <button
                      type="button"
                      className="articleContact__link"
                      onClick={() => setIsFormOpen(true)}
                    >
                      {t("homepage.articles.8.contactCta")}
                    </button>
                  )}

                  {isFormOpen && (
                    <form
                      id="contactForm"
                      className="articleContact__form"
                      action="mailto:info@skjaerstein.com"
                      method="GET"
                      encType="text/plain"
                      onSubmit={handleContactSubmit}
                    >
                      <div className="articleContact__field">
                        <label htmlFor="contactName">
                          {t("homepage.articles.8.form.nameLabel")}
                        </label>
                        <input
                          id="contactName"
                          name="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t(
                            "homepage.articles.8.form.namePlaceholder",
                          )}
                        />
                      </div>

                      <div className="articleContact__field">
                        <label htmlFor="contactEmail">
                          {t("homepage.articles.8.form.emailLabel")}
                        </label>
                        <input
                          id="contactEmail"
                          name="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t(
                            "homepage.articles.8.form.emailPlaceholder",
                          )}
                        />
                      </div>

                      <div className="articleContact__field">
                        <label htmlFor="contactMessage">
                          {t("homepage.articles.8.form.messageLabel")}
                        </label>
                        <textarea
                          id="contactMessage"
                          name="message"
                          required
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder={t(
                            "homepage.articles.8.form.messagePlaceholder",
                          )}
                        />
                      </div>

                      <div className="articleContact__formActions">
                        <button type="submit" className="articleContact__link">
                          {t("homepage.articles.8.contactCta")}
                        </button>
                        <button
                          type="button"
                          className="articleContact__link articleContact__link--secondary"
                          onClick={closeContactForm}
                        >
                          {t("homepage.articles.8.form.close")}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
          <GiftboxCluster
            articleIndex={8}
            corner="top-right"
            messageKey="homepage.giftboxes.8"
          />
        </article>
      </div>
    </div>
  )
}

export default HomePage
