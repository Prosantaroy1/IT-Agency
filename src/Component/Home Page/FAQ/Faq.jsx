import { IoMdClose } from "react-icons/io";
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled, TbCircleNumber5Filled } from "react-icons/tb";


const Faq = () => {
    return (
        <div className="pt-12">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 px-4 md:px-16 py-8 mx-auto">
                {/* title part*/}
                <div>
                    <div className="space-y-5">
                        <h3 className="text-4xl font-semibold ">Frequently <br />asked questions</h3>
                        <p className='text-rellayellow text-xl'>
                            Contact us for more info
                        </p>
                    </div>
                </div>
                {/* Faq part */}
                <div className="font-fontpp space-y-4 col-span-3">
                    {/* one */}
                    <div className="collapse bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            <div className="flex  items-center justify-between">
                                <div className="flex items-center gap-7">
                                    <TbCircleNumber1Filled className="text-4xl text-rellayellow" />
                                    <h3 className="text-2xl font-medium">How much time does it take?</h3>
                                </div>
                                <IoMdClose className="text-2xl" />
                            </div>
                        </div>
                        <div className="collapse-content px-14">
                            <p className="font-semibold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    {/* two */}
                    <div className="collapse bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            <div className="flex  items-center justify-between">
                                <div className="flex items-center gap-7">
                                    <TbCircleNumber2Filled className="text-4xl text-rellayellow" />
                                    <h3 className="text-2xl font-medium">What is your class naming convention?</h3>
                                </div>
                                <IoMdClose className="text-2xl" />
                            </div>
                        </div>
                        <div className="collapse-content px-14">
                            <p className="font-semibold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    {/* three*/}
                    <div className="collapse bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            <div className="flex  items-center justify-between">
                                <div className="flex items-center gap-7">
                                    <TbCircleNumber3Filled className="text-4xl text-rellayellow" />
                                    <h3 className="text-2xl font-medium">How do you communicate?</h3>
                                </div>
                                <IoMdClose className="text-2xl" />
                            </div>
                        </div>
                        <div className="collapse-content px-14">
                            <p className="font-semibold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    {/* four */}
                    <div className="collapse bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            <div className="flex  items-center justify-between">
                                <div className="flex items-center gap-7">
                                    <TbCircleNumber4Filled className="text-4xl text-rellayellow" />
                                    <h3 className="text-2xl font-medium">I have a bigger project. Can you handle it?</h3>
                                </div>
                                <IoMdClose className="text-2xl" />
                            </div>
                        </div>
                        <div className="collapse-content px-14">
                            <p className="font-semibold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    {/* five */}
                    <div className="collapse bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            <div className="flex  items-center justify-between">
                                <div className="flex items-center gap-7">
                                    <TbCircleNumber5Filled className="text-4xl text-rellayellow" />
                                    <h3 className="text-2xl font-medium">
                                        What is your class naming convention?
                                    </h3>
                                </div>
                                <IoMdClose className="text-2xl" />
                            </div>
                        </div>
                        <div className="collapse-content px-14">
                            <p className="font-semibold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;