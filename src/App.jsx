import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRoute";
import Hero from "./components/Hero";
import FeaturedLawyers from "./components/FeaturedLawyers";
import Dashboard from "./pages/Dashboard";

export default function App() {
    const { user } = useAuth();

    return (
        <>
            <Navbar />

            <Routes>

                {/* HOME (HERO SECTION) */}
                <Route path="/" element={<Hero />} />


                {/* LOGIN PAGE */}
                <Route path="/login" element={<Login />} />

                {/* REGISTER PAGE */}
                <Route path="/register" element={<Register />} />

                {/* PROTECTED DASHBOARD */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />

            </Routes>

            <FeaturedLawyers />

            <Footer />
        </>
    );
}