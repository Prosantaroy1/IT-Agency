import hero from '../../../assets/Blog/bloghero.png'

const BlogDetails = () => {
    return (
        <div className='py-28 md:px-2 px-6'>
            <div className='container mx-auto space-y-5'>
                <h3 className='text-5xl text-center font-fontpp font-semibold'>
                    A UX Case Study on Creating a<br /> Studious Environment for Students
                </h3>
                <p className='font-fontpp text-center text-xl font-normal'>Lorem, ipsum dolor sit amet consectetur.</p>
                {/* img */}
                <img src={hero} alt="" className='w-full' />
            </div>
            {/* details */}
            <div className='pt-20 container mx-auto '>
                {/* one */}
                <div>
                    <h3 className='text-3xl font-fontpp font-semibold'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h3>
                    <p className='text-xl pt-6 font-fontpp font-normal'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates libero corporis minus,
                        sunt velit, rem a suscipit aperiam possimus eaque
                        voluptate esse beatae ut! Assumenda laborum ducimus repellendus magni. Assumenda?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates libero corporis minus,
                        sunt velit, rem a suscipit aperiam possimus eaque
                        voluptate esse beatae ut! Assumenda laborum ducimus repellendus magni. Assumenda?
                    </p>
                </div>
                {/* two */}
                <div>
                    <h3 className='text-3xl font-fontpp font-semibold'>
                        Ut enim ad minim veniam, quis nostrud.
                    </h3>
                    <p className='text-xl pt-6 font-fontpp font-normal'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates libero corporis minus,
                        sunt velit, rem a suscipit aperiam possimus eaque
                        voluptate esse beatae ut! Assumenda laborum ducimus repellendus magni. Assumenda?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates libero corporis minus,
                        sunt velit, rem a suscipit aperiam possimus eaque
                        voluptate esse beatae ut! Assumenda laborum ducimus repellendus magni. Assumenda?
                        sunt velit, rem a suscipit aperiam possimus eaque
                        voluptate esse beatae ut! Assumenda laborum ducimus repellendus magni. Assumenda?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates libero corporis minus,
                        sunt velit, rem a suscipit aperiam possimus eaque
                        voluptate esse beatae ut! Assumenda laborum ducimus repellendus magni. Assumenda?
                    </p>
                    <ul className='flex flex-col text-xl list-disc pt-8 pl-12'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    </ul>
                    <p className='text-xl pt-10 font-fontpp'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;