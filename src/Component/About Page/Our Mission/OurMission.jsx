import imgOne from '../../../assets/about/hero2.png'
import imgtwo from '../../../assets/about/abouthero.png'

const OurMission = () => {
    return (
        <div className="bg-white-pp py-20 mt-16">
            <div className="container font-fontpp mx-auto">
                {/* frist part */}
                <div className='flex flex-wrap gap-20 md:gap-2  items-center justify-center md:justify-between'>
                    {/* text */}
                    <div className="space-y-4 px-4">
                        <p className="text-xl font-semibold">Our Mission </p>
                        <h3 className="text-3xl font-semibold">
                            Inspire, Innovate Share
                        </h3>
                        <p className="text-xl font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad<br />
                            minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut<br /> aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    {/* img */}
                    <div>
                        <img src={imgOne} alt="" className='w-full' />
                    </div>
                </div>
                {/* two part */}
                <div className='pt-16 '>
                    <div className='flex md:flex-row gap-20 md:gap-2 flex-col-reverse items-center justify-between'>
                        {/* img */}
                        <div>
                            <img src={imgtwo} alt="" className='w-full' />
                        </div>
                        {/* text */}
                        <div className="space-y-4 px-4">
                            <p className="text-xl font-semibold">Laser focus </p>
                            <h3 className="text-3xl font-semibold">
                                Inspire, Innovate Share
                            </h3>
                            <p className="text-xl font-normal">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad<br />
                                minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut<br /> aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;