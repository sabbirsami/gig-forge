import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../auth/AuthProvider";
import PostedJob from "./PostedJob";
import emptyBox from "../../../assets/empty.png";

const PostedJobs = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, error, data, refetch } = useQuery("postedJobs", () =>
        fetch(
            `https://server-site-zeta-red.vercel.app/posted-jobs/${user.email}`,
            {
                credentials: "include",
            }
        )
            .then((res) => res.json())
            .catch((err) => {
                console.log(err);
            })
    );
    console.log(error);
    return (
        <div className="container mx-auto px-6">
            <h2 className="text-lg font-bold pt-6">Posted Jobs</h2>
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
                                <PostedJob
                                    key={job._id}
                                    job={job}
                                    refetch={refetch}
                                    user={user}
                                ></PostedJob>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PostedJobs;
