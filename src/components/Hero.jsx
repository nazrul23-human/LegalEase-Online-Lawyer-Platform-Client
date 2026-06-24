import { useNavigate } from "react-router-dom";
import heroImage from "../assets/Hero section.jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-full relative flex items-center justify-start"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6 text-white">

        <h1 className="text-5xl font-bold leading-tight">
          Find & Hire Expert <br></br> Legal Counsel
        </h1>

        <p className="mt-5 text-lg text-gray-200 max-w-2xl">
          LegalEase connects you with top lawyers for criminal, <br></br>corporate, and family legal support.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4 justify-center">

          <button
            onClick={() => navigate("/register")}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/login")}
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
}