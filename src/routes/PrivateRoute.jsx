import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
    const { user, loading } = useAuth();

    // 🔥 loading state
    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    // 🔥 user not logged in → redirect login
    if (!user) {
        return <Navigate to="/login" />;
    }

    // 🔥 user logged in → allow access
    return children;
}