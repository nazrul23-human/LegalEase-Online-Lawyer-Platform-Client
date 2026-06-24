// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const { login, googleLogin } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   // 🔥 Email Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       await login(email, password);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   // 🔥 Google Login
//   const handleGoogle = async () => {
//     try {
//       await googleLogin();
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">

//         <h2 className="text-2xl font-bold mb-5 text-center">
//           Login LegalEase
//         </h2>

//         {/* Error */}
//         {error && (
//           <p className="text-red-500 text-sm mb-3">{error}</p>
//         )}

//         {/* Email */}
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 border mb-3"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         {/* Password */}
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 border mb-3"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {/* Login Button */}
//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-600 text-white p-2 rounded mb-2"
//         >
//           Login
//         </button>

//         {/* Google Login */}
//         <button
//           onClick={handleGoogle}
//           className="w-full bg-red-500 text-white p-2 rounded"
//         >
//           Login with Google
//         </button>

//       </div>
//     </div>
//   );
// }