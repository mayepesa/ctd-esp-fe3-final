import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentistData, setDentistData] = useState({});

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico params.id
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      ).then((data) => data.json());
      setDentistData(response);
    };
    fetchData();
  }, [params.id]);

  return (
    <>
      <h1>Detail Dentist id {dentistData.id}</h1>
      <p>Name: {dentistData.name}</p>
      <p>Detail: {dentistData.email}</p>
      <p>Phone: {dentistData.phone}</p>
      <p>Website: {dentistData.website}</p>
    </>
  );
};

export default Detail;
