import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

function PostedJob({ job, refetch, user }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [updateError, setUpdateError] = useState("");
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: "#d63031",
            cancelButtonColor: "#1dbf73",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/jobs/${user.email}/${job._id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((result) => {
                        console.log(result);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                        refetch();
                    });
            }
        });
    };
    const onSubmit = (data) => {
        console.log(data);
        const status = job.status;
        const packageItems = job.packageItems;
        const tags = job.tags;
        const updatedJobs = { ...data, status, packageItems, tags };
        console.log(updatedJobs);
        fetch(`http://localhost:5000/jobs/${user.email}/${job._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedJobs),
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success("Successfully updated job", {
                    duration: 2000,
                    className: "mt-32",
                });
                setUpdateError("");

                console.log(result);
            })
            .catch((err) => {
                toast.error("Update Fail ", {
                    duration: 2000,
                    className: "mt-32",
                });
                setUpdateError("Update Fail try again!");
                console.log(err);
            });
    };
    const handleUpdate = () => {
        document.getElementById("my_modal_5").showModal();
    };
    return (
        <div className="border border-primaryColor rounded-md shadow-md mt-2">
            <dialog
                id="my_modal_5"
                className=" modal-bottom sm:modal-middle rounded-none shadow-none"
            >
                <div className="md:p-10 p-3 rounded-none">
                    <div className="flex justify-between items-center gap-10">
                        <h3 className="font-bold text-lg">Update Job</h3>
                        <p className="text-sm opacity-50">
                            Press{" "}
                            <span className="bg-whiteSecondary p-1 rounded-md text-xs font-bold">
                                ESC
                            </span>{" "}
                            key or click the button below to close
                        </p>
                    </div>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="pb-2 pt-8">
                            <div className="grid md:grid-cols-2 grid-cols-1 border border-dashed bg-whiteSecondary/10">
                                <div className=" lg:p-14  md:p-8 p-4 rounded-md">
                                    <label
                                        htmlFor="jobTitle"
                                        className=" mt-6 font-bold text-sm "
                                    >
                                        Job Title
                                    </label>
                                    <input
                                        type="text"
                                        {...register("title", {
                                            required: true,
                                        })}
                                        defaultValue={job.title}
                                        className="py-4 px-3 w-full mb-6 mt-2 rounded-md"
                                        placeholder="Job Title"
                                    />
                                    {/* error message for title*/}
                                    <label className="block md:w-64 w-full  text-sm text-[#d63031] pt-1">
                                        {errors.title && (
                                            <span>Job Title is required *</span>
                                        )}
                                    </label>
                                    <label
                                        htmlFor="price"
                                        className=" mt-6 font-bold text-sm "
                                    >
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        {...register("price", {
                                            required: true,
                                        })}
                                        defaultValue={job.price}
                                        className="py-4 px-3 w-full mb-6  mt-2 rounded-md"
                                        placeholder="Price"
                                    />
                                    {/* error message for price */}
                                    <label className="block md:w-64 w-full  text-sm text-[#d63031] pt-1">
                                        {errors.price && (
                                            <span>Price is required *</span>
                                        )}
                                    </label>

                                    <label
                                        htmlFor="email"
                                        className=" mt-6 font-bold text-sm "
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        {...register("employer_email", {})}
                                        defaultValue={job.employer_email}
                                        readOnly
                                        className="py-4 px-3 w-full mb-6  mt-2 rounded-md"
                                        placeholder="Email"
                                    />
                                    <div className="xl:flex justify-between items-center gap-6">
                                        <div className=" ">
                                            <label
                                                htmlFor="buyerEmail"
                                                className=" mt-6 font-bold text-sm "
                                            >
                                                Deadline
                                            </label>
                                            <input
                                                type="date"
                                                {...register("deadline", {
                                                    required: true,
                                                })}
                                                defaultValue={job.deadline}
                                                className="py-4 px-3 w-full mb-6  mt-2 rounded-md"
                                                placeholder="Deadline"
                                            />
                                            {/* error message for deadline*/}
                                            <label className="block md:w-64 w-full  text-sm text-[#d63031] pt-1">
                                                {errors.deadline && (
                                                    <span>
                                                        Deadline is required *
                                                    </span>
                                                )}
                                            </label>
                                        </div>
                                        <div className="grow">
                                            <label
                                                htmlFor="category"
                                                className=" mt-6 font-bold text-sm "
                                            >
                                                Category
                                            </label>
                                            <select
                                                name="brand"
                                                {...register("category", {
                                                    required: true,
                                                })}
                                                defaultValue={job.category}
                                                className="py-4 px-3 w-full mb-6 mt-2 rounded-md"
                                                id="pet-select"
                                            >
                                                <option
                                                    className="rounded-md"
                                                    defaultValue="web_development"
                                                >
                                                    Web Development
                                                </option>
                                                <option
                                                    className="rounded-md"
                                                    defaultValue="digital_marketing"
                                                >
                                                    Digital Marketing
                                                </option>
                                                <option
                                                    className="rounded-md"
                                                    defaultValue="graphic_design"
                                                >
                                                    Graphic Design
                                                </option>
                                            </select>
                                            {/* error message for category*/}
                                            <label className="block md:w-64 w-full  text-sm text-[#d63031] pt-1">
                                                {errors.category && (
                                                    <span>
                                                        Category is required *
                                                    </span>
                                                )}
                                            </label>
                                            {/* tag */}
                                        </div>
                                    </div>
                                    <label
                                        htmlFor="price"
                                        className=" mt-6 font-bold text-sm "
                                    >
                                        Minimum Price
                                    </label>
                                    <input
                                        type="number"
                                        {...register("minimum_price", {
                                            required: true,
                                        })}
                                        defaultValue={job.minimum_price}
                                        className="py-4 px-3 w-full mb-6  mt-2 rounded-md"
                                        placeholder="Minimum Price"
                                    />
                                    {/* error message for Minimum Price */}
                                    <label className="block md:w-64 w-full  text-sm text-[#d63031] pt-1">
                                        {errors.minimum_price && (
                                            <span>
                                                Minimum Price is required *
                                            </span>
                                        )}
                                    </label>
                                </div>
                                <div className=" border-s border-dashed">
                                    <div className=" lg:p-14  md:p-8 p-4 rounded-md">
                                        <label
                                            htmlFor="price"
                                            className=" mt-6 font-bold text-sm "
                                        >
                                            Maximum Price
                                        </label>
                                        <input
                                            type="number"
                                            {...register("maximum_price", {
                                                required: true,
                                            })}
                                            defaultValue={job.maximum_price}
                                            className="py-4 px-3 w-full mb-6  mt-2 rounded-md"
                                            placeholder="Minimum Price"
                                        />
                                        {/* error message for  Maximum Price */}
                                        <label className="block md:w-64 w-full  text-sm text-[#d63031] pt-1">
                                            {errors.maximum_price && (
                                                <span>
                                                    Maximum Price is required *
                                                </span>
                                            )}
                                        </label>

                                        <label
                                            htmlFor="Description"
                                            className=" mt-6 font-bold text-sm "
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            name=""
                                            id=""
                                            {...register("short_description", {
                                                required: true,
                                            })}
                                            defaultValue={job.short_description}
                                            placeholder="Description"
                                            className="py-4 px-3 w-full  mt-2 rounded-md"
                                            cols="30"
                                            rows="10"
                                        ></textarea>
                                        {/* error message for Description*/}
                                        <label className="block md:w-64 w-full  text-sm text-[#d63031] pt-1">
                                            {errors.short_description && (
                                                <span>
                                                    Description is required *
                                                </span>
                                            )}
                                        </label>
                                        <button
                                            className="w-full bg-primaryColor rounded-md py-4 mt-6 text-white font-bold"
                                            type="submit"
                                        >
                                            {/* {loading ? (
                                        <span className="loading loading-spinner text-white"></span>
                                    ) : ( */}
                                            <span> Add job</span>
                                            {/* )} */}
                                        </button>
                                        <div className="text-center mt-6">
                                            {" "}
                                            <span className=" text-errorColor text-sm ">
                                                {updateError}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
            <div className="p-4">
                <div className="grow">
                    <div className="grid lg:grid-cols-7 md:grid-cols-4 justify-between items-start center gap-2">
                        <div className="lg:col-span-2 md:col-span-3">
                            <h4 className="text-lg font-bold pe-2">
                                {job.title}
                            </h4>
                            <p className="text-sm pt-2 text-black">
                                {job.short_description}
                            </p>
                        </div>
                        <div className="col-span-1">
                            <p className="text-sm text-whiteSecondary">
                                Price:
                            </p>
                            <p className=" text-primaryColor text-lg  font-bold ">
                                ${job.price}
                            </p>
                        </div>

                        <div className="col-span-1 space-y-3">
                            <div className="">
                                <p className="text-sm text-whiteSecondary pb-1">
                                    Deadline:
                                </p>
                                <p className="text-xs font-bold">
                                    {job.deadline}
                                </p>
                            </div>
                            <div className="">
                                <p className="text-sm text-whiteSecondary pb-1">
                                    Status:{" "}
                                </p>
                                <p
                                    className={`${
                                        job.status === "canceled"
                                            ? "text-errorColor"
                                            : ""
                                    } ${
                                        job.status === "in progress"
                                            ? "text-[#008848]"
                                            : ""
                                    } text-sm font-bold`}
                                >
                                    {job.status}
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1 space-y-3">
                            <div className="">
                                <p className="text-sm text-whiteSecondary pb-1">
                                    Maximum Price:
                                </p>
                                <p className="text-xs font-bold">
                                    ${job.maximum_price}
                                </p>
                            </div>
                            <div className="">
                                <p className="text-sm text-whiteSecondary pb-1">
                                    Minimum Price:{" "}
                                </p>
                                <p className="text-xs font-bold">
                                    ${job.minimum_price}
                                </p>
                            </div>
                        </div>

                        <div className="">
                            <p className="text-sm text-whiteSecondary pb-1">
                                Email:
                            </p>
                            <p className="text-sm font-bold">
                                {job.employer_email}
                            </p>
                        </div>
                        <div className="col-span-1 space-y-3">
                            <div className="ms-auto text-end">
                                <button
                                    onClick={handleUpdate}
                                    className="text-xs text-[#008848] rounded-full px-3 py-1.5 bg-secondaryColor/50 font-semibold"
                                >
                                    Update
                                </button>
                            </div>
                            <div className="ms-auto text-end">
                                <button
                                    onClick={handleDelete}
                                    className="text-xs text-errorColor rounded-full px-3.5 py-1.5 bg-errorColor/10 font-semibold"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostedJob;
PostedJob.propTypes = {
    job: PropTypes.object,
    user: PropTypes.object,
    refetch: PropTypes.func,
};
