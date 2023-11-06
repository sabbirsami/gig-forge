import PropTypes from "prop-types";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const data = { loading, setLoading, user, setUser };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
};
