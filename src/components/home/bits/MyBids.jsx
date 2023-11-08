import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import emptyBox from "../../../assets/empty.png";
import Bid from "./Bid";
import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import Loading from "../../shared/loading/Loading";

const MyBids = () => {
    const { user } = useContext(AuthContext);

    const userEmail = user?.email;
    const url = `http://localhost:5000/bits/${userEmail}`;
    const {
        data: bidsData,
        refetch,
        isLoading,
    } = useQuery("bidsData", () =>
        fetch(url)
            .then((res) => res.json())
            .catch((err) => console.log(err))
    );
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div
            className="container mx-auto px-6
         py-6"
        >
            <Helmet>
                <title>Gig Forge | My Bids</title>
            </Helmet>
            <h2 className="text-lg font-bold">My Bids:</h2>
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

export default MyBids;
