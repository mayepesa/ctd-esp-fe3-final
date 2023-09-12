import React from "react";
import Card from "../Components/Card";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";


const Home = () => {
  const { apiData, theme } = useContext(ContextGlobal);

  return (
    <main
      className="home"
      style={{ backgroundColor: theme.backgroundColor, color: theme.font }}
    >
      <h1>Dentistas</h1>
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
