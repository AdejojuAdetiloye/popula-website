import { FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "../components/nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="logo-title">
        <img
          src={require("../assets/images/popula-logo.png")}
          alt="logo"
          className="logo"
        />
        <h1 className="popula">Popula</h1>
      </div>
      <div className="menus">
        <a href="https://x.com/AAAires135895" target="blank">
          <FaTwitter className="social-media twitter" />
        </a>
        <a href="https://wa.me/+2347067923101" target="blank">
        <FaWhatsapp className="social-media whatsapp" />
        </a>
        <a href="https://www.youtube.com/@populatech" target="blank">
        <FaYoutube className="social-media youtube" />
        </a>
      </div>
    </nav>
  );
}
