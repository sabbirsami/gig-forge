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
    // navigate user when successfully login
    const navigate = useNavigate();

    // get today date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = String(today.getFullYear());
    today = `${yyyy}-${mm}-${dd}`;

    const [loading, setLoading] = useState(false);
    const [tagErrorMessage, setTagErrorMessage] = useState("");
    const [dateErrorMessage, setDateErrorMessage] = useState("");

    const employer_email = user.email;
    const status = "pending";
    const defaultTags = [
        "Portfolio Website",
        "Design Tools",
        "Web Design",
        "Social Media",
    ];

    const [tagsAdd, setTags] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTag = () => {
        if (inputValue.trim() !== "") {
            setTags([...tagsAdd, inputValue.trim()]);
            setInputValue("");
            setTagErrorMessage("");
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
        if (tagsAdd.length === 0) {
            setTagErrorMessage("Please at least 1 tag *");
            setLoading(false);
        } else {
            setTagErrorMessage("");
            console.log(data.deadline, today);
            if (new Date(data.deadline) > new Date(today)) {
                console.log("ok");
                setDateErrorMessage("");
                const {
                    title,
                    category,
                    deadline,
                    maximum_price,
                    minimum_price,
                    price,
                    postDate,
                    short_description,
                } = data;
                const addedJob = {
                    title,
                    category,
                    deadline,
                    postDate,
                    maximum_price,
                    minimum_price,
                    price,
                    short_description,
                    packageItems,
                    tags: tagsAdd.length !== 0 ? tagsAdd : defaultTags,
                    status,
                    employer_email,
                };
                fetch(`https://server-site-zeta-red.vercel.app/jobs`, {
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
                        // navigate user when successfully login
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
            } else {
                setDateErrorMessage("Please provide a valid Date");
                setLoading(false);
            }
        }
    };
    return (
        <div className="container mx-auto px-6">
            <Helmet>
                <title>Gig Forge | Add Jobs</title>
            </Helmet>
            <h2 className="text-lg font-bold pt-2">Add Job -</h2>
            <div className="pb-10 pt-4">
                <div className=" bg-whiteSecondary/10 border border-dashed p-2">
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
                                    {...register("title", { required: true })}
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
                                        <label className="block md:w-64 w-full  text-sm text-[#d63031]">
                                            {errors.deadline && (
                                                <span>
                                                    Deadline is required *
                                                </span>
                                            )}
                                        </label>
                                        <label className="block md:w-64 w-full  text-sm text-[#d63031]">
                                            {dateErrorMessage}
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
                                        placeholder="Maximum Price"
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
                                        htmlFor="postDate"
                                        className=" mt-6 font-bold text-sm "
                                    >
                                        Post Date
                                    </label>
                                    <input
                                        type="text"
                                        {...register("postDate", {
                                            required: true,
                                        })}
                                        value={today}
                                        readOnly
                                        className="py-4 px-3 w-full mb-6  mt-2 rounded-md text-black/70"
                                    />

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
                                        rows="8"
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
                    <div className="lg:px-14 md:px-8 pb-14">
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
                        <div className="grid md:grid-cols-2 grid-cols-1 lg:me-24 md:me-12">
                            <div className="flex xl:flex-row flex-col  gap-4">
                                <div className="w-full">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        placeholder="Add a tag"
                                        className="py-4 px-3 w-full rounded-md grow "
                                    />
                                    <label className="block md:w-64 w-full  text-sm text-[#d63031] pt-1">
                                        <span>{tagErrorMessage}</span>
                                    </label>
                                </div>

                                <div className="inline-block me-2">
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
