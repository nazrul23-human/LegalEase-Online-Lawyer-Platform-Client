import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        
            <nav className="text-white fixed top-0 left-0 w-full z-50 bg-blue-600 shadow-md">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold">
                    LegalEase
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-yellow-400">Home</Link>
                    <Link to="/browse-lawyers" className="hover:text-yellow-400">Browse Lawyers</Link>
                    <Link to="/dashboard" className="hover:text-yellow-400">Dashboard</Link>
                    <Link to="/login" className="hover:text-yellow-400">Login</Link>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-white"
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
                    <Link to="/login" className="block">Login</Link>
                </div>
            )}
            
        </nav>
    );
}