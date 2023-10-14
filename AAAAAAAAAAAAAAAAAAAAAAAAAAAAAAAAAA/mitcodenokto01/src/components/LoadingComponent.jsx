import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

// https://jsonplaceholder.typicode.com/users
function LoadingComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");// https://reqres.in/api/users
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    setTimeout(() => fetchData(), 5000);
  }, []);

  if (loading) {// if useEffect loading view Spinner
    return <Spinner />;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default LoadingComponent;
// if map-method properti have to be a array