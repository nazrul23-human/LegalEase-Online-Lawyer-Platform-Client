import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };

    return (

        <nav className="text-white fixed top-0 left-0 w-full z-50 bg-blue-600 shadow-md">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold">
                    LegalEase
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="hover:text-yellow-400">Home</Link>
                    <Link to="/browse-lawyers" className="hover:text-yellow-400">Browse Lawyers</Link>
                    <Link to="/dashboard" className="hover:text-yellow-400">Dashboard</Link>

                    {user ? (
                        <div className="flex items-center gap-3">

                            {/* AVATAR */}
                            <img
                                src={user.photoURL || "https://i.ibb.co/placeholder-avatar.png"}
                                alt="avatar"
                                className="w-14 h-14 rounded-full" />

                            <button
                                onClick={handleLogout}
                                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </div>

                    ) : (
                        <>
                            <Link to="/login" className="hover:text-yellow-300">Login</Link>
                            <Link to="/register" className="bg-white text-blue-600 px-3 py-1 rounded">
                                Register
                            </Link>
                        </>
                    )}

                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-blue-800 px-4 py-3 space-y-2">
                    <Link to="/" className="block">Home</Link>
                    <Link to="/browse-lawyers" className="block">Browse Lawyers</Link>
                    <Link to="/dashboard" className="block">Dashboard</Link>

                    {user ? (
                        <>

                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded text-white transition"
                                >
                                    Logout
                                </button>
                            
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="block">Login</Link>
                            <Link to="/register" className="block">Register</Link>
                        </>
                    )}

                </div>
            )}


        </nav >
    );
}