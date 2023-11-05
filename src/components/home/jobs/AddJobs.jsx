const AddJobs = () => {
    return (
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold pt-10 text-center">Add Jobs</h2>
            <form>
                <div className="grid grid-cols-2 gap-16">
                    <div className="py-10">
                        <div className=" md:p-14 p-6 bg-whiteSecondary/10 rounded-md">
                            <label
                                htmlFor="jobTitle"
                                className=" mt-6 font-bold text-sm "
                            >
                                Job Title
                            </label>
                            <input
                                type="number"
                                name="jobTitle"
                                className="py-4 px-3 w-full mb-6 mt-2 rounded-md"
                                placeholder="Price(your bidding amount)"
                            />
                            <label
                                htmlFor="price"
                                className=" mt-6 font-bold text-sm "
                            >
                                Price
                            </label>
                            <input
                                type="number"
                                className="py-4 px-3 w-full mb-6  mt-2 rounded-md"
                                placeholder="Price"
                            />
                            <label
                                htmlFor="Status"
                                className=" mt-6 font-bold text-sm "
                            >
                                Status
                            </label>
                            <select
                                name="status"
                                className="py-4 px-3 w-full mb-6 mt-2 rounded-md"
                                id="status-select"
                            >
                                <option className="rounded-md" value="open">
                                    Open
                                </option>
                                <option className="rounded-md" value="pending">
                                    Pending
                                </option>
                                <option className="rounded-md" value="close">
                                    Closed
                                </option>
                            </select>
                            <label
                                htmlFor="email"
                                className=" mt-6 font-bold text-sm "
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="py-4 px-3 w-full mb-6  mt-2 rounded-md"
                                placeholder="Email"
                            />
                            <div className="flex justify-between items-center gap-6">
                                <div className=" ">
                                    <label
                                        htmlFor="buyerEmail"
                                        className=" mt-6 font-bold text-sm "
                                    >
                                        Deadline
                                    </label>
                                    <input
                                        type="date"
                                        className="py-4 px-3 w-full mb-6  mt-2 rounded-md"
                                        placeholder="Deadline"
                                    />
                                </div>

                                <div className="grow">
                                    <label
                                        htmlFor="category"
                                        className=" mt-6 font-bold text-sm "
                                    >
                                        Category
                                    </label>
                                    <select
                                        name="brand"
                                        className="py-4 px-3 w-full mb-6 mt-2 rounded-md"
                                        id="pet-select"
                                    >
                                        <option
                                            className="rounded-md"
                                            value="web_development"
                                        >
                                            Web Development
                                        </option>
                                        <option
                                            className="rounded-md"
                                            value="digital_marketing"
                                        >
                                            Digital Marketing
                                        </option>
                                        <option
                                            className="rounded-md"
                                            value="graphic_design"
                                        >
                                            Graphic Design
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className=" md:p-14 p-6 bg-whiteSecondary/10 rounded-md">
                            <label
                                htmlFor="price"
                                className=" mt-6 font-bold text-sm "
                            >
                                Minimum Price
                            </label>
                            <input
                                type="number"
                                className="py-4 px-3 w-full mb-6  mt-2 rounded-md"
                                placeholder="Minimum Price"
                            />
                            <label
                                htmlFor="price"
                                className=" mt-6 font-bold text-sm "
                            >
                                Maximum Price
                            </label>
                            <input
                                type="number"
                                className="py-4 px-3 w-full mb-6  mt-2 rounded-md"
                                placeholder="Minimum Price"
                            />

                            <label
                                htmlFor="Description"
                                className=" mt-6 font-bold text-sm "
                            >
                                Description
                            </label>
                            <textarea
                                name=""
                                id=""
                                placeholder="Description"
                                className="py-4 px-3 w-full  mt-2 rounded-md"
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>
                        <button
                            className="w-full bg-primaryColor rounded-md py-4 mt-6 text-white font-bold"
                            type="submit"
                        >
                            Add job
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddJobs;
