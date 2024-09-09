import { AiOutlineSignature } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import {  MdNoteAlt, MdOutlineAccessTimeFilled } from "react-icons/md";

const Features = () => {
    return (
        <div className="mt-12 bg-white-pp py-14">
            <div className="container font-fontpp mx-auto">
                {/* title */}
                <div className="flex items-center font-fontpp justify-center flex-col space-y-4">
                    <p className="text-xl">Features</p>
                    <h3 className="md:text-4xl text-2xl md:w-[550px] text-center font-semibold text-balance">
                        Design that solves problems, one product at a time
                    </h3>
                </div>
                {/*----------- cart------------- */}
                <div className="pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-8">
                    {/* frist */}
                    <div className="space-y-4 font-fontpp p-8 shadow-2xl bg-[#fff]  shadow-white">
                        <FaUsers className="text-5xl text-rellayellow"/>
                        <h3 className="text-2xl font-semibold">Uses Client First</h3>
                        <p>
                            Euismod faucibus turpis eu gravida mi.<br /> Pellentesque et velit aliquam
                            sed faucib<br /> turpis eu gravida mi. Pellentesque et<br /> velit aliquam sed mi.
                        </p>
                    </div>
                    {/* second */}
                    <div className="space-y-4 font-fontpp p-8 shadow-2xl bg-[#fff]  shadow-white">
                        <BsCheckCircleFill className="text-5xl text-rellayellow"/>
                        <h3 className="text-2xl font-semibold">Two Free Revision Round</h3>
                        <p>
                            Euismod faucibus turpis eu gravida mi.<br /> Pellentesque et velit aliquam
                            sed faucib<br /> turpis eu gravida mi. Pellentesque et<br /> velit aliquam sed mi.
                        </p>
                    </div>
                    {/* frist */}
                    <div className="space-y-4 font-fontpp p-8 shadow-2xl bg-[#fff]  shadow-white">
                        <AiOutlineSignature className="text-5xl text-rellayellow"/>
                        <h3 className="text-2xl font-semibold">Template Customization</h3>
                        <p>
                            Euismod faucibus turpis eu gravida mi.<br /> Pellentesque et velit aliquam
                            sed faucib<br /> turpis eu gravida mi. Pellentesque et<br /> velit aliquam sed mi.
                        </p>
                    </div>
                    {/* four */}
                    <div className="space-y-4 font-fontpp p-8 shadow-2xl bg-[#fff]  shadow-white">
                        <BiSupport className="text-5xl text-rellayellow"/>
                        <h3 className="text-2xl font-semibold">24/7 Support</h3>
                        <p>
                            Euismod faucibus turpis eu gravida mi.<br /> Pellentesque et velit aliquam
                            sed faucib<br /> turpis eu gravida mi. Pellentesque et<br /> velit aliquam sed mi.
                        </p>
                    </div>
                    {/* five */}
                    <div className="space-y-4 font-fontpp p-8 shadow-2xl bg-[#fff]  shadow-white">
                        <MdOutlineAccessTimeFilled className="text-5xl text-rellayellow"/>
                        <h3 className="text-2xl font-semibold">Quick Delivery</h3>
                        <p>
                            Euismod faucibus turpis eu gravida mi.<br /> Pellentesque et velit aliquam
                            sed faucib<br /> turpis eu gravida mi. Pellentesque et<br /> velit aliquam sed mi.
                        </p>
                    </div>
                    {/* frist */}
                    <div className="space-y-4 font-fontpp p-8 shadow-2xl bg-[#fff]  shadow-white">
                        <MdNoteAlt className="text-5xl text-rellayellow"/>
                        <h3 className="text-2xl font-semibold">Hands-on approach</h3>
                        <p>
                            Euismod faucibus turpis eu gravida mi.<br /> Pellentesque et velit aliquam
                            sed faucib<br /> turpis eu gravida mi. Pellentesque et<br /> velit aliquam sed mi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;