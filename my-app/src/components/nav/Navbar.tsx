import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "./Navbar.css"

const Navbar = () => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "nb" : "en"
    i18n.changeLanguage(newLang)
  }

  return (
    <nav aria-label={t("nav.language")}>
      <div className="navigationLogo">
        <Link to="/">{t("nav.logo")}</Link>
      </div>
      <div className="rightNav">
        <button
          type="button"
          className="languageToggle"
          onClick={toggleLanguage}
          aria-label={t("nav.switchTo")}
        >
          {i18n.language === "en" ? "NO" : "EN"}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
