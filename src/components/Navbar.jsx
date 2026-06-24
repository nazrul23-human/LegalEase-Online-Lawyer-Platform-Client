import { useAuth } from "../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/browse-lawyers?search=${search}`);
    }
  };

  const activeStyle = (path) =>
    location.pathname === path
      ? "text-yellow-300 font-bold"
      : "text-white";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-600 shadow-md text-white">

      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold">
          LegalEase
        </Link>

        {/* SEARCH BAR (REQUIRED) */}
        <form onSubmit={handleSearch} className="hidden md:flex">
          <input
            type="text"
            placeholder="Search lawyers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-1 rounded-l text-black"
          />
          <button className="bg-yellow-400 text-black px-3 rounded-r">
            Search
          </button>
        </form>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-5">

          <Link to="/" className={activeStyle("/")}>Home</Link>

          <Link to="/browse-lawyers" className={activeStyle("/browse-lawyers")}>
            Browse Lawyers
          </Link>

          <Link to="/dashboard" className={activeStyle("/dashboard")}>
            Dashboard
          </Link>

          {/* AUTH */}
          {user ? (
            <div className="flex items-center gap-3">

              {/* ROLE DROPDOWN READY */}
              <select className="text-black px-2 py-1 rounded">
                <option>User</option>
                <option>Lawyer</option>
                <option>Admin</option>
              </select>

              {/* <span className="text-sm bg-blue-800 px-3 py-1 rounded-full">
                {user.email.split("@")[0]}
              </span> */}

              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>

            </div>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link
                to="/register"
                className="bg-white text-blue-600 px-3 py-1 rounded"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-blue-700 px-4 py-3 space-y-2">

          <Link to="/" className="block">Home</Link>
          <Link to="/browse-lawyers" className="block">Browse Lawyers</Link>
          <Link to="/dashboard" className="block">Dashboard</Link>

          {/* SEARCH MOBILE */}
          <form onSubmit={handleSearch} className="flex mt-2">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-2 py-1 text-black w-full"
            />
            <button className="bg-yellow-400 px-3">Go</button>
          </form>

          {/* AUTH MOBILE */}
          {user ? (
            <div className="mt-2 space-y-2">

              <p className="text-sm">{user.email}</p>

              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded w-full"
              >
                Logout
              </button>

            </div>
          ) : (
            <>
              <Link to="/login" className="block">Login</Link>
              <Link to="/register" className="block">Register</Link>
            </>
          )}

        </div>
      )}

    </nav>
  );
}