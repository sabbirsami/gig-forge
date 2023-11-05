import { Link } from "react-router-dom";
import errorImage from "../../../assets/errorImage.jpg";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const ErrorPage = () => {
    return (
        <div className="">
            <div className="h-screen flex justify-center items-center">
                <div className=" pt-16">
                    <div className=" text-center mx-auto">
                        <p className="pb-3">This page could not be found.</p>
                        <Link
                            to={"/"}
                            className="capitalize border-2 mx-auto border-primaryColor bg-primaryColor  text-white rounded-full py-3 md:px-8 px-4  items-center md:gap-5 inline-block  gap-2 md:text-base text-sm"
                        >
                            Go Home{" "}
                            <MdOutlineArrowForwardIos className="inline" />
                        </Link>
                    </div>
                    <div className="">
                        <img
                            className="md:w-6/12 mx-auto w-10/12"
                            src={errorImage}
                            alt=""
                        />
                        {/* <button className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 capitalize border-2 border-primaryColor bg-primaryColor  text-white rounded-full py-3 md:px-8 px-4 flex items-center md:gap-5  gap-2 md:text-base text-sm">
                            Go Home <MdOutlineArrowForwardIos />
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
