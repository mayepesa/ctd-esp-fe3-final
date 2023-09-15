import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { theme } = useContext(ContextGlobal);

  const [dentistData, setDentistData] = useState({});

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
    <div
      className="detail"
      style={{ backgroundColor: theme.backgroundColor, color: theme.font }}
    >
      <h1>Detail Dentist with id: {dentistData.id}</h1>

      <table style={{ width: 700 }}>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Detail:</th>
            <th>Phone:</th>
            <th>Website:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentistData.name}</td>
            <td>{dentistData.email}</td>
            <td>{dentistData.phone}</td>
            <td>{dentistData.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
