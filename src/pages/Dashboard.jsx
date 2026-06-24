import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-3xl text-center">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome to LegalEase Dashboard 
        </h1>

        {/* USER INFO */}
        <p className="mt-4 text-gray-600">
          Logged in as:
        </p>

        <p className="text-lg font-semibold text-gray-800">
          {user?.email}
        </p>

        {/* ACTIONS */}
        <div className="mt-8 flex justify-center gap-4">

          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Browse Lawyers
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
          >
            My Profile
          </button>

        </div>

      </div>
    </div>
  );
}