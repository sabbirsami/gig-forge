import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
