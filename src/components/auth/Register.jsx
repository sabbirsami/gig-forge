import { useForm, Controller } from "react-hook-form";
import { BsCheckLg } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase.config";
import toast from "react-hot-toast";

const Register = () => {
    const { signInWithGoogle, registerUser, setLoading } =
        useContext(AuthContext);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [googleButtonLoading, setGoogleButtonLoading] = useState(false);
    const [signInWithGoogleError, setSignInWithGoogleError] = useState("");
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setLoading(true);
        setButtonLoading(true);

        const firstName = data.firstName;
        const lastName = data.lastName;
        const photoUrl = data.photoUrl;
        const name = firstName + " " + lastName;
        console.log(name, photoUrl);
        const email = data.email;
        const password = data.password;
        registerUser(email, password)
            .then((result) => {
                console.log(result);
                setSignInWithGoogleError("");
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoUrl,
                })
                    .then(() => {
                        toast.success("Successfully Register", {
                            duration: 2000,
                            className: "mt-32",
                        });
                        setSignInWithGoogleError("");
                        setLoading(false);
                        setButtonLoading(false);
                    })
                    .catch((err) => {
                        // An error occurred
                        setSignInWithGoogleError(
                            err.message.split("(")[1].split("-").join(" ")
                        );
                        setButtonLoading(false);
                        toast.error(" Register fail", {
                            duration: 2000,
                            className: "mt-32",
                        });
                    });
            })
            .catch((err) => {
                console.log(err.message);

                setSignInWithGoogleError(
                    err.message.split("(")[1].split("-").join(" ")
                );
                setButtonLoading(false);
                console.log(signInWithGoogleError);
                toast.error(" Register fail", {
                    duration: 2000,
                    className: "mt-32",
                });
            });
        console.log(data);
    };
    const validatePassword = (value) => {
        if (!/(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}/.test(value)) {
            return "Password must have at least 1 uppercase letter, 1 special character, 1 number, and be at least 8 characters long.";
        }
        return true;
    };
    // Sign In With Google
    const handleSignInWithGoogle = () => {
        setGoogleButtonLoading(true);
        signInWithGoogle()
            .then((result) => {
                console.log(result);
                setSignInWithGoogleError("");
                setGoogleButtonLoading(false);
                toast.success("Successfully Register", {
                    duration: 2000,
                    className: "mt-32",
                });
            })
            .catch((err) => {
                console.log(err);
                setSignInWithGoogleError(
                    err.message.split("(")[1].split("-").join(" ")
                );
                setGoogleButtonLoading(false);
                toast.error(" Register fail", {
                    duration: 2000,
                    className: "mt-32",
                });
            });
    };
    return (
        <div className="">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="py-10 flex flex-col justify-between">
                        <h2 className="text-4xl pb-8">
                            Hey there! <br /> Welcome back.
                        </h2>
                        <div className=" space-y-1 mb-16">
                            <p>Password Requirements:</p>
                            <div className="w-24 h-0.5 bg-primaryColor "></div>
                            <div className="text-[#636e72] w-10/12 pt-4">
                                <div className="flex items-start">
                                    <BsCheckLg className="text-primaryColor inline mt-1 me-2 w-5 text-xl" />{" "}
                                    <p className="">
                                        Your password must be at least 8
                                        characters long
                                    </p>
                                </div>
                                <div className="flex items-start ">
                                    <BsCheckLg className="text-primaryColor inline mt-1 me-2 w-7 text-xl" />{" "}
                                    <p className="">
                                        It should include a mix of upper and
                                        lower case letters, numbers, and special
                                        characters
                                    </p>
                                </div>
                                <div className="flex items-start ">
                                    <BsCheckLg className="text-primaryColor inline mt-1 me-2 w-8 text-xl" />{" "}
                                    <p className="">
                                        Please use a unique password for this
                                        account and do not reuse it across
                                        multiple accounts or services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-secondaryColor rounded-lg lg:px-16 md:px-8 lg:py-16 p-6  md:mt-16">
                        <h2 className="text-4xl pb-8 pt-2">Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className=" flex lg:flex-col xl:flex-row flex-col justify-between gap-6">
                                <div className="grow">
                                    <label
                                        htmlFor="firstName"
                                        className="block md:w-64 w-full pb-2 font-semibold"
                                    >
                                        First Name{" "}
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        {...register("firstName", {
                                            required: true,
                                        })}
                                        className=" rounded-md w-full py-3  px-2 bg-white/70"
                                        placeholder="Enter email here.."
                                    />
                                    {/* error message */}
                                    <label className="block md:w-64 w-full  text-sm text-[#d63031] pt-1">
                                        {errors.firstName && (
                                            <span>
                                                First Name is required *
                                            </span>
                                        )}
                                    </label>
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="lastName"
                                        className="block w-full pb-2 font-semibold"
                                    >
                                        Last Name{" "}
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        {...register("lastName", {
                                            required: true,
                                        })}
                                        className=" rounded-md w-full py-3 px-2 bg-white/70"
                                        placeholder="Enter email here.."
                                    />
                                    {/* error message */}
                                    <label className="block md:w-64 w-full  text-sm text-[#d63031] pt-1">
                                        {errors.lastName && (
                                            <span>Last Name is required *</span>
                                        )}
                                    </label>
                                </div>
                            </div>
                            <label
                                htmlFor="photo"
                                className="block md:w-64 w-full pt-8 pb-2 font-semibold"
                            >
                                Photo URL{" "}
                                <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                name="photoUrl"
                                {...register("photoUrl", { required: true })}
                                className=" rounded-md w-full py-3  px-4 bg-white/70"
                                placeholder="Enter photo URL.."
                            />
                            {/* error message */}
                            <label className="block md:w-64 w-full  text-sm text-[#d63031] pt-1">
                                {errors.photoUrl && (
                                    <span>Photo URL is required *</span>
                                )}
                            </label>
                            <label
                                htmlFor="email"
                                className="block md:w-64 w-full pt-8 pb-2 font-semibold"
                            >
                                Your Email{" "}
                                <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                {...register("email", { required: true })}
                                className=" rounded-md w-full py-3  px-4 bg-white/70"
                                placeholder="Enter email here.."
                            />
                            {/* error message */}
                            <label className="block md:w-64 w-full  text-sm text-[#d63031] pt-1">
                                {errors.email && (
                                    <span>{errors.email?.message}</span>
                                )}
                                {errors.email?.type === "required" &&
                                    "Email is required *"}
                            </label>
                            <label
                                htmlFor="password"
                                className="block w-full pb-2  pt-8 font-semibold"
                            >
                                Password <span className="text-red-600">*</span>
                            </label>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="password"
                                        className="r rounded-md w-full py-3 px-4 bg-white/70"
                                        placeholder="Enter password here.."
                                        {...field}
                                    />
                                )}
                                rules={{
                                    required: "Password is required",
                                    validate: validatePassword,
                                }}
                            />
                            {/* error message */}
                            <label className="block  w-full  text-sm text-[#d63031] pt-1">
                                {errors.password && (
                                    <span>{errors.password?.message}</span>
                                )}
                                {errors.password?.type === "required" &&
                                    "Password is required *"}
                            </label>

                            <label className="block w-full text-sm text-errorColor">
                                {signInWithGoogleError.split(")")}
                            </label>

                            <button
                                type="submit"
                                className="w-full mt-8 py-3 bg-primaryColor hover:shadow-md text-white rounded-md"
                            >
                                {buttonLoading ? (
                                    <span className="loading loading-spinner text-white"></span>
                                ) : (
                                    <span>Register</span>
                                )}
                            </button>
                        </form>
                        <div className="divider">OR</div>
                        <button
                            onClick={handleSignInWithGoogle}
                            type="submit"
                            className="w-full  py-3 border border-primaryColor  rounded-md text-dark"
                        >
                            {googleButtonLoading ? (
                                <span className="loading loading-spinner text-success"></span>
                            ) : (
                                <span className="flex items-center justify-center gap-3">
                                    <FcGoogle className="text-2xl"></FcGoogle>
                                    <span>Register with Google</span>
                                </span>
                            )}
                        </button>
                        <div className="">
                            <p className=" pt-6">
                                Already have any account?{" "}
                                <Link
                                    className="underline text-primaryColor"
                                    to={"/sign-in"}
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
