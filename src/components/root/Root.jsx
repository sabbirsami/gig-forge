import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="">
                <Outlet />
            </div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default Root;
