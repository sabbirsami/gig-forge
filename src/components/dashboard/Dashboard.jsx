import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardNav from "./DashboardNav";

const Dashboard = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="h-[91vh] flex">
                <DashboardNav />
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
