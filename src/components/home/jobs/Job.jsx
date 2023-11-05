import PropTypes from "prop-types";
import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Job({ job }) {
    const [seeMore, setSeeMore] = useState(120);
    console.log(seeMore);
    return (
        <div className="border border-primaryColor rounded-md md:h-72  h-92">
            <div className="p-4 h-full">
                <div className="flex flex-col justify-between h-full">
                    <div className="grow">
                        <h4 className="text-lg font-bold">{job.title}</h4>
                        <p className="text-sm pt-2 text-black">
                            {job.short_description.slice(0, seeMore)}{" "}
                            {seeMore <= 120 ? (
                                <span
                                    onClick={() =>
                                        setSeeMore(job.short_description.length)
                                    }
                                    className="text-primaryColor underline cursor-pointer"
                                >
                                    see more..
                                </span>
                            ) : (
                                ""
                            )}
                        </p>
                        <div className="pt-2">
                            {job.tags.map((tag, idx) => (
                                <p
                                    className="text-xs text-[#008848] rounded-full px-1.5 py-0.5 bg-secondaryColor inline-block me-1"
                                    key={idx}
                                >
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between  items-center border-t border-t-primaryColor/70 grow-0 pt-3">
                        <p className="p-2 text-primaryColor font-bold">
                            ${job.price}
                        </p>
                        <button className="text-sm rounded-full bg-secondaryColor py-2 ps-4 pe-3 font-semibold text-[#008848]">
                            Bid now{" "}
                            <MdOutlineArrowForwardIos className="inline mb-0.5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Job;
Job.propTypes = {
    job: PropTypes.object,
};
