import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const { theme, favs, handleChangeFavs } = useContext(ContextGlobal);
  const currentDentist = { name: name, username: username, id: id };

  const addFav = (e, dentist) => {
    e.stopPropagation();
    e.preventDefault();
    handleChangeFavs(dentist);
  };

  const isFav = () => {
    const isInFavs = favs.find((el) => el.name === currentDentist.name);
    if (isInFavs) return true;
    return false;
  };

  return (
    <Link
      to={`/detail/${id}`}
      className="card"
      style={{ backgroundColor: theme.cardBackground, color: theme.font }}
    >
      <img src="/images/doctor.jpg" alt="doc-img" />
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Username: </b>
        {username}
      </p>
      <div>
        {isFav() ? (
          <img
            className="star"
            onClick={(e) => addFav(e, currentDentist)}
            src="/images/star-full.png"
            alt="star"
          />
        ) : (
          <img
            className="star"
            onClick={(e) => addFav(e, currentDentist)}
            src="/images/star-empty.png"
            alt="star"
          />
        )}
      </div>
    </Link>
  );
};

export default Card;
