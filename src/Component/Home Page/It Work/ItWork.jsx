import { BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill, BsFill4CircleFill } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";

const ItWork = () => {
    return (
        <div className="bg-white-pp py-16 md:px-1 ">
            <div className="container flex md:flex-row md:gap-2 gap-16 flex-col md:px-20 px-6 items-center justify-between font-fontpp mx-auto">
                {/* left part */}
                <div className="space-y-4">
                    <h3 className="md:text-5xl text-3xl font-semibold">How we work</h3>
                    <p className="font-medium">
                        Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor.
                    </p>
                    <p className="text-rellayellow hover:cursor-pointer flex items-center gap-3">Get in touch with us<GoArrowRight /></p>
                </div>
                {/* right part */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center">
                    <div className="space-y-4">
                        <BsFill1CircleFill className="text-4xl text-rellayellow"/>
                        <h3 className="text-3xl font-semibold">Strategy</h3>
                        <p>
                            Euismod faucibus turpis eu gravida mi.<br /> Pellentesque et velit aliquam .
                        </p>
                    </div>
                    {/* second */}
                    <div className="space-y-4">
                        <BsFill2CircleFill className="text-4xl text-rellayellow"/>
                        <h3 className="text-3xl font-semibold">Wireframing</h3>
                        <p>
                            Euismod faucibus turpis eu gravida mi.<br /> Pellentesque et velit aliquam .
                        </p>
                    </div>
                    {/* three */}
                    <div className="space-y-4">
                        <BsFill3CircleFill className="text-4xl text-rellayellow"/>
                        <h3 className="text-3xl font-semibold">Design</h3>
                        <p>
                            Euismod faucibus turpis eu gravida mi.<br /> Pellentesque et velit aliquam .
                        </p>
                    </div>
                    {/* four */}
                    <div className="space-y-4">
                        <BsFill4CircleFill className="text-4xl text-rellayellow"/>
                        <h3 className="text-3xl font-semibold">Development</h3>
                        <p>
                            Euismod faucibus turpis eu gravida mi.<br /> Pellentesque et velit aliquam .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItWork;