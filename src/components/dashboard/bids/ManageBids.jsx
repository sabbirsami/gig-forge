import { useQuery } from "react-query";
import Loading from "../../shared/loading/Loading";
import emptyBox from "../../../assets/empty.png";
import Bid from "../../home/bits/Bid";

const ManageBids = () => {
    const {
        isLoading,
        error,
        data: bidsData,
        refetch,
    } = useQuery("postedJobs", () =>
        fetch(`https://server-site-zeta-red.vercel.app/bits/`, {
            credentials: "include",
        })
            .then((res) => res.json())
            .catch((err) => {
                console.log(err);
            })
    );
    if (isLoading) {
        return <Loading />;
    }
    console.log(error);
    return (
        <div className="h-[90vh] overflow-y-scroll pe-3">
            <h2 className="text-lg font-bold pt-2">Manage Bids -</h2>
            {isLoading ? (
                <div className="flex justify-center items-center h-72">
                    <span className="loading loading-spinner text-success"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 pb-12 pt-2">
                    {bidsData.length === 0 ? (
                        <div className="flex justify-center items-center h-72">
                            <img src={emptyBox} alt="" />
                        </div>
                    ) : (
                        <div>
                            {bidsData?.map((bid) => (
                                <Bid
                                    key={bid._id}
                                    bid={bid}
                                    refetch={refetch}
                                ></Bid>
                            ))}
                        </div>
                    )}
                    {/* {bidsData.map((bid) => (
                        <Bid key={bid._id} refetch={refetch} bid={bid}></Bid>
                    ))} */}
                </div>
            )}
        </div>
    );
};

export default ManageBids;
