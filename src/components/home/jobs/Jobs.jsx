import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { HiArrowLongRight } from "react-icons/hi2";
import "react-tabs/style/react-tabs.css";
import Job from "./Job";
import { Link } from "react-router-dom";

const Jobs = () => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("web_development");
    const categoryName = category.split("_").join(" ");
    console.log(data);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios(`http://localhost:5000/jobs/${category}`)
            .then((data) => {
                setData(data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [category]);
    return (
        <div className="container mx-auto px-6 py-20">
            <Tabs>
                <TabList className={"relative border-b border-primaryColor"}>
                    <Tab onClick={() => setCategory("web_development")}>
                        <span className="capitalize">web development</span>
                    </Tab>
                    <Tab onClick={() => setCategory("graphic_design")}>
                        <span className="capitalize">graphics design</span>
                    </Tab>
                    <Tab onClick={() => setCategory("digital_marketing")}>
                        <span className="capitalize">digital marketing</span>
                    </Tab>

                    <Link
                        className="absolute right-0 bottom-2 text-sm hover:underline text-primaryColor md:inline-block hidden"
                        to={`/`}
                    >
                        Show All {categoryName} items{" "}
                        <HiArrowLongRight className="inline" />
                    </Link>
                </TabList>

                <TabPanel>
                    {loading ? (
                        <div className="flex justify-center items-center h-72">
                            <span className="loading loading-spinner text-success"></span>
                        </div>
                    ) : (
                        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-12">
                            {data.slice(0, 4).map((job) => (
                                <Job key={job._id} job={job}></Job>
                            ))}
                        </div>
                    )}
                </TabPanel>
                <TabPanel>
                    {loading ? (
                        <div className="flex justify-center items-center h-72">
                            <span className="loading loading-spinner text-success"></span>
                        </div>
                    ) : (
                        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-12">
                            {data.slice(0, 4).map((job) => (
                                <Job key={job._id} job={job}></Job>
                            ))}
                        </div>
                    )}
                </TabPanel>
                <TabPanel>
                    {loading ? (
                        <div className="flex justify-center items-center h-72">
                            <span className="loading loading-spinner text-success"></span>
                        </div>
                    ) : (
                        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-12">
                            {data.slice(0, 4).map((job) => (
                                <Job key={job._id} job={job}></Job>
                            ))}
                        </div>
                    )}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Jobs;
