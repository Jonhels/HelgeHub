import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <div className="navigationLogo">
        <Link to="/">Skjærstein, Jon Helge</Link>
      </div>

    </nav>
  )
}

export default Navbar
