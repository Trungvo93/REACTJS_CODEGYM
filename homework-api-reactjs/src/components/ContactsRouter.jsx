import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateContact from "./CreateContact";
import ManageContacts from "./ManageContacts";
const ContactsRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ManageContacts />}></Route>
          <Route path="/createcontact" element={<CreateContact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ContactsRouter;
