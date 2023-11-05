import google from "../../assets/brand/google.png";
import meta from "../../assets/brand/meta.png";
import netflix from "../../assets/brand/netflix.png";
import pandg from "../../assets/brand/pandg.png";
import paypal from "../../assets/brand/paypal.png";

const Brand = () => {
    return (
        <div className=" bg-whiteSecondary/10 py-6">
            <div className=" container mx-auto px-6">
                <div className="flex md:flex-row flex-col items-center justify-evenly">
                    <h3 className="text-2xl font-bold text-whiteSecondary">
                        Trusted by:
                    </h3>
                    <div className="flex items-center xl:gap-32 lg:gap-16 md:gap-8 flex-wrap gap-x-4">
                        <img src={google} alt="" />
                        <img src={meta} alt="" />
                        <img src={netflix} alt="" />
                        <img src={pandg} alt="" />
                        <img src={paypal} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;
