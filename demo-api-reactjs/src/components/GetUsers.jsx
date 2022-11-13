import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users`)
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mt-5">
      <div className="mb-5">
        <h5 className="d-inline-block me-3">Add user here:</h5>
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/adduser");
          }}>
          Create
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Birthday</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((e) => (
            <tr key={e.id} className="align-middle">
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.birthday}</td>
              <td>
                <button className="btn btn-primary me-3">Edit</button>
                <button className="btn btn-warning">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetUsers;
