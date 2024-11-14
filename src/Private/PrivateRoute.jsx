import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../pages/Loader";


const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext)

    const location = useLocation()

    console.log(location);


    if (loader) {
        return <Loader></Loader>
    }

    if (user && user?.email) {
        return children
    }

    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
};

export default PrivateRoute;