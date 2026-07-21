import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between">
      <Link to="/notes" className="text-xl font-bold">
        Notes App
      </Link>

      <div className="flex gap-5 items-center">
        <Link
          to="/notes/create"
          className="bg-green-600 px-4 py-2 rounded"
        >
          + Create
        </Link>

        <span>{user?.name}</span>

        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;