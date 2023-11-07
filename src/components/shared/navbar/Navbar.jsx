// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import logo from "../../../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";

function Navbar() {
    const { user, signOutUser } = useContext(AuthContext);
    const [hide, setHide] = useState(false);
    const handleSignOut = () => {
        signOutUser();
    };
    return (
        <div className="">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center py-7">
                    {/* logo */}
                    <div className="">
                        <img className="w-48" src={logo} alt="" />
                    </div>
                    {/* menu section */}
                    <nav className="flex">
                        <ul className="lg:flex items-center hidden">
                            <li>
                                <NavLink className=" p-4" to={"/"}>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink className=" p-4" to={"/add-job"}>
                                    Add job
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className=" p-4" to={"/posted-jobs"}>
                                    Posted jobs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className=" p-4" to={"/my-bids"}>
                                    My Bids
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className=" p-4" to={"/bid-requests"}>
                                    Bid Requests
                                </NavLink>
                            </li>

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
                                                    <button
                                                        onClick={handleSignOut}
                                                    >
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
                        </ul>
                        <ul className="">
                            <button onClick={() => setHide(!hide)}>
                                <SlMenu className="text-2xl mx-4 lg:hidden block" />
                            </button>
                            {/* mobile device */}
                            {hide && (
                                <div className="h-screen border w-80 absolute top-0 right-0 p-10 flex flex-col gap-y-8 justify-between items-center bg-primaryColor/70 backdrop-blur-sm">
                                    <div className="flex flex-col gap-16 w-full">
                                        <button
                                            onClick={() => setHide(!hide)}
                                            className="text-end ms-auto mt-6"
                                        >
                                            <RxCross1 className="text-end text-white  text-3xl" />
                                        </button>
                                        <ul className="flex flex-col items-start gap-y-10 text-white">
                                            <li>
                                                <NavLink
                                                    className=" p-4"
                                                    to={"/"}
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className=" p-4"
                                                    to={"/add-car"}
                                                >
                                                    Add Car
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className=" p-4"
                                                    to={"/cart"}
                                                >
                                                    My Cart
                                                </NavLink>
                                            </li>
                                            <li>
                                                {user ? (
                                                    <div className=" border py-2 px-4 flex gap-3 rounded-full items-center">
                                                        <p className="">
                                                            {user?.displayName}
                                                        </p>
                                                        <div className="dropdown dropdown-end">
                                                            <label
                                                                tabIndex={0}
                                                                className="btn btn-ghost btn-circle avatar"
                                                            >
                                                                <div className="w-10 rounded-full">
                                                                    <img
                                                                        src={
                                                                            user?.photoURL
                                                                        }
                                                                    />
                                                                </div>
                                                            </label>
                                                            <ul
                                                                tabIndex={0}
                                                                className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                                            >
                                                                <li className="p-4">
                                                                    <button
                                                                        onClick={
                                                                            handleSignOut
                                                                        }
                                                                    >
                                                                        Log Out
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <NavLink
                                                        className={
                                                            "pb-3 p-4 text-white"
                                                        }
                                                        to={"/sign-in"}
                                                    >
                                                        Sign In
                                                    </NavLink>
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
Navbar.propTypes = {};
