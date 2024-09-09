import img1 from '../../../assets/header/Mask Group.png'
// 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const Testimonial = () => {
    return (
        <div className="py-28 ">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 px-10 font-fontpp mx-auto">
                {/* fris part */}
                <div className="space-y-5">
                    <h3 className="text-3xl font-semibold ">What our clients <br />say about us</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit sed.
                    </p>
                </div>
                {/* second part */}
                <div className="col-span-3">
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide>
                            <div className='space-y-5'>
                                <h3 className='md:text-3xl font-medium'>
                                    &quot;The best agency we’ve worked with so far.<br />
                                    They understand our product and are able to add<br /> new features with a great focus.&quot;
                                </h3>
                                <div className='flex items-center gap-6'>
                                    <img src={img1} alt="" />
                                    <div>
                                        <h4 className='text-xl font-medium'>Jenny Wilson</h4>
                                        <p>Vice President</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='space-y-5'>
                                <h3 className='md:text-3xl font-medium'>
                                    &quot;The best agency we’ve worked with so far.<br />
                                    They understand our product and are able to add<br /> new features with a great focus.&quot;
                                </h3>
                                <div className='flex items-center gap-6'>
                                    <img src={img1} alt="" />
                                    <div>
                                        <h4 className='text-xl font-medium'>Jenny Wilson</h4>
                                        <p>Vice President</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='space-y-5'>
                                <h3 className='md:text-3xl font-medium'>
                                    &quot;The best agency we’ve worked with so far.<br />
                                    They understand our product and are able to add<br /> new features with a great focus.&quot;
                                </h3>
                                <div className='flex items-center gap-6'>
                                    <img src={img1} alt="" />
                                    <div>
                                        <h4 className='text-xl font-medium'>Jenny Wilson</h4>
                                        <p>Vice President</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='space-y-5'>
                                <h3 className='md:text-3xl font-medium'>
                                    &quot;The best agency we’ve worked with so far.<br />
                                    They understand our product and are able to add<br /> new features with a great focus.&quot;
                                </h3>
                                <div className='flex items-center gap-6'>
                                    <img src={img1} alt="" />
                                    <div>
                                        <h4 className='text-xl font-medium'>Jenny Wilson</h4>
                                        <p>Vice President</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;