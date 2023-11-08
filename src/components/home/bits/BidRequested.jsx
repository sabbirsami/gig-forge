import { Helmet } from "react-helmet-async";
import emptyBox from "../../../assets/empty.png";
import { useQuery } from "react-query";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import Loading from "../../shared/loading/Loading";
import BidRequest from "./BidRequest";
import "react-step-progress-bar/styles.css";

const BidRequested = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const url = `https://server-site-zeta-red.vercel.app/bits-requests/${userEmail}`;
    const {
        data: bidRequests,
        isLoading,
        refetch,
    } = useQuery("bidRequests", () =>
        fetch(url, { credentials: "include" })
            .then((res) => res.json())
            .catch((err) => {
                console.log(err);
            })
    );
    if (isLoading) {
        return <Loading />;
    }

    console.log(bidRequests);
    return (
        <div className="container mx-auto px-6">
            <Helmet>
                <title>Gig Forge | Bid Requested</title>
            </Helmet>
            <h2 className="text-lg font-bold pt-6">Bid Requests</h2>
            {isLoading ? (
                <div className="flex justify-center items-center h-72">
                    <span className="loading loading-spinner text-success"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 pb-12 pt-2">
                    {bidRequests?.length === 0 ? (
                        <div className="flex justify-center items-center h-72">
                            <img src={emptyBox} alt="" />
                        </div>
                    ) : (
                        <div>
                            {bidRequests?.map((bid) => (
                                <BidRequest
                                    key={bid._id}
                                    bid={bid}
                                    refetch={refetch}
                                    user={user}
                                ></BidRequest>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default BidRequested;
