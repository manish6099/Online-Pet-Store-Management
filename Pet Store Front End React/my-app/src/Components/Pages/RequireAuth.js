import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthenticateContext from '../Context/Authenticate/AuthenticateContext';
import {useContext} from 'react'

const RequireAuth = ({ allowedRoles }) => {
    const auth = useContext(AuthenticateContext);
    const location = useLocation();

    return (
        auth.userData.roles===allowedRoles
        ? <Outlet />
        : auth.userData.username
            ? <Navigate to="/unauthorized" state={{ from: location }} replace />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;