import { useContext, useState } from "react";
import { AuthContext } from "../../../auth/AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Tag from "./Tag";

const AddJobs = () => {
    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const employer_email = user.email;
    const status = "pending";
    const defaultTags = [
        "Portfolio Website",
        "Design Tools",
        "Web Design",
        "Social Media",
    ];

    const [tagsAdd, setTags] = useState([]);
    console.log(tagsAdd);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTag = () => {
        if (inputValue.trim() !== "") {
            setTags([...tagsAdd, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleDeleteTag = (tagToDelete) => {
        const updatedTags = tagsAdd.filter((tag) => tag !== tagToDelete);
        setTags(updatedTags);
    };

    const packageItems = [
        "100% Unique",
        "Top Quality",
        "Copywriting for Website and Marketing Materials",
        "Unlimited Revisions",
        "Content Migration (if an existing site is being replaced)",
        "Content Migration (if an existing site is being replaced)",
        "5 Day delivery",
        "Content Creation (blog posts, videos, infographics, etc.)",
        "Ongoing Support and Maintenance (optional)",
    ];

    // Submit form
    const onSubmit = (data) => {
        setLoading(true);
        const {
            title,
            category,
            deadline,
            maximum_price,
            minimum_price,
            price,
            short_description,
        } = data;
        const addedJob = {
            title,
            category,
            deadline,
            maximum_price,
            minimum_price,
            price,
            short_description,
            packageItems,
            tags: tagsAdd.length !== 0 ? tagsAdd : defaultTags,
            status,
            employer_email,
        };

        console.log(addedJob);
        fetch(`http://localhost:5000/jobs`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addedJob),
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success("Successfully job added", {
                    duration: 2000,
                    className: "mt-32",
                });
                setLoading(false);
                navigate("/posted-jobs");
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
                toast.error("  Fail to add job", {
                    duration: 2000,
                    className: "mt-32",
                });
            });
    };
    return (
        <div className="container mx-auto px-6">
            <Helmet>
                <title>Gig Forge | Add Jobs</title>
            </Helmet>
            <h2 className="text-lg font-bold pt-6">Add Job -</h2>
            <div className="pb-10 pt-4">
                <div className=" bg-whiteSecondary/10 border border-dashed">
                    <div>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="grid md:grid-cols-2 grid-cols-1 "
                        >
                            <div className=" lg:px-14 lg:pt-14 lg:p-0 sm:p-8 rounded-md">
                                <label
                                    htmlFor="jobTitle"
                                    className=" mt-6 font-bold text-sm "
                                >
                                    Job Title
                                </label>
                                <input
                                    type="text"
                                    {...register("title", {})}
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
                                    value={employer_email}
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
                                            className="py-4 px-3 w-full mb-6 mt-2 rounded-md"
                                            id="pet-select"
                                        >
                                            <option
                                                className="rounded-md"
                                                value="web_development"
                                            >
                                                web_development
                                            </option>
                                            <option
                                                className="rounded-md"
                                                value="digital_marketing"
                                            >
                                                digital_marketing
                                            </option>
                                            <option
                                                className="rounded-md"
                                                value="graphic_design"
                                            >
                                                graphic_design
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
                                    className="py-4 px-3 w-full mb-6  mt-2 rounded-md"
                                    placeholder="Minimum Price"
                                />
                                {/* error message for Minimum Price */}
                                <label className="block md:w-64 w-full  text-sm text-[#d63031] pt-1">
                                    {errors.minimum_price && (
                                        <span>Minimum Price is required *</span>
                                    )}
                                </label>
                            </div>
                            <div className="">
                                <div className=" lg:px-14 lg:pt-14 lg:p-0 sm:p-8 rounded-md">
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
                                        className="py-4 px-3 w-full mb-6  mt-2 rounded-md"
                                        placeholder="Minimum Price"
                                    />
                                    {/* error message for  Maximum Price */}
                                    <label className="block md:w-64 w-full  text-sm text-[#d63031] ">
                                        {errors.maximum_price && (
                                            <span>
                                                Maximum Price is required *
                                            </span>
                                        )}
                                    </label>

                                    <label
                                        htmlFor="Description"
                                        className=" mt-5 font-bold text-sm "
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        name=""
                                        id=""
                                        {...register("short_description", {
                                            required: true,
                                        })}
                                        placeholder="Description"
                                        className="py-4 px-3 w-full  mt-1.5 rounded-md"
                                        cols="30"
                                        rows="12"
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
                                        className="w-full bg-primaryColor rounded-md py-4 mt-5 text-white font-bold"
                                        type="submit"
                                    >
                                        {loading ? (
                                            <span className="loading loading-spinner text-white"></span>
                                        ) : (
                                            <span> Add job</span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* ---------------------- */}
                    <div className="px-14 pb-14">
                        <label
                            htmlFor="Description"
                            className=" mt-5 font-bold text-sm "
                        >
                            Tags
                        </label>
                        <div className="flex flex-wrap pb-4">
                            {tagsAdd.map((tag, index) => (
                                <Tag
                                    key={index}
                                    text={tag}
                                    onDelete={() => handleDeleteTag(tag)}
                                />
                            ))}
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 me-24">
                            <div className="flex grid-cols-2  gap-4">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    placeholder="Add a tag"
                                    className="py-4 px-3 w-full rounded-md grow "
                                />
                                <div className="inline-block">
                                    <button
                                        onClick={handleAddTag}
                                        className="border border-dashed rounded-md py-3.5 px-2.5 w-40"
                                    >
                                        Add Tag
                                    </button>
                                </div>
                            </div>
                            <div className=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddJobs;
