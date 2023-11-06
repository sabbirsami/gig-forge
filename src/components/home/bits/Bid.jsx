import PropTypes from "prop-types";
import { AuthContext } from "../../auth/AuthProvider";
import { useContext } from "react";

function Bid({ bid }) {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;

    const handleComplete = () => {
        const status = "complete";
        fetch(`http://localhost:5000/bits/${userEmail}/${bid._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
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

                        <p className="text-sm text-whiteSecondary col-span-1">
                            Email:{" "}
                            <span className="text-sm font-semibold text-black">
                                {bid.employer_email}
                            </span>
                        </p>
                        <div className="ms-auto">
                            {bid.status === "in progress" ? (
                                <button
                                    onClick={handleComplete}
                                    className="text-xs text-[#008848] rounded-full px-2.5 py-1.5 bg-secondaryColor/50 font-semibold"
                                >
                                    Complete
                                </button>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bid;
Bid.propTypes = {
    bid: PropTypes.object,
};
