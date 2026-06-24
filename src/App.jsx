// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { useAuth } from "./context/AuthContext";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import PrivateRoute from "./routes/PrivateRoute";

// export default function App() {
//     const { user } = useAuth();

//     return (
//         <>
//             <Navbar />

//             <Routes>
//                 <Route
//                     path="/"
//                     element={
//                         <div className="h-screen flex flex-col items-center justify-center">

//                             <h1 className="text-4xl font-bold text-blue-700">
//                                 LegalEase Working 🚀
//                             </h1>

//                             {/* 🔥 AUTH TEST */}
//                             <div className="mt-6 text-lg">
//                                 {user ? (
//                                     <p className="text-green-600">
//                                         Logged in as: {user.email}
//                                     </p>
//                                 ) : (
//                                     <p className="text-red-500">
//                                         No user logged in
//                                     </p>
//                                 )}
//                             </div>

//                         </div>
//                     }
//                 />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route
//                     path="/dashboard"
//                     element={
//                         <PrivateRoute>
//                             <h1>Dashboard Page (Protected)</h1>
//                         </PrivateRoute>
//                     }
//                 />
//             </Routes>

//             <Footer />
//         </>
//     );
// }