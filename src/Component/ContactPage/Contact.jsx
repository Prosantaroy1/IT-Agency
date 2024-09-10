
const Contact = () => {
    return (
        <div className="py-16">
            <div className="container font-fontpp mx-auto">
                {/* title */}
                <div className="space-y-3">
                    <h3 className="text-4xl font-semibold text-center">Contact Us</h3>
                    <p className="text-center text-xl font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                        sed do eiusmod tempor incididunt ut labore.
                    </p>
                    {/* from */}
                    <div className="pt-12 px-7 md:px-36">
                        {/* frist part */}
                        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
                            <div>
                                <label className="text-xl pb-2 font-medium block">Name</label>
                                <input type="text" placeholder="Enter your name" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="text-xl pb-2 font-medium block">Email</label>
                                <input type="email" placeholder="Enter your email" className="input input-bordered w-full" />
                            </div>
                        </div>
                        {/* second part */}
                        <div className="grid pt-8 md:grid-cols-2 grid-cols-1 items-center gap-6">
                            <div>
                                <label className="text-xl pb-2 font-medium block">Subject</label>
                                <input type="text" placeholder="Provide context" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="text-xl pb-2 font-medium block">Subject</label>
                                <input type="email" placeholder="Select Subject" className="input input-bordered w-full" />
                            </div>
                        </div>
                        {/* text area */}
                        <div className="pt-10">
                            <label className="text-xl pb-2 font-medium block">Message</label>
                            <textarea placeholder="White your Commet " className="w-full border p-5 rounded-md border-black"></textarea>
                        </div>
                        <div className="pt-3">
                            <button className="bg-yellow px-4 py-3 text-xl font-medium rounded">Send Messege</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;