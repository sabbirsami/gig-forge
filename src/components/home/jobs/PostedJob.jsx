import PropTypes from "prop-types";

function PostedJob({ job, refetch, user }) {
    const handleDelete = () => {
        fetch(`http://localhost:5000/jobs/${user.email}/${job._id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                refetch();
            });
    };
    return (
        <div className="border border-primaryColor rounded-md shadow-md mt-2">
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
                                    // onClick={handleComplete}
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
