import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <Link to={`/detail/${id}`}>
      <div className="card">
        <img src="/images/doctor.jpg" alt="doc-img" />

        <p>Name: {name}</p>
        <p>Username: {username}</p>
        <p>Id: {id}</p>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      </div>
    </Link>
  );
};

export default Card;
