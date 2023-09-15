import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Footer = () => {
  const { theme } = useContext(ContextGlobal);

  return (
    <footer style={{ backgroundColor: theme.navBackground, color: theme.font }}>
      <div className="dhContainer">
        <p>Powered by</p>
        <img src="/images/DH.png" alt="DH-logo" className="dhLogo" />
      </div>
      <div>
        <img
          className="socialIcon"
          src="/images/ico-facebook.png"
          alt="DH-facebookLogo"
        />
        <img
          className="socialIcon"
          src="/images/ico-instagram.png"
          alt="DH-instagramLogo"
        />
        <img
          className="socialIcon"
          src="/images/ico-whatsapp.png"
          alt="DH-whatsappLogo"
        />
        <img
          className="socialIcon"
          src="/images/ico-tiktok.png"
          alt="DH-tiktokLogo"
        />
      </div>
    </footer>
  );
};

export default Footer;
