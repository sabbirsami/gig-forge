import { useQuery } from "react-query";
import emptyBox from "../../../assets/empty.png";
import ManageJob from "./ManageJob";

const ManageJobs = () => {
    const { isLoading, error, data, refetch } = useQuery("postedJobs", () =>
        fetch(`https://server-site-zeta-red.vercel.app/jobs/`, {
            credentials: "include",
        })
            .then((res) => res.json())
            .catch((err) => {
                console.log(err);
            })
    );
    console.log(error);
    return (
        <div className="h-[90vh] overflow-y-scroll pe-3">
            <h2 className="text-lg font-bold pt-2">Manage Jobs -</h2>
            {isLoading ? (
                <div className="flex justify-center items-center h-72">
                    <span className="loading loading-spinner text-success"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 pb-12 pt-2">
                    {data?.length === 0 ? (
                        <div className="flex justify-center items-center h-72">
                            <img src={emptyBox} alt="" />
                        </div>
                    ) : (
                        <div>
                            {data?.map((job) => (
                                <ManageJob
                                    key={job._id}
                                    job={job}
                                    refetch={refetch}
                                ></ManageJob>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ManageJobs;
