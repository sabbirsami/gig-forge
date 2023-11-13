import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { createContext } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import auth from "../../firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const currentUserEmail = { email: userEmail };
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                axios
                    .post(
                        `https://server-site-zeta-red.vercel.app/jwt`,
                        currentUserEmail,
                        {
                            withCredentials: true,
                        }
                    )
                    .then((res) => {
                        console.log("response token", res.data);
                    });
            }
            if (!currentUser) {
                axios
                    .post(
                        "https://server-site-zeta-red.vercel.app/logout",
                        currentUserEmail,
                        {
                            withCredentials: true,
                        }
                    )
                    .then((res) => {
                        console.log("response token", res.data);
                    });
            }
        });
        return () => {
            unSubscribe();
        };
    }, [user?.email]);
    const data = {
        loading,
        setLoading,
        user,
        signInWithGoogle,
        registerUser,
        signInUser,
        signOutUser,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
};
