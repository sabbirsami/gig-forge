import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { ProgressBar, Step } from "react-step-progress-bar";

const BidRequest = ({ bid, refetch, user }) => {
    const progress = parseFloat(bid?.progress) || 4;

    const handleAcceptButton = () => {
        const status = "in progress";
        console.log(
            `http://localhost:5000/bits-request/${user.email}/${bid._id}`
        );
        fetch(`http://localhost:5000/bits-request/${user.email}/${bid._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((result) => {
                refetch();

                console.log(result);
            })
            .catch((err) => {
                toast.error("Update Fail ", {
                    duration: 2000,
                    className: "mt-32",
                });

                console.log(err);
            });
    };
    const handleRejectButton = () => {
        const status = "canceled";
        fetch(`http://localhost:5000/bits-request/${user.email}/${bid._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((result) => {
                refetch();

                console.log(result);
            })
            .catch((err) => {
                toast.error("Update Fail ", {
                    duration: 2000,
                    className: "mt-32",
                });

                console.log(err);
            });
    };
    return (
        <div>
            <div className="border border-primaryColor rounded-md shadow-md mt-2">
                <div className="p-4">
                    <div className="grow">
                        <div className="grid lg:grid-cols-7 md:grid-cols-4 justify-between items-center gap-2">
                            <h4 className="text-lg font-bold lg:col-span-2 md:col-span-3 pe-2">
                                {bid.title}
                            </h4>
                            <p className="p-2 text-primaryColor font-bold col-span-1">
                                ${bid.bitPrice}
                            </p>

                            <div className="col-span-1 ">
                                <p className="text-sm text-whiteSecondary">
                                    Deadline:
                                </p>
                                <p className="text-xs font-semibold">
                                    {bid.deadline}
                                </p>
                            </div>
                            <div className="col-span-1 ">
                                <p className="text-sm text-whiteSecondary">
                                    Status:{" "}
                                </p>
                                <p
                                    className={`${
                                        bid.status === "canceled"
                                            ? "text-errorColor"
                                            : ""
                                    } ${
                                        bid.status === "in progress"
                                            ? "text-[#008848]"
                                            : ""
                                    } text-sm font-semibold`}
                                >
                                    {bid.status}
                                </p>
                            </div>

                            <div className="col-span-1 ">
                                <p className="text-sm text-whiteSecondary">
                                    Email:{" "}
                                </p>
                                <p className="text-sm font-semibold text-black">
                                    {bid.userEmail}
                                </p>
                            </div>

                            <div className=" space-x-2">
                                {bid.status === "in progress" ||
                                bid.status === "complete" ? (
                                    <div className="mt-6">
                                        <ProgressBar
                                            percent={progress}
                                            filledBackground="linear-gradient(to right, #22c347, #2daffd)"
                                        >
                                            <Step transition="scale">
                                                {({ accomplished }) => (
                                                    <div
                                                        className={`opacity-60 indexedStep text-xs mb-10 ms-16 font-semibold inline-block ${
                                                            accomplished
                                                                ? "accomplished"
                                                                : ""
                                                        }`}
                                                    >
                                                        <span>In progress</span>
                                                    </div>
                                                )}
                                            </Step>

                                            <Step transition="scale">
                                                {({ accomplished }) => (
                                                    <div
                                                        className={`indexedStep text-xs mb-10 me-14 font-semibold inline-block opacity-60 ${
                                                            accomplished
                                                                ? "accomplished"
                                                                : ""
                                                        }`}
                                                    >
                                                        <span>Complete</span>
                                                    </div>
                                                )}
                                            </Step>
                                        </ProgressBar>
                                    </div>
                                ) : (
                                    <div className="">
                                        {bid.status === "canceled" ? (
                                            ""
                                        ) : (
                                            <div className="ms-auto w-full space-x-2 text-end">
                                                <button
                                                    onClick={handleAcceptButton}
                                                    className="text-xs text-[#008848] rounded-full px-2.5 py-1.5 bg-secondaryColor/50 font-semibold"
                                                >
                                                    Accept
                                                </button>
                                                <button
                                                    onClick={handleRejectButton}
                                                    className="text-xs text-errorColor rounded-full px-2.5 py-1.5 bg-errorColor/10 font-semibold"
                                                >
                                                    Reject
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BidRequest;
BidRequest.propTypes = {
    bid: PropTypes.object,
    user: PropTypes.object,
    refetch: PropTypes.func,
};
