import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Close } from "./icons/9110796_x_icon.svg";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faSearchengin,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const handleMenu = () => {
    const wrapper = document.querySelector(".wrapper");
    if (wrapper) {
      wrapper.classList.add("active-popup");
    }
  };
  const HandleClose = () => {
    const wrapper = document.querySelector(".wrapper");
    if (wrapper) {
      wrapper.classList.remove("active-popup");
    }
  };
  const HandleMenuClose = () => {
    const wrapper = document.querySelector(".wrapper");
    if (wrapper) {
      wrapper.classList.remove("active-popup");
    }
  };

  return (
    <div className="nav">
      <div className="container sub-container">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearchengin} className="icon" />
          <input
            type="text"
            placeholder="Search..."
            style={{ color: "white" }}
          />
        </div>
        <h2 className="nameOfBanner">OMY-BLOGS</h2>
        <div className="icons">
          <FontAwesomeIcon className="iconfa" icon={faTwitter} />
          <FontAwesomeIcon className="iconfa" icon={faFacebook} />
          <FontAwesomeIcon className="iconfa" icon={faInstagram} />
        </div>
        <div className="menu-click">
          <FontAwesomeIcon
            icon={faBars}
            className="menu-icon"
            onClick={handleMenu}
          />
        </div>
      </div>
      <section className="section">
        <div className="wrapper">
          <div className="logreg-box">
            <div className="formbox-box login">
              <div className="logreg-title">
                <div className="close" onClick={HandleClose}>
                  <Close className="close-icon" />
                </div>
                <div className="menus">
                  <Link to="/">
                    <h2 className="home" onClick={HandleMenuClose}>
                      Home
                    </h2>
                  </Link>
                  <Link to="/aboutus">
                    <h2 onClick={HandleMenuClose}>About us</h2>
                  </Link>
                  <Link to="/contactus">
                    <h2 onClick={HandleMenuClose}>Contact us</h2>
                  </Link>
                  <Link to="/loginsignup">
                    <h2 className="login" onClick={HandleMenuClose}>
                      LOGIN OR SIGN UP
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
