import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { roleRouteMap } from "../lib/roleRouteMap";

const NotRequiredAuth = () => {
    const { user, tokens } = useSelector((state) => state.auth);
    const location = useLocation();

    if (tokens.access) {
        // If there's an access token, check the user's role and redirect accordingly
        const userRole = user?.role;
        if (userRole && roleRouteMap[userRole]) {
            const redirectTo = roleRouteMap[userRole];
            return <Navigate to={redirectTo} replace />;
        }
        // Default redirect if role is not in the map or user role is undefined
        const defaultRedirect = '/'; // You can set this to a default page
        return <Navigate to={defaultRedirect} replace />;
    }

    // If the user is not authenticated, render the child components
    return <Outlet />;
};
export default NotRequiredAuth;
