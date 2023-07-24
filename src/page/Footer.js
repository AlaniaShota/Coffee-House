import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";
import { Link } from "react-router-dom";

const facebook = "https://www.facebook.com/profile.php?id=100006923223734";
const instagram = "https://www.instagram.com/alania126/";
const linkedin =
  "https://www.linkedin.com/in/%E1%83%A8%E1%83%9D%E1%83%97%E1%83%90-%E1%83%90%E1%83%9A%E1%83%90%E1%83%9C%E1%83%98%E1%83%90-0a705820b/";
const github = "https://github.com/AlaniaShota";

const Footer = () => {
  return (
    <ul className="footer">
      <li className="footer_list">
        <Link to={facebook} className="linkIcon">
          <FontAwesomeIcon
            icon={faFacebook}
            size="2xl"
            className="brand-icon facebook"
          />
        </Link>
      </li>

      <li className="footer_list">
        <Link to={instagram} className="linkIcon">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2xl"
            className="brand-icon instagram"
          />
        </Link>
      </li>

      <li className="footer_list">
        <Link to={linkedin} className="linkIcon">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xl"
            className="brand-icon linkedin"
          />
        </Link>
      </li>

      <li className="footer_list">
        <Link to={github} className="linkIcon">
          <FontAwesomeIcon
            icon={faGithub}
            size="2xl"
            className="brand-icon github"
          />
        </Link>
      </li>
    </ul>
  );
};

export default Footer;
