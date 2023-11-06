import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import Loading from "../loading/Loading";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    if (loading) {
        return <Loading />;
    }
    if (!user) {
        return navigate("/sign-in");
    }
    return children;
}

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node,
};
