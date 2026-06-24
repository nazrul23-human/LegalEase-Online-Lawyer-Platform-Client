// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const { register, googleLogin } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   // 🔥 Register Handler
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError("");

//     // password match check
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       await register(email, password);
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
//           Register LegalEase
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

//         {/* Confirm Password */}
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           className="w-full p-2 border mb-3"
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />

//         {/* Register Button */}
//         <button
//           onClick={handleRegister}
//           className="w-full bg-green-600 text-white p-2 rounded mb-2"
//         >
//           Register
//         </button>

//         {/* Google Login */}
//         <button
//           onClick={handleGoogle}
//           className="w-full bg-red-500 text-white p-2 rounded"
//         >
//           Continue with Google
//         </button>

//       </div>
//     </div>
//   );
// }