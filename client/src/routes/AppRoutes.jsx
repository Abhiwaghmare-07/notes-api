import { Routes, Route } from "react-router-dom";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import Dashboard from "../pages/Dashboard/Dashboard";
import NotesList from "../pages/Notes/NotesList";
import CreateNote from "../pages/Notes/CreateNote";
import EditNote from "../pages/Notes/EditNote";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/notes"
        element={
          <ProtectedRoute>
            <MainLayout>
              <NotesList />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/notes/create"
        element={
          <ProtectedRoute>
            <MainLayout>
              <CreateNote />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/notes/edit/:id"
        element={
          <ProtectedRoute>
            <MainLayout>
              <EditNote />
            </MainLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
