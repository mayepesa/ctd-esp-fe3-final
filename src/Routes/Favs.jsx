import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { theme, favs, handleRemoveFavs } = useContext(ContextGlobal);

  return (
    <div
      className="home"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.font,
        height: favs?.length !== 0 ? "" : "100%",
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
      <button
        className="removeBtn"
        onClick={handleRemoveFavs}
        style={{ color: theme.font }}
      >
        Remove all favorites
      </button>
    </div>
  );
};

export default Favs;
