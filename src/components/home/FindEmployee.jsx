import { MdOutlineArrowForwardIos } from "react-icons/md";
import find from "../../assets/find.svg";

const FindEmployee = () => {
    return (
        <div className="container mx-auto px-6 pt-16 pb-20 ">
            <div className="grid grid-cols-5 justify-between items-center">
                <div className="space-y-10 col-span-2">
                    <h3 className="text-6xl font-semibold">
                        Find an employee you need right now
                    </h3>
                    <p className=" ">
                        Are you an enthusiastic and customer-focused individual
                        looking for an exciting opportunity to join a dynamic
                        team? We are currently seeking a Customer Service
                        Representative to fill a crucial role in our
                        organization.
                        {/* If you have excellent communication
                        skills, a passion for helping others, and a desire to be
                        part of a growing company, we want to hear from you! */}
                    </p>
                    <button className="capitalize border-2 border-primaryColor bg-primaryColor rounded-full text-white py-3 md:px-8 px-4 flex items-center md:gap-5 gap-2 md:text-base text-sm">
                        Add Job Post <MdOutlineArrowForwardIos />
                    </button>
                </div>

                <div className="col-span-3 text-left ms-auto">
                    <img src={find} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FindEmployee;
