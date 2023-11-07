import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ allowedRoles }) => {
    const { user, tokens } = useSelector((state) => state.auth);
    const location = useLocation();

    if (!tokens.access) {
        // If there is no access token, redirect to the login page
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles && user?.role) {
        // Check if the user has one of the allowed roles
        const hasAllowedRole = allowedRoles.includes(user.role);
        if (!hasAllowedRole) {
            // If the user does not have an allowed role, redirect to the unauthorized page
            return <Navigate to="/unauthorized" state={{ from: location }} replace />;
        }
    }

    // If the user has an allowed role, render the child components
    return <Outlet />;
};

export default RequireAuth;
