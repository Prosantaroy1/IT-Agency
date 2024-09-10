import img1 from '../../../assets/Feature/support/sec1.png'
import img2 from '../../../assets/Feature/support/sec2.png'
import img3 from '../../../assets/Feature/support/sec3.png'


const Support = () => {
    return (
        <div className="bg-white-pp py-20 mt-16">
            <div className="container font-fontpp mx-auto">
                {/* frist part */}
                <div className='flex flex-wrap gap-20 md:gap-2  items-center justify-center md:justify-between'>
                    {/* text */}
                    <div className="space-y-4 px-4">
                        <p className="text-xl font-semibold">Our Mission </p>
                        <h3 className="text-3xl font-semibold">
                            Top agencies and freelancers<br /> around the world use <br />
                            Client-first
                        </h3>
                        <p className="text-xl font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad<br />
                            minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut<br /> aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    {/* img */}
                    <div>
                        <img src={img1} alt="" className='w-full' />
                    </div>
                </div>
                {/* two part */}
                <div className='pt-16 '>
                    <div className='flex md:flex-row gap-20 md:gap-2 flex-col-reverse items-center justify-between'>
                        {/* img */}
                        <div>
                            <img src={img2} alt="" className='w-full' />
                        </div>
                        {/* text */}
                        <div className="space-y-4 px-4">
                            <p className="text-xl font-semibold">Laser focus </p>
                            <h3 className="text-3xl font-semibold">
                                Get free Revisions and one week<br /> of free maintenance
                            </h3>
                            <p className="text-xl font-normal">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad<br />
                                minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut<br /> aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
                {/* three */}
                <div className='flex flex-wrap gap-20 md:gap-2  items-center justify-center md:justify-between'>
                    {/* text */}
                    <div className="space-y-4 px-4">
                        <p className="text-xl font-semibold">Our Mission </p>
                        <h3 className="text-3xl font-semibold">
                            Working with us, you will be<br /> getting 24/7 priority support
                        </h3>
                        <p className="text-xl font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad<br />
                            minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut<br /> aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    {/* img */}
                    <div>
                        <img src={img3} alt="" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;