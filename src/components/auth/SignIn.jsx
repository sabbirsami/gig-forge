import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signInImage from "../../assets/banner/banner-03.png";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { BsArrowLeft } from "react-icons/bs";

const SignIn = () => {
    const { signInWithGoogle, setLoading, signInUser } =
        useContext(AuthContext);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [googleButtonLoading, setGoogleButtonLoading] = useState(false);
    const [signInWithGoogleError, setSignInWithGoogleError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setButtonLoading(true);
        signInUser(email, password)
            .then((result) => {
                console.log(result);
                setSignInWithGoogleError("");
                setLoading(false);
                setButtonLoading(false);
                navigate(location.state ? location.state : "/");
                toast.success(" Sign In successfully", {
                    duration: 2000,
                    className: "mt-32",
                });
            })
            .catch((err) => {
                setSignInWithGoogleError(
                    err.message.split("(")[1].split("-").join(" ")
                );
                console.log(signInWithGoogleError);
                setButtonLoading(false);
                toast.error(" Sign In fail", {
                    duration: 2000,
                    className: "mt-32",
                });
            });
    };
    const handleSignInWithGoogle = () => {
        setLoading(true);
        setGoogleButtonLoading(true);
        signInWithGoogle()
            .then((result) => {
                console.log(result);
                setSignInWithGoogleError("");
                setLoading(false);
                setGoogleButtonLoading(false);
                navigate(location.state ? location.state : "/");
                toast.success(" Sign In successfully", {
                    duration: 2000,
                    className: "mt-32",
                });
            })
            .catch((err) => {
                setSignInWithGoogleError(
                    err.message.split("(")[1].split("-").join(" ")
                );
                console.log(signInWithGoogleError);
                setGoogleButtonLoading(false);
                toast.error(" Sign In fail", {
                    duration: 2000,
                    className: "mt-32",
                });
            });
    };
    return (
        <div className="auth-section ">
            <Helmet>
                <title>Gig Forge | Sign In</title>
            </Helmet>
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-14">
                    <div className="py-20 flex flex-col justify-between bg-secondaryColor md:h-screen ">
                        <div className="">
                            <h2 className="text-4xl pb-8">
                                Hey there! <br /> Welcome back.
                            </h2>
                            <Link
                                className="bg-white px-4 rounded-full hover:text-primaryColor py-2"
                                to={"/"}
                            >
                                {" "}
                                <BsArrowLeft className="inline mb-0.5" /> Back
                                to Home
                            </Link>
                        </div>
                        <div className="md:block hidden ">
                            <img src={signInImage} alt="" />
                        </div>
                    </div>
                    <div className=" flex flex-row items-center justify-center">
                        <div className=" rounded-lg lg:px-16 md:px-8 lg:py-16 p-6  md:mt-16 border shadow-md border-whiteSecondary/10">
                            <h2 className="text-4xl  font-bold pb-8 pt-4">
                                Sign In
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <label
                                    htmlFor="email"
                                    className="block lg:w-96 md:w-72 w-full pb-2 font-semibold"
                                >
                                    Your Email{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className=" rounded-md w-full py-3 border border-whiteSecondary/40 px-4 bg-white/70"
                                    placeholder="Enter email here.."
                                />
                                <label
                                    htmlFor="password"
                                    className="block w-full pb-2  pt-8 font-semibold"
                                >
                                    Password{" "}
                                    <span className="text-red-600">*</span>
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    required
                                    className="r rounded-md w-full py-3 border border-whiteSecondary/40 px-4 bg-white/70"
                                    placeholder="Enter password here.."
                                />
                                <label className="block w-full text-sm text-errorColor">
                                    {signInWithGoogleError}
                                </label>
                                <label className="block md:w-64 w-full  text-sm text-red-600">
                                    {/* {alreadyUsedEmailMessage} */}
                                </label>

                                <button
                                    type="submit"
                                    className="w-full mt-8 py-3 bg-primaryColor hover:shadow-md text-white rounded-md"
                                >
                                    {buttonLoading ? (
                                        <span className="loading loading-spinner text-white"></span>
                                    ) : (
                                        <span>Sign In</span>
                                    )}
                                </button>
                            </form>
                            <div className="divider">OR</div>
                            <button
                                onClick={handleSignInWithGoogle}
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 py-3 border border-primaryColor  rounded-md text-dark"
                            >
                                {googleButtonLoading ? (
                                    <span className="loading loading-spinner text-success"></span>
                                ) : (
                                    <span className="flex items-center justify-center gap-3">
                                        <FcGoogle className="text-2xl"></FcGoogle>
                                        <span>Sign in with Google</span>
                                    </span>
                                )}
                            </button>
                            <div className="">
                                <p className=" pt-6">
                                    Don&#39;t have any account?{" "}
                                    <Link
                                        className="underline text-primaryColor"
                                        to={"/register"}
                                    >
                                        Register
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
