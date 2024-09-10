import logo1 from '../../../assets/Feature/logo/Logo Number.png'
import logo2 from '../../../assets/Feature/logo/Logo 1.png'
import logo3 from '../../../assets/Feature/logo/Logo 2 (1).png'
import logo4 from '../../../assets/Feature/logo/Logo 2.png'
import logo5 from '../../../assets/Feature/logo/Logo 4.png'
import logo6 from '../../../assets/Feature/logo/Logo 5.png'


const Logosec = () => {
    return (
        <div className='py-14'>
            <div className="container flex items-center gap-16 flex-wrap mx-auto">
                <img src={logo1} alt="" />
                <div>
                    <ul className='flex items-center gap-16 flex-wrap'>
                        <li><img src={logo6} alt="" /></li>
                        <li><img src={logo2} alt="" /></li>
                        <li><img src={logo3} alt="" /></li>
                        <li><img src={logo4} alt="" /></li>
                        <li><img src={logo5} alt="" /></li>
                        <li><img src={logo6} alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Logosec;