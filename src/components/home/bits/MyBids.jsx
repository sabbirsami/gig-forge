import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import axios from "axios";
import Bid from "./Bid";
import { Helmet } from "react-helmet-async";

const MyBids = () => {
    const { user } = useContext(AuthContext);
    const [bidsData, setBidsData] = useState([]);
    const [loading, setLoading] = useState(false);

    const userEmail = user?.email;
    const url = `http://localhost:5000/bits/${userEmail}`;
    useEffect(() => {
        setLoading(true);
        axios.get(url).then((res) => {
            setBidsData(res.data);
            setLoading(false);
        });
    }, [url]);
    return (
        <div
            className="container mx-auto px-6
         py-6"
        >
            <Helmet>
                <title>Gig Forge | My Bids</title>
            </Helmet>
            <h2 className="text-lg font-bold">My Bids:</h2>
            {loading ? (
                <div className="flex justify-center items-center h-72">
                    <span className="loading loading-spinner text-success"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 pb-12 pt-2">
                    {bidsData.map((bid) => (
                        <Bid key={bid._id} bid={bid}></Bid>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBids;
