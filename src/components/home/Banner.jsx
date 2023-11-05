import bannerImage from "../../assets/banner/banner-03.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Banner = () => {
    return (
        <div className="banner-section">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 justify-between items-center gap-16">
                    {/* text section  */}
                    <div className="w-11/12">
                        <h2 className="text-7xl">
                            Find a Job With Your Interests and Abilities
                        </h2>
                        <p className="pt-6 pe-6">
                            Find a Job that match your interests with us.
                            GigForge provides a place to find your dream jobs
                        </p>
                        <div className="flex pt-6">
                            <button className="capitalize border border-primaryColor bg-primaryColor text-lg text-white rounded-none py-4 px-8 flex items-center gap-5">
                                Get Start <MdOutlineArrowForwardIos />
                            </button>
                            <button className="capitalize border border-primaryColor text-lg text-black rounded-none py-4 px-8 flex items-center gap-5">
                                Contact
                            </button>
                        </div>
                    </div>
                    <div className="ms-auto p-20 bg-[#D2F2E3]">
                        <img src={bannerImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
