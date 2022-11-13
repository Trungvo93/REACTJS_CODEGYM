import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./AddUser";
import GetUsers from "./GetUsers";
const RouterUsers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetUsers />}></Route>
        <Route path="/adduser" element={<AddUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterUsers;
