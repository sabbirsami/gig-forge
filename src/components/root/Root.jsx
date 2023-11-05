import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;
