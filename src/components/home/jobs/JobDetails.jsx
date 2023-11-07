import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
    const { register, handleSubmit } = useForm();
    const data = useLoaderData();
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        title,
        category,
        deadline,
        employer_email,
        maximum_price,
        minimum_price,
        price,
        short_description,
        status,
        packageItems,
        tags,
    } = data[0];

    const onSubmit = (formData) => {
        setLoading(true);
        console.log(formData);
        const deadline = formData.deadline;
        const bitPrice = formData.bitPrice;
        const userEmail = user.email;
        const bitData = {
            title,
            employer_email,
            userEmail,
            bitPrice,
            deadline,
            status,
        };
        console.log(bitData);
        axios
            .post("http://localhost:5000/bits", bitData)
            .then(function (response) {
                // handle success
                toast.success("Successfully Bid on the project", {
                    duration: 2000,
                    className: "mt-32",
                });
                setLoading(false);
                navigate("/my-bids");
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                toast.error("  Fail to Bid on the project", {
                    duration: 2000,
                    className: "mt-32",
                });
            });
    };
    return (
        <div className="container mx-auto px-6 ">
            <Helmet>
                <title>Gig Forge | Job Details</title>
            </Helmet>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 xl:gap-0 lg:gap-14 justify-between py-10">
                <div className=" md:col-span-2 col-span-1 space-y-4">
                    <div className="md:flex gap-10 justify-between items-start">
                        <h2 className="md:text-4xl text-3xl font-bold">
                            {title}
                        </h2>
                        <p className="text-4xl font-bold text-primaryColor">
                            ${price}
                        </p>
                    </div>
                    <p className="md:text-base text-sm">{short_description}</p>
                    <div className="py-2">
                        {tags.map((tag, idx) => (
                            <p
                                className="text-xs font-semibold text-[#008848] rounded-full px-2.5 py-1.5 bg-secondaryColor/50 inline-block me-1"
                                key={idx}
                            >
                                {tag}
                            </p>
                        ))}
                    </div>
                    <div className="">
                        <div className="bg-secondaryColor/40 rounded-md">
                            <div className="md:p-10 p-6">
                                <h4 className="text-base font-bold text-black/60">
                                    Price range:
                                </h4>
                                <div className="md:text-4xl text-3xl font-bold flex items-center gap-5 pt-2 pb-4 ">
                                    <p className="">${minimum_price}</p>{" "}
                                    <div className="md:w-24 w-8 h-0.5 bg-black "></div>
                                    <p className="">${maximum_price}</p>{" "}
                                </div>
                                <hr className="mb-5" />
                                <div className="col-span-2 pt-0.5 py-3">
                                    <div className="md:flex justify-between items-center">
                                        <p className="text-base font-bold text-black/60">
                                            Deadline:{" "}
                                            <span className="text-black">
                                                {deadline}
                                            </span>
                                        </p>
                                        <p className="text-base font-bold text-black/60">
                                            Status:{" "}
                                            <span className="text-[#008848]">
                                                {status}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="text-base font-bold text-black/60 pb-6">
                                            Category:{" "}
                                            <span className="text-[#008848]">
                                                {category}
                                            </span>
                                        </p>
                                        <p className="text-base font-bold text-black/60">
                                            Package Include:
                                        </p>
                                        <ul className="list-disc ps-6 pt-2">
                                            {packageItems.map((data, idx) => (
                                                <li
                                                    className="text-sm font-semibold"
                                                    key={idx}
                                                >
                                                    {data}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-6">
                            <div className="bg-secondaryColor/40 px-10 py-6 rounded-md">
                                <p className="text-base font-bold text-black/60 ">
                                    Employer Email:{" "}
                                    <span className="text-[#008848]">
                                        {employer_email}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:block hidden"></div>
                <div className="md:col-span-2 col-span-1 sticky top-0">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=" md:p-14 p-6 bg-whiteSecondary/10 rounded-md">
                            <label
                                htmlFor="bitPrice"
                                className=" mt-6 font-bold text-sm "
                            >
                                Price
                            </label>
                            <input
                                type="number"
                                {...register("bitPrice", { required: true })}
                                className="py-4 px-3 w-full mb-6 mt-2 rounded-md"
                                placeholder="Price(your bidding amount)"
                            />
                            <label
                                htmlFor="buyerEmail"
                                className=" mt-6 font-bold text-sm "
                            >
                                Deadline
                            </label>
                            <input
                                type="date"
                                className="py-4 px-3 w-full mb-6  mt-2 rounded-md"
                                placeholder="Deadline"
                                {...register("deadline", { required: true })}
                            />
                            <label
                                htmlFor="buyerEmail"
                                className=" mt-6 font-bold text-sm "
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                value={user?.email}
                                readOnly
                                className="py-4 px-3 w-full mb-6 mt-2 rounded-md"
                                placeholder="Email"
                            />
                            <label
                                htmlFor="buyerEmail"
                                className=" mt-6 font-bold text-sm "
                            >
                                Buyer Email
                            </label>
                            <input
                                type="email"
                                name="buyerEmail"
                                value={employer_email}
                                readOnly
                                className="py-4 px-3 w-full mt-2 rounded-md"
                                placeholder="Buyer Email"
                            />
                        </div>
                        <button
                            className={`w-full bg-primaryColor rounded-md py-4 mt-6 disable text-white font-bold disabled:opacity-75`}
                            type="submit"
                            disabled={employer_email === user?.email}
                        >
                            {loading ? (
                                <span className="loading loading-spinner text-white"></span>
                            ) : (
                                <span> Bid on the project</span>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
