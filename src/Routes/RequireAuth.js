import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth, loading } = useAuth();
    const token = localStorage.getItem('accessToken')
    const location = useLocation();

    if (loading) {
        // Add a loading state or component while authentication status is being determined
        return <div>Loading...</div>;
    }
    console.log(token)

    if (!token) {
        // User is not authenticated, redirect to the login page
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles && allowedRoles.length > 0 && Array.isArray(auth.roles)) {
        // Check if the user has any of the allowed roles
        const hasAllowedRole = auth.roles.some(role => allowedRoles.includes(role));
        if (!hasAllowedRole) {
            // User is authenticated but does not have any allowed role, redirect to unauthorized page
            return <Navigate to="/unauthorized" state={{ from: location }} replace />;
        }
    }

    // User is authenticated and has allowed role(s), render the child components
    return <Outlet />;
}

export default RequireAuth;
