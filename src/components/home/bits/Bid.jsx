import PropTypes from "prop-types";

function Bid({ bid }) {
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
                            <p className="text-sm font-semibold">
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
                            <button className="text-xs text-[#008848] rounded-full px-2.5 py-1.5 bg-secondaryColor/50 font-semibold">
                                Complete
                            </button>
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