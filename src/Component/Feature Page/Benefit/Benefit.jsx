import { BsCheckCircleFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdNoteAlt } from "react-icons/md";

const Benefit = () => {
    return (
        <div className="pt-12">
            <div className="container font-fontpp mx-auto">
                <h3 className="text-center font-semibold text-4xl">The benefits of working<br/> with our team</h3>
                {/* card */}
                <div className="pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-8">
                    {/* frist */}
                    <div className="space-y-4 font-fontpp p-8 shadow-2xl bg-[#fff]  shadow-white">
                        <MdNoteAlt className="text-5xl text-rellayellow"/>
                        <h3 className="text-2xl font-semibold">Customize with ease</h3>
                        <p>
                            Euismod faucibus turpis eu gravida mi.<br /> Pellentesque et velit aliquam
                            sed faucib<br /> turpis eu gravida mi. Pellentesque et<br /> velit aliquam sed mi.
                        </p>
                    </div>
                    {/* second */}
                    <div className="space-y-4 font-fontpp p-8 shadow-2xl bg-[#fff]  shadow-white">
                        <BsCheckCircleFill className="text-5xl text-rellayellow"/>
                        <h3 className="text-2xl font-semibold">Perfectly Responsive</h3>
                        <p>
                            Euismod faucibus turpis eu gravida mi.<br /> Pellentesque et velit aliquam
                            sed faucib<br /> turpis eu gravida mi. Pellentesque et<br /> velit aliquam sed mi.
                        </p>
                    </div>
                    {/* frist */}
                    <div className="space-y-4 font-fontpp p-8 shadow-2xl bg-[#fff]  shadow-white">
                        <FaUser className="text-5xl text-rellayellow"/>
                        <h3 className="text-2xl font-semibold">Template Customization</h3>
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

export default Benefit;