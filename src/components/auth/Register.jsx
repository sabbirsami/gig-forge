import { useForm, Controller } from "react-hook-form";
import { BsCheckLg } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);
    const validatePassword = (value) => {
        if (!/(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}/.test(value)) {
            return "Password must have at least 1 uppercase letter, 1 special character, 1 number, and be at least 8 characters long.";
        }
        return true;
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
                            Register with Google
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
