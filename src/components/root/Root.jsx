import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import { Toaster } from "react-hot-toast";
import "react-step-progress-bar/styles.css";

const Root = () => {
    const location = useLocation();
    console.log(location);

    return (
        <div>
            {location?.pathname === "/sign-in" ||
                location?.pathname === "/register" || <Navbar />}
            <div className="">
                <Outlet />
            </div>
            {location?.pathname === "/sign-in" ||
                location?.pathname === "/register" || <Footer />}

            <Toaster />
        </div>
    );
};

export default Root;
