import { NavLink } from "react-router-dom";

const DashboardNav = () => {
    return (
        <div className="h-full bg-secondaryColor w-64 dashboard-menu">
            <nav className="p-6 ">
                <ul className="space-y-5">
                    <li className="w-full ">
                        <NavLink
                            to={"/dashboard"}
                            className="w-full rounded-sm  block ps-5"
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="w-full ">
                        <NavLink
                            to={"/dashboard/manage-jobs"}
                            className="w-full block rounded-sm ps-5 "
                        >
                            Manage Jobs
                        </NavLink>
                    </li>
                    <li className="w-full ">
                        <NavLink
                            to={"/dashboard/manage-bids"}
                            className="w-full   block rounded-sm ps-5 "
                        >
                            Manage Bids
                        </NavLink>
                    </li>
                    <li className="w-full ">
                        <NavLink
                            to={"/dashboard/manage-users"}
                            className="w-full  block rounded-sm ps-5 "
                        >
                            Manage Users
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DashboardNav;
