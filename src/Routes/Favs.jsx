import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { theme } = useContext(ContextGlobal);

  const favs = JSON.parse(localStorage.getItem("favs")) ?? [];

  return (
    <div
      className="home"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.font,
        height: favs.length !== 0 ? "":"100%"
      }}
    >
      <h1>Favs</h1>
      <div className="card-grid">
        {favs &&
          favs.map((dentist, index) => (
            <Card
              key={index}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Favs;
