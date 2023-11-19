import PropTypes from "prop-types";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooq/useAxiosSecure";

const ManageJob = ({ job, refetch }) => {
    // get today date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = String(today.getFullYear());
    // let ddn = today.getDate();
    // console.log(ddn);
    today = yyyy + "-" + mm + "-" + dd;
    // get date as number
    const deadlineDay = parseFloat(job.deadline.split("-")[2]);
    const deadlineMonth = parseFloat(job.deadline.split("-")[1]);
    const deadlineYear = parseFloat(job.deadline.split("-")[0]);
    const todayDay = parseFloat(today.split("-")[2]);
    const todayMonth = parseFloat(today.split("-")[1]);
    const todayYear = parseFloat(today.split("-")[0]);

    const axiosSecure = useAxiosSecure();

    const handleDelete = () => {
        console.log(job._id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: "#d63031",
            cancelButtonColor: "#1dbf73",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result?.isConfirmed) {
                console.log("object");
                axiosSecure
                    .delete(
                        `https://server-site-zeta-red.vercel.app/manage/jobs/${job._id}`
                    )
                    .then((result) => {
                        if (result?.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                            refetch();
                        }
                    });
            }
        });
    };
    return (
        <div className="border border-primaryColor rounded-md shadow-md mt-2">
            <div className="p-4">
                <div className="grow">
                    <div className="grid lg:grid-cols-7 md:grid-cols-4 justify-between items-start center gap-2">
                        <div className="lg:col-span-2 md:col-span-3">
                            <h4 className="lg:text-xl md:text-lg font-bold pe-2">
                                {job.title}
                            </h4>
                            <div className=" pt-2">
                                <p className="text-sm text-whiteSecondary pb-1">
                                    Category:{" "}
                                    <span className="text-black font-semibold">
                                        {job.category}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-sm text-whiteSecondary">
                                Price:
                            </p>
                            <p className=" text-primaryColor lg:text-2xl md:text-lg  font-bold ">
                                ${job.price}
                            </p>
                        </div>

                        <div className="col-span-1 md:space-y-3 flex md:flex-col flex-row justify-between">
                            <div className="">
                                <p className="text-sm text-whiteSecondary pb-1">
                                    Posted Date:{" "}
                                </p>
                                <p className="text-xs font-bold">
                                    {job.postDate}
                                </p>
                            </div>
                            <div className="">
                                <p className="text-sm text-whiteSecondary pb-1">
                                    Deadline:
                                </p>
                                {deadlineYear <= todayYear ? (
                                    <span>
                                        {deadlineMonth <= todayMonth ? (
                                            <p className="text-xs  font-bold">
                                                {deadlineDay <= todayDay ? (
                                                    <span className="text-errorColor ">
                                                        {job.deadline}
                                                    </span>
                                                ) : (
                                                    <span className="">
                                                        {job.deadline}
                                                    </span>
                                                )}
                                            </p>
                                        ) : (
                                            <p className="text-xs text-errorColor font-bold">
                                                {job.deadline}
                                            </p>
                                        )}
                                    </span>
                                ) : (
                                    <p className="text-xs text-errorColor font-bold">
                                        {job.deadline}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="col-span-1 md:space-y-3 flex md:flex-col flex-row justify-between">
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
                        <div className="col-span-1 md:space-y-3 flex md:flex-col flex-row justify-between">
                            <div className="">
                                <p className="text-sm text-whiteSecondary pb-1">
                                    Email:
                                </p>
                                <p className="text-xs font-bold">
                                    {job.employer_email}
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
                                    } text-xs font-bold`}
                                >
                                    {job.status}
                                </p>
                            </div>
                        </div>

                        <div className="col-span-1 md:space-y-3 flex md:flex-col flex-row ">
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
};

export default ManageJob;
ManageJob.propTypes = {
    job: PropTypes.object,
    user: PropTypes.object,
    refetch: PropTypes.func,
};
