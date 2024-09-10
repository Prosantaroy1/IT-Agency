import { NavLink } from 'react-router-dom';
import error from '../../assets/error/404.png'

const Errorpage = () => {
    return (
        <div>
            <div className='container mx-auto flex items-center flex-col gap-12 justify-center h-screen'>
                <img src={error} alt="" />
                <p className='text-xl font-medium '>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quisquam ipsam consectetur!
                </p>
                <button className='bg-rellayellow text-white rounded-lg px-12 py-4 text-xl font-semibold'>
                    <NavLink to='/'>Go Back</NavLink>
                </button>
            </div>
        </div>
    );
};

export default Errorpage;