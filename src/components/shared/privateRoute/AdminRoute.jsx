import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import Loading from "../loading/Loading";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading />;
    }
    if (user.email === "smd71430@gmail.com") {
        return children;
    }
    return <Navigate to={"/"}></Navigate>;
};

export default AdminRoute;

AdminRoute.propTypes = {
    children: PropTypes.node,
};
