import whoimg from '../../../assets/about/hero3.png'

const Whoare = () => {
    return (
        <div className="pt-12 ">
            <div className="container px-2 md:px-10 font-fontpp mx-auto">
                {/* text part */}
                <div className=' py-7 px-2'>
                    <p className="text-xl font-medium">Who we are</p>
                    {/* text box */}
                    <div className="flex justify-between items-center flex-wrap">
                        <div className="pt-4 space-y-4">
                            <h3 className="text-3xl font-semibold">Goal focussed</h3>
                            <p className='text-xl'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br /> enim ad minim veniam,
                                quis nostrud exercitation ullamco<br /> laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        {/* part two */}
                        <div className="pt-4 space-y-4">
                            <h3 className="text-3xl font-semibold">Continuous improvement</h3>
                            <p className='text-xl'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br /> enim ad minim veniam,
                                quis nostrud exercitation ullamco<br /> laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
                {/* img part */}
                <div className='flex items-center justify-center'>
                    <img src={whoimg} alt="" className='w-full'/>
                </div>
            </div>
        </div>
    );
};

export default Whoare;