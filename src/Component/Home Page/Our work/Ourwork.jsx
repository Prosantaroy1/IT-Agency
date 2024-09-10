import { TbArrowNarrowRight } from "react-icons/tb";
import img1 from '../../../assets/our work/Card.png'
import img2 from '../../../assets/our work/Card (1).png'
import img3 from '../../../assets/our work/Rectangle 1313.png'
import { NavLink } from "react-router-dom";

const Ourwork = () => {
    //
    return (
        <div className="py-24">
            <div className="container font-fontpp mx-auto">
                {/* title */}
                <div className="flex items-center justify-between md:px-16 px-2">
                    <h3 className="md:text-4xl text-2xl font-semibold">View our projects</h3>
                    <p className="text-xl flex items-center gap-2 font-medium">View More <TbArrowNarrowRight className="text-2xl" /></p>
                </div>
                {/* project */}
                <div className="flex flex-wrap px-2 items-center pt-12 justify-center gap-28">
                    {/* first part*/}
                    <div className="relative">
                        <img src={img1} alt="" className="w-full" />
                        {/* effect */}
                        <div className="bg-[#5e668b] transition-all duration-300 delay-150 opacity-0 hover:opacity-100 flex flex-col justify-center p-6 gap-6 text-white absolute top-0  h-full left-0 right-0  w-3/4">
                            <h3 className="text-3xl">Workhub office Webflow<br /> Webflow Design</h3>
                            <p className="text-xl">
                                Euismod faucibus turpis eu gravida<br /> mi. Pellentesque et velit aliquam
                            </p>
                            <NavLink to='/workDetails'>
                                <p className="text-xl cursor-pointer text-yellow flex items-center gap-2 font-medium">
                                    View More <TbArrowNarrowRight className="text-2xl" />
                                </p>
                            </NavLink>
                        </div>
                    </div>
                    {/* second part*/}
                    <div className="flex flex-wrap flex-col gap-14 justify-between items-center">
                        <div className="relative w-full">
                            <img src={img2} alt="" className="w-full" />
                            <div className="bg-[#5e668b] transition-all ease-out duration-300 delay-150 flex opacity-0 hover:opacity-100 flex-col justify-center p-6 gap-6 text-white absolute top-0  h-full left-0 right-0  w-full">
                                <h3 className="text-3xl">
                                    Unisaas Website <br />
                                    Design
                                </h3>
                                <NavLink to='/workDetails'>
                                    <p className="text-xl cursor-pointer text-yellow flex items-center gap-2 font-medium">
                                        View More <TbArrowNarrowRight className="text-2xl" />
                                    </p>
                                </NavLink>
                            </div>
                        </div>
                        {/* second  */}
                        <div className="relative w-full">
                            <img src={img3} alt="" className="w-full" />
                            <div className="bg-[#5e668b] transition-all ease-in-out duration-300 delay-150  flex opacity-0 hover:opacity-100 workCard1 flex-col justify-center p-6 gap-6 text-white absolute top-0  h-full left-0 right-0  w-full">
                                <h3 className="text-3xl">
                                    Unisaas Website <br />
                                    Design
                                </h3>
                                <NavLink to='/workDetails'>
                                    <p className="text-xl cursor-pointer  text-yellow flex items-center gap-2 font-medium">
                                        View More <TbArrowNarrowRight className="text-2xl" />
                                    </p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourwork;