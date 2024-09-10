import hero from '../../../assets/Blog/bloghero.png'
import Blogcard from '../Blog Card/Blogcard';

const Bloghome = () => {
    return (
        <div className='py-12'>
            {/* first part */}
            <div className='container mx-auto space-y-5'>
                <h3 className='text-5xl text-center font-fontpp font-semibold'>
                    A UX Case Study on Creating a<br /> Studious Environment for Students
                </h3>
                <p className='font-fontpp text-center text-xl font-normal'>Lorem, ipsum dolor sit amet consectetur.</p>
                {/* img */}
                <img src={hero} alt="" className='w-full'/>
            </div>
             {/* blog */}
             <div className='mt-14'>
                <h3 className='text-center text-3xl font-semibold font-fontpp pb-12'>Our Blog</h3>
                <Blogcard/>
             </div>
        </div>
    );
};

export default Bloghome;