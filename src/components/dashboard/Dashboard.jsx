import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardNav from "./DashboardNav";

const Dashboard = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="h-[91vh] flex">
                <div className="w-64">
                    <DashboardNav />
                </div>

                <div className="px-6 py-3 relative">
                    <Outlet />
                    <div className="absolute r top-0 left-0 bg-secondaryColor">
                        <div className="rounded-b-full rounded-r-full "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
