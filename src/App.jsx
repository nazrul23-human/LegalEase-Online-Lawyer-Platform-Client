import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRoute";
import Hero from "./components/Hero";

export default function App() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />

      <Routes>

        {/* 🔥 HOME (HERO SECTION) */}
        <Route path="/" element={<Hero />} />

        {/* 🔥 LOGIN PAGE */}
        <Route path="/login" element={<Login />} />

        {/* 🔥 REGISTER PAGE */}
        <Route path="/register" element={<Register />} />

        {/* 🔐 PROTECTED DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <div className="h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold text-green-600">
                  Dashboard Page (Protected) 🚀
                </h1>
              </div>
            </PrivateRoute>
          }
        />

      </Routes>

      <Footer />
    </>
  );
}