import { useContext } from "react";
import logo from "../../assets/logo.png";
import { AuthContext } from "../auth/AuthProvider";
import { Link, NavLink } from "react-router-dom";
const DashboardHeader = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser();
    };
    return (
        <div className=" bg-secondaryColor">
            <div className="flex justify-between items-center py-3  px-6">
                {/* logo */}
                <div className="">
                    <Link to={"/"}>
                        <img className="w-48" src={logo} alt="" />
                    </Link>
                </div>
                {/* menu section */}
                <nav className="">
                    <ul className="flex">
                        <li>
                            {user ? (
                                <div
                                    className={`py-1 px-2 flex gap-2 rounded-full items-center border`}
                                >
                                    <p className="ps-1">
                                        {user.displayName.split(" ")[0]}
                                    </p>
                                    <div className="dropdown dropdown-end">
                                        <label
                                            tabIndex={0}
                                            className="btn btn-ghost btn-circle avatar"
                                        >
                                            <div className="w-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </label>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-lg dropdown-content mt-3 z-[1]  p-1 shadow bg-secondaryColor hover:shadow-md rounded-box w-24"
                                        >
                                            <p className="text-center py-1 font-bold ">
                                                <button onClick={handleSignOut}>
                                                    Sign Out
                                                </button>
                                            </p>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <NavLink className={"p-4"} to={"/sign-in"}>
                                    Sign In
                                </NavLink>
                            )}
                        </li>
                        ,
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default DashboardHeader;
