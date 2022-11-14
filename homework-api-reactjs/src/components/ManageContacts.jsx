import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./contact.css";

const ManageContacts = () => {
  const [listContacts, setListContacts] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/contacts`).then((res) => {
      setListContacts(res.data);
    });
  }, []);
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate(`/createcontact`);
  };
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h2>Contacts</h2>
        <button className="btn btn-success px-5" onClick={handleCreate}>
          Add Contact
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listContacts.map((e) => (
            <tr key={e.id} className="align-middle">
              <td>
                <img
                  src={e.img.Url}
                  alt=""
                  className="avatar-thumbnail rounded-circle me-3"
                />
                {e.username}
              </td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
              <td>
                <button className="btn btn-primary me-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageContacts;
