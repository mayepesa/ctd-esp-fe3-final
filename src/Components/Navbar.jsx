import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(ContextGlobal);

  return (
    <nav style={{ backgroundColor: theme.navBackground, color: theme.font }}>
      <h1>DH ODONTO</h1>
      <div>
        <Link style={{ color: theme.font }} to="/home">
          Home
        </Link>
        <Link style={{ color: theme.font }} to="/favs">
          Favs
        </Link>
        <Link style={{ color: theme.font }} to="/contact">
          Contact
        </Link>

        {theme.backgroundColor === "black" ? (
          <button
            className="theme-btn"
            onClick={handleChangeTheme}
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <img src="/images/contrast.png" alt="night" />
          </button>
        ) : (
          <button
            className="theme-btn"
            onClick={handleChangeTheme}
            style={{
              backgroundColor: "black",
            }}
          >
            <img src="/images/night.png" alt="night" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
