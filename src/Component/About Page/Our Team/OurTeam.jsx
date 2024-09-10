import man1 from '../../../assets/about/man1.png'
import man2 from '../../../assets/about/man2.png'
import man3 from '../../../assets/about/man3.png'


const OurTeam = () => {
    return (
        <div className="md:py-28 bg-white-pp mt-28 py-12">
            <div className="container font-fontpp mx-auto">
                <h3 className="text-5xl text-center font-semibold">Meet our team</h3>
            </div>
            {/* team card */}
            <div className='grid container gap-20 mx-auto mt-16 items-center xl:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                {/* one */}
                <div className='flex bg-[#ffff] rounded-2xl  py-8 flex-col items-center justify-center'>
                    <img src={man1} alt="" />
                    <div className='pt-4 space-y-2'>
                        <h3 className='text-2xl text-center font-semibold'>John Smith</h3>
                        <p className='text-xl text-center font-medium'>CEO</p>
                    </div>
                </div>
                {/* two */}
                <div className='flex bg-[#ffff] rounded-2xl  py-8 flex-col items-center justify-center'>
                    <img src={man2} alt="" />
                    <div className='pt-4 space-y-2'>
                        <h3 className='text-2xl text-center font-semibold'>Simon Adams </h3>
                        <p className='text-xl text-center font-medium'>CTO</p>
                    </div>
                </div>
                {/* three */}
                <div className='flex bg-[#ffff] rounded-2xl  py-8 flex-col items-center justify-center'>
                    <img src={man1} alt="" />
                    <div className='pt-4 space-y-2'>
                        <h3 className='text-2xl text-center font-semibold'>Paul Jones</h3>
                        <p className='text-xl text-center font-medium'>Design Lead</p>
                    </div>
                </div>
                {/* four */}
                <div className='flex bg-[#ffff] rounded-2xl  py-8 flex-col items-center justify-center'>
                    <img src={man3} alt="" />
                    <div className='pt-4 space-y-2'>
                        <h3 className='text-2xl text-center font-semibold'>Sara Hardin</h3>
                        <p className='text-xl text-center font-medium'>Project Manager</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;