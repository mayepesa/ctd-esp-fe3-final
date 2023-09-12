import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { ContextGlobal } from "../utils/global.context";

const Card = ({ name, username, id }) => {
  const { theme } = useContext(ContextGlobal);
  const addFav = (e, name, username, id) => {
    e.stopPropagation();
    e.preventDefault();
    const currentDentist = { name: name, username: username, id: id };
    let currentFavs = JSON.parse(localStorage.getItem("favs")) ?? [];
    let dentistArray = currentFavs.filter((item)=> item.id === currentDentist.id)
    if (dentistArray.length !== 0) {
      alert("Este dentista ya se encuentra en Favs.");
      return;
    } else {
      currentFavs = [...currentFavs, currentDentist];
      localStorage.setItem("favs", JSON.stringify(currentFavs));
      alert("¡Este dentista se agregó a Favs con éxito!");
      return;
    }
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
      <button
        onClick={(e) => addFav(e, name, username, id)}
        className="favButton"
      >
        Add fav
      </button>
    </Link>
  );
};

export default Card;
