import { NavLink } from 'react-router-dom';
import blog1 from '../../../assets/Blog/blog1.png'
import blog2 from '../../../assets/Blog/blog2.png'
import blog3 from '../../../assets/Blog/blog3.png'
import { GoArrowRight } from 'react-icons/go';


const Blogcard = () => {
    return (
        <div className='md:px-2 px-6'>
            <div className="container mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-6">
                {/* one */}
                <div className="card bg-base-100 w-full shadow-xl">
                    <figure>
                        <img
                            src={blog3}
                            alt="Shoes" className='w-full' />
                    </figure>
                    <div className="card-body font-fontpp">
                        <h4>27 Jan 2024</h4>
                        <h4 className='text-2xl font-semibold'>
                            How one Webflow user grew his
                            single person consultancy from $0-100K in 14 months
                        </h4>
                        <p className='font-normal'>
                            See how pivoting to Webflow changed one<br /> person’s sales strategy and
                            allowed him to attract
                        </p>
                        <div>
                            <NavLink to='/details' className='flex text-rellayellow text-xl font-semibold items-center gap-3'>Read More <GoArrowRight className='text-2xl' /></NavLink>
                        </div>
                    </div>
                </div>
                {/* two */}
                <div className="card bg-base-100 w-full shadow-xl">
                    <figure>
                        <img
                            src={blog2}
                            alt="Shoes" className='w-full' />

                    </figure>
                    <div className="card-body font-fontpp">
                        <h4>14 Jan 2024</h4>
                        <h4 className='text-2xl font-semibold'>
                            How one Webflow user grew his
                            single person consultancy from $0-100K in 14 months
                        </h4>
                        <p className='font-normal'>
                            See how pivoting to Webflow changed one<br /> person’s sales strategy and
                            allowed him to attract
                        </p>
                        <div>
                            <NavLink to='/details' className='flex text-rellayellow text-xl font-semibold items-center gap-3'>Read More <GoArrowRight className='text-2xl' /></NavLink>
                        </div>
                    </div>
                </div>
                {/* three */}
                <div className="card bg-base-100 w-full shadow-xl">
                    <figure>
                        <img
                            src={blog1}
                            alt="Shoes" className='w-full' />
                    </figure>
                    <div className="card-body font-fontpp">
                        <h4>18 Jan 2024</h4>
                        <h4 className='text-2xl font-semibold'>
                            How one Webflow user grew his
                            single person consultancy from $0-100K in 14 months
                        </h4>
                        <p className='font-normal'>
                            See how pivoting to Webflow changed one<br /> person’s sales strategy and
                            allowed him to attract
                        </p>
                        <div>
                            <NavLink to='/details' className='flex text-rellayellow text-xl font-semibold items-center gap-3'>Read More <GoArrowRight className='text-2xl' /></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogcard;