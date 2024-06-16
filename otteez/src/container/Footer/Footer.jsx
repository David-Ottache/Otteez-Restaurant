import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          Plot 481B Kufang Village Opp. Believers High School Jos Plateau State
        </p>
        <p className="p__opensans">+234-817 26 99 651</p>
        <p className="p__opensans">+234-903 01 28 598</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          "The best way to lose yourself is to love yourself in the service of
          others"
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans"> Monday - Friday   </p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans"> Saturday - Sunday</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>

      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Otteez Tech. All rights reserved </p>
    </div>
  </div>
);

export default Footer;
