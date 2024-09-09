import imgOne from '../../../assets/img/conact.png'

const ContactFrom = () => {
    return (
        <div className="pt-12">
            <div className="container font-fontpp flex flex-wrap items-center px-3 md:px-14 mx-auto">
                {/* one part */}
                <div className="relative">
                    <img src={imgOne} alt="" className="opacity-75" />
                    {/* effect */}
                    <div className=" flex text-black flex-col justify-center p-6 gap-6  absolute top-0  h-full left-0 right-0  w-full">
                        <h3 className="text-4xl  font-bold">
                            Building stellar <br />websites for<br /> early startups
                        </h3>
                        <p className="text-xl font-semibold">
                            Euismod faucibus turpis eu gravida<br /> mi. Pellentesque et velit aliquam
                        </p>
                    </div>
                </div>
                {/* two part */}
                <div className='bg-[#1C1E53] px-12 font-fontpp py-24 text-white'>
                    <div className="w-full h-full shadow-2xl">
                        <h1 className='text-3xl font-semibold'>Send inquiry</h1>
                        <p className='text-xl pt-2 font-medium'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                            sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name?" className="input text-black input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your email?" className="input text-black input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input text-black input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn rounded-full hover:text-white text-black bg-yellow btn-primary">Send an Inquiry</button>
                            </div>
                            <div className='flex items-center justify-center py-6'>
                                <p className='text-xl font-semibold text-white'>Get in touch with us</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFrom;