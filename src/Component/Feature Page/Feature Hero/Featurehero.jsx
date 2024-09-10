import { GoArrowRight } from "react-icons/go";
import { NavLink } from "react-router-dom";
import banner from '../../../assets/header/Illustration (1).svg'

const Featurehero = () => {
    return (
        <div className='bg-blue md:py-40 py-28 px-1 text-white font-fontpp'>
            <div className="container flex md:flex-row md:gap-1 md:px-1 px-6 gap-14 flex-col-reverse items-center justify-between mx-auto">
                {/* title */}
                <div className='space-y-7 w-full  md:w-[570px]'>
                    <h3 className='md:text-5xl text-4xl md:text-start text-center font-bold'>
                        All the features you need
                    </h3>
                    <p className='text-xl md:text-start text-center font-medium'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                    {/* btn */}
                    <div className='flex md:flex-row flex-col md:justify-start justify-center items-center gap-5'>
                        <NavLink>
                            <button className='border-2 bg-yellow transition-all duration-300 text-[#000] px-5 py-3 rounded-3xl'>View our work</button>
                        </NavLink>
                        <NavLink>
                            <button className='border-2 flex items-center gap-3 hover:bg-yellow transition-all duration-300 hover:text-black px-5 py-3 rounded-3xl'>
                                View Pricing<GoArrowRight className='text-2xl' />
                            </button>
                        </NavLink>

                    </div>

                </div>
                {/* img */}
                <div >
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Featurehero;