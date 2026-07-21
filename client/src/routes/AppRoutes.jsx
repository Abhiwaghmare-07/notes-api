import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotesList from "../pages/Notes/NotesList";
import CreateNote from "../pages/Notes/CreateNote";
import EditNote from "../pages/Notes/EditNote";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* App Layout */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notes" element={<NotesList />} />
        <Route path="/notes/create" element={<CreateNote />} />
        <Route path="/notes/edit/:id" element={<EditNote />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
