import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">

      {/* 🔥 TITLE */}
      <h1 className="text-5xl font-bold text-blue-800 text-center">
        Find & Hire Expert Legal Counsel
      </h1>

      {/* 🔥 SUBTITLE */}
      <p className="mt-4 text-gray-600 text-lg text-center max-w-2xl">
        LegalEase connects you with top lawyers for criminal, corporate, and family legal support.
        Get expert advice anytime, anywhere.
      </p>

      {/* 🔥 BUTTONS */}
      <div className="mt-8 flex gap-4">

        <button
          onClick={() => navigate("/register")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </button>

        <button
          onClick={() => navigate("/login")}
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
        >
          Login
        </button>

      </div>

    </div>
  );
}