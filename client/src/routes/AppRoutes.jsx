import { Routes, Route } from "react-router-dom";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotesList from "../pages/Notes/NotesList";
import CreateNote from "../pages/Notes/CreateNote";
import EditNote from "../pages/Notes/EditNote";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/notes" element={<NotesList />} />
      <Route path="/notes/create" element={<CreateNote />} />
      <Route path="/notes/edit/:id" element={<EditNote />} />
    </Routes>
  );
};

export default AppRoutes;