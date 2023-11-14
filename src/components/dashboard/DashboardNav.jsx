import { Link } from "react-router-dom";

const DashboardNav = () => {
    return (
        <div className="h-full bg-secondaryColor w-64">
            <nav className="p-6 ">
                <ul className="space-y-5">
                    <li className="w-full ">
                        <Link to={"/dashboard"} className="w-full ">
                            Dashboard
                        </Link>
                    </li>
                    <li className="w-full ">
                        <Link to={"/manage-jobs"} className="w-full ">
                            Manage Jobs
                        </Link>
                    </li>
                    <li className="w-full ">
                        <Link to={"/manage-bids"} className="w-full ">
                            Manage Bids
                        </Link>
                    </li>
                    <li className="w-full ">
                        <Link to={"/manage-users"} className="w-full ">
                            Manage Users
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DashboardNav;
