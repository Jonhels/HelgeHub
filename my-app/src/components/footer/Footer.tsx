import { useTranslation } from "react-i18next"
import "./Footer.css"
import email from "../../icons/at-sign.svg"
import github from "../../icons/github.svg"
import linkedin from "../../icons/linkedin.svg"

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className="footer">
      <div className="footerLinks">
        <p>{t("footer.copyright")}</p>
      </div>
      <div className="socialIcons">
        <div className="iconWithLabel">
          <a
            href="https://github.com/Jonhels"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footer.social.githubLabel")}
          >
            <img src={github} alt={t("footer.social.github")} />
          </a>
          <span>{t("footer.social.github")}</span>
        </div>
        <div className="iconWithLabel">
          <a
            href="https://www.linkedin.com/in/jon-helge-skj%C3%A6rstein-a84107231/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footer.social.linkedinLabel")}
          >
            <img src={linkedin} alt={t("footer.social.linkedin")} />
          </a>
          <span>{t("footer.social.linkedin")}</span>
        </div>
        <div className="iconWithLabel">
          <a
            href="mailto:jon.helge@skjaerstein.com"
            aria-label={t("footer.social.emailLabel")}
          >
            <img src={email} alt={t("footer.social.email")} />
          </a>
          <span>{t("footer.social.email")}</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
