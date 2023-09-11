import React from "react";
import Card from "../Components/Card";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { apiData } = useContext(ContextGlobal);

  return (
    <main className="home">
      <h1>Home</h1>
      <div className="card-grid">
        {apiData.map((dentist, index) => (
          <Card
            key={index}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
