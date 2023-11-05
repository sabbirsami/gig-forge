import bannerImage from "../../assets/banner/banner-03.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Banner = () => {
    return (
        <div className="banner-section">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center md:gap-16 gap-0">
                    {/* text section  */}
                    <div className="xl:w-11/12 py-6">
                        <h2 className="xl:text-7xl lg:text-5xl md:text-3xl text-2xl md:font-normal font-bold">
                            Find a Job With Your Interests and Abilities
                        </h2>
                        <p className="md:pt-6 pt-3 pe-6 text-whiteSecondary md:text-base text-sm">
                            Find a Job that match your interests with us.
                            GigForge provides a place to find your dream jobs
                        </p>
                        <div className="flex pt-6">
                            <button className="capitalize border-2 border-primaryColor bg-primaryColor  text-white rounded-none py-3 md:px-8 px-4 flex items-center md:gap-5 gap-2 md:text-base text-sm">
                                Get Start <MdOutlineArrowForwardIos />
                            </button>
                            <button className="capitalize border-2 border-primaryColor text-black rounded-none py-3 md:px-8 px-4 flex items-center gap-5 md:text-base text-sm">
                                Contact
                            </button>
                        </div>
                    </div>
                    <div className="ms-auto md:p-20 p-10 bg-[#D2F2E3]">
                        <img src={bannerImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
