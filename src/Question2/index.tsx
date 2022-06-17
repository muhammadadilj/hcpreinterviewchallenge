import React, { useState, useEffect } from "react";
import { getDeliveries } from "./network";

export const Question2 = () => {
  const [deliveriesData, setDeliveriesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getDeliveries();
      setDeliveriesData(data);
    }
    fetchData();
  }, []);

  return (
    <table className="table table-striped table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Amount</th>
          <th scope="col">ETA</th>
          <th scope="col">Status</th>
        </tr>
      </thead>

      <tbody>
        {deliveriesData.map((delivery) => {
          return (
            <tr>
              <td>{delivery.id}</td>
              <td>{delivery.name}</td>
              <td>{delivery.amount}</td>
              <td>{delivery.eta}</td>
              <td>{delivery.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
