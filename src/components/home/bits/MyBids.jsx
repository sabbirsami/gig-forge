import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import axios from "axios";
import Bid from "./Bid";

const MyBids = () => {
    const { user } = useContext(AuthContext);
    const [bidsData, setBidsData] = useState([]);

    const userEmail = user?.email;
    const url = `http://localhost:5000/bits/${userEmail}`;
    useEffect(() => {
        axios.get(url).then((res) => {
            setBidsData(res.data);
        });
    }, [url]);
    return (
        <div
            className="container mx-auto px-6
         py-6"
        >
            <h2 className="text-lg font-bold">My Bids:</h2>
            <div className="grid grid-cols-1 pb-12 pt-2">
                {bidsData.map((bid) => (
                    <Bid key={bid._id} bid={bid}></Bid>
                ))}
            </div>
        </div>
    );
};

export default MyBids;
