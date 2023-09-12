import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../utils/global.context";
import "./styles.css";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(ContextGlobal);

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
            onClick={handleChangeTheme}
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
            onClick={handleChangeTheme}
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
