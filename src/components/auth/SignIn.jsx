import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import signInImage from "../../assets/banner/banner-03.png";

const SignIn = () => {
    return (
        <div className="">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="py-10 flex flex-col justify-between">
                        <h2 className="text-4xl pb-8">
                            Hey there! <br /> Welcome back.
                        </h2>
                        <div className="md:block hidden ">
                            <img src={signInImage} alt="" />
                        </div>
                    </div>
                    <div className="bg-secondaryColor rounded-lg lg:px-16 md:px-8 lg:py-16 p-6  md:mt-16">
                        <h2 className="text-4xl pb-8 pt-4">Sign In</h2>
                        <form>
                            <label
                                htmlFor="email"
                                className="block md:w-64 w-full pb-2 font-semibold"
                            >
                                Your Email{" "}
                                <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className=" rounded-md w-full py-3  px-4 bg-white/70"
                                placeholder="Enter email here.."
                            />
                            <label
                                htmlFor="password"
                                className="block w-full pb-2  pt-8 font-semibold"
                            >
                                Password <span className="text-red-600">*</span>
                            </label>

                            <input
                                type="password"
                                name="password"
                                required
                                className="r rounded-md w-full py-3 px-4 bg-white/70"
                                placeholder="Enter password here.."
                            />
                            <label className="block md:w-64 w-full text-sm text-red-600">
                                {/* {showPasswordValidationMessage} */}
                            </label>
                            <label className="block md:w-64 w-full  text-sm text-red-600">
                                {/* {alreadyUsedEmailMessage} */}
                            </label>

                            <button
                                type="submit"
                                className="w-full mt-8 py-3 bg-primaryColor hover:shadow-md text-white rounded-md"
                            >
                                Register
                            </button>
                        </form>
                        <div className="divider">OR</div>
                        <button
                            // onClick={handleSignInWithGoogle}
                            type="submit"
                            className="w-full flex items-center justify-center gap-3 py-3 border border-primaryColor  rounded-md text-dark"
                        >
                            <FcGoogle className="text-2xl"></FcGoogle>
                            Sign in with Google
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
    );
};

export default SignIn;
