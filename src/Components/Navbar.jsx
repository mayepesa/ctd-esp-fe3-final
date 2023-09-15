import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(ContextGlobal);

  const onClick = () => {
    handleChangeTheme(theme)
  }
  return (
    <nav style={{ backgroundColor: theme.navBackground, color: theme.font }}>
      <h1>DH ODONTO</h1>
      <div>
        <Link style={{ color: theme.font }} to="/home" className="link">
          Home
        </Link>
        <Link style={{ color: theme.font }} to="/favs" className="link">
          Favs
        </Link>
        <Link style={{ color: theme.font }} to="/contact" className="link">
          Contact
        </Link>

        {theme.font === "white" ? (
          <button
            className="themeBtn"
            onClick={onClick}
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <img
              src="/images/contrast.png"
              alt="contrast"
              className="themeBtnIcon"
            />
          </button>
        ) : (
          <button
            className="themeBtn"
            onClick={onClick}
            style={{
              backgroundColor: "black",
            }}
          >
            <img src="/images/night.png" alt="night" className="themeBtnIcon" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
