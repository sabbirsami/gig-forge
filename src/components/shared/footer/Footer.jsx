import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo from "../../../assets/logo2.jpg";
import logo2 from "../../../assets/logo.png";

const Footer = () => {
    return (
        <div className="bg-whiteSecondary/10 mt-10">
            <div className="container mx-auto md:py-16 md:px-6 px-2 md:pb-32 pb-16">
                <div className="grid md:grid-cols-3 grid-cols-1 md:justify-between justify-center md:items-start items-center md:text-left text-start space-y-8">
                    <div className="mt-4">
                        <div className="flex gap-3">
                            <div className="">
                                <img className="w-16" src={logo} alt="" />
                            </div>
                            <div className="mt-6">
                                {" "}
                                <img className="w-32" src={logo2} alt="" />
                            </div>
                        </div>
                        <p className="pt-6">
                            Copyright © 2023 - All right reserved
                        </p>
                        {/* <div className="w-1/6 h-0.5 bg-primaryColor  md:ml-0 mx-auto mb-6"></div> */}
                    </div>
                    <div className="">
                        <h4 className="pb-6">Contact</h4>
                        <p className="text-base font-semibold text-[#a4a4a4] ">
                            Phone Number:
                            <span className="text-black">
                                {" "}
                                +880 197070 6676
                            </span>
                        </p>
                        <p className="text-base font-semibold text-[#a4a4a4]  ">
                            <span className="">Email: </span>
                            <span className="text-black">
                                smd71430@gmail.com
                            </span>{" "}
                        </p>
                        <p className="text-base font-semibold text-[#a4a4a4]  ">
                            <span className="">Location: </span>
                            <span className="text-black">
                                Dhaka, Bangladesh
                            </span>{" "}
                        </p>
                    </div>
                    <div className="flex items-center md:justify-end justify-start gap-3">
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={"https://github.com/sabbirsami"}
                            className="rounded-0 border border-[#4a4a4a] hover:border-primaryColor hover:bg-primaryColor hover:text-white  text-lg border-1 p-3  flex justify-center items-center"
                        >
                            <FaGithub className="inline text-2xl font-semibold m-0.5" />
                        </a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={
                                "https://www.linkedin.com/in/sabbir-mohammad-sami/"
                            }
                            className="rounded-0 border border-[#4a4a4a]  hover:bg-primaryColor hover:border-primaryColor hover:text-white  text-lg border-1 p-3  flex justify-center items-start"
                        >
                            <FaLinkedinIn className="inline text-2xl font-semibold" />{" "}
                            <span className="ms-2 font-semibold mb-0">
                                Linkedin
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
