import { GoPaperAirplane } from "react-icons/go";


const PricingCard = () => {
    return (
        <div className="md:py-28 py-14">
            <div className="container font-fontpp mx-auto">
                {/* title */}
                <h4 className="text-4xl text-center font-semibold">Our Pricing Plans</h4>
                <p className="pt-5 text-center font-medium text-xl">
                    When you’re ready to go beyond prototyping in Figma, Webflow is ready<br /> to help you
                    bring your designs to life — without coding them.
                </p>
                {/* card */}
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 text-xl font-normal items-center  mt-16">
                    {/* one part */}
                    <div className="bg-blue rounded-lg flex items-start px-12 space-y-6 py-12 justify-center flex-col font-fontpp text-white">
                        <h3 className="text-4xl font-bold">$230  <span className="text-yellow text-xl pl-4">Multi Design</span></h3>
                        <div className="space-y-3">
                            <h4 className="text-2xl font-semibold">
                                Landing Page
                            </h4>
                            <p className="font-medium">
                                When you’re ready to go beyond<br /> prototyping in Figma, Webflow’s<br /> ready to help.
                            </p>
                        </div>
                        {/* list */}
                        <ul className="flex flex-col space-y-3">
                            <li className="flex items-center gap-3">
                                <GoPaperAirplane className="text-2xl text-yellow" />All limited links
                            </li>
                            <li className="flex items-center gap-3">
                                <GoPaperAirplane className="text-2xl text-yellow" /> Own analytics platform
                            </li>
                            <li className="flex items-center gap-3">
                                <GoPaperAirplane className="text-2xl text-yellow" /> Chat support
                            </li>
                            <li className="flex items-center gap-3">
                                <GoPaperAirplane className="text-2xl text-yellow" /> Optimize hashtags
                            </li>
                            <li className="flex items-center gap-3">
                                <GoPaperAirplane className="text-2xl text-yellow" /> Unlimited users
                            </li>
                        </ul>
                        {/* btn */}
                        <button className='bg-yellow text-black rounded-lg px-12 py-4 text-xl font-semibold'>
                            Get started
                        </button>
                    </div>
                    {/* two part */}
                    <div className="bg-blue rounded-lg flex items-start px-12 space-y-6 py-20 justify-center flex-col font-fontpp text-white">
                        <h3 className="text-4xl font-bold">$430  <span className="text-yellow text-xl pl-4">Per Project</span></h3>
                        <div className="space-y-3">
                            <h4 className="text-2xl font-semibold">
                                Complex Project
                            </h4>
                            <p className="font-medium">
                                When you’re ready to go beyond<br /> prototyping in Figma, Webflow’s<br /> ready to help.
                            </p>
                        </div>
                        {/* list */}
                        <ul className="flex flex-col space-y-3">
                            <li className="flex items-center gap-3">
                                <GoPaperAirplane className="text-2xl text-yellow" />All limited links
                            </li>
                            <li className="flex items-center gap-3">
                                <GoPaperAirplane className="text-2xl text-yellow" /> Own analytics platform
                            </li>
                            <li className="flex items-center gap-3">
                                <GoPaperAirplane className="text-2xl text-yellow" /> Chat support
                            </li>
                            <li className="flex items-center gap-3">
                                <GoPaperAirplane className="text-2xl text-yellow" /> Optimize hashtags
                            </li>
                            <li className="flex items-center gap-3">
                                <GoPaperAirplane className="text-2xl text-yellow" /> Unlimited users
                            </li>
                        </ul>
                        {/* btn */}
                        <button className='bg-yellow text-black rounded-lg px-12 py-4 text-xl font-semibold'>
                            Get started
                        </button>
                    </div>
                    {/* three */}
                    <div className="bg-blue rounded-lg flex items-start px-12 space-y-6 py-12 justify-center flex-col font-fontpp text-white">
                        <h3 className="text-4xl font-bold">$330  <span className="text-yellow text-xl pl-4">Multi Design</span></h3>
                        <div className="space-y-3">
                            <h4 className="text-2xl font-semibold">
                                Website Page
                            </h4>
                            <p className="font-medium">
                                When you’re ready to go beyond<br /> prototyping in Figma, Webflow’s<br /> ready to help.
                            </p>
                        </div>
                        {/* list */}
                        <ul className="flex flex-col space-y-3">
                            <li className="flex items-center gap-3">
                                <GoPaperAirplane className="text-2xl text-yellow" />All limited links
                            </li>
                            <li className="flex items-center gap-3">
                                <GoPaperAirplane className="text-2xl text-yellow" /> Own analytics platform
                            </li>
                            <li className="flex items-center gap-3">
                                <GoPaperAirplane className="text-2xl text-yellow" /> Chat support
                            </li>
                            <li className="flex items-center gap-3">
                                <GoPaperAirplane className="text-2xl text-yellow" /> Optimize hashtags
                            </li>
                            <li className="flex items-center gap-3">
                                <GoPaperAirplane className="text-2xl text-yellow" /> Unlimited users
                            </li>
                        </ul>
                        {/* btn */}
                        <button className='bg-yellow text-black rounded-lg px-12 py-4 text-xl font-semibold'>
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;