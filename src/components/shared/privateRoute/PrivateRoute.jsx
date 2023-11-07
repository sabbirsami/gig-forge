import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import Loading from "../loading/Loading";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <Loading />;
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/sign-in"}></Navigate>;
}

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node,
};
