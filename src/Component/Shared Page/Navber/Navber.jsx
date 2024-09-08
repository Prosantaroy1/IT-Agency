import { NavLink } from 'react-router-dom';
import logo from '../../../assets/header/Vector (2).png'
import { FaBars } from 'react-icons/fa';

const Navber = () => {
    return (
        <div className='bg-blue font-fontpp py-6 md:px-1 px-4 text-white'>
            <div className="container mx-auto flex items-center justify-between">
                {/* logo */}
                <div>
                    <img src={logo} alt="" className='w-40' />
                </div>
                {/* navLink */}
                <div className='md:flex hidden'>
                    <ul className='flex text-xl items-center gap-10'>
                        <li className='hover:hover:text-yellow'>
                            <NavLink>Home</NavLink>
                        </li>
                        <li className='hover:hover:text-yellow'>
                            <NavLink>About us</NavLink>
                        </li>
                        <li className='hover:hover:text-yellow'>
                            <NavLink>Features</NavLink>
                        </li>
                        <li className='hover:hover:text-yellow'>
                            <NavLink>Pricing</NavLink>
                        </li>
                        <li className='hover:hover:text-yellow'>
                            <NavLink>FAQ</NavLink>
                        </li>
                        <li className='hover:hover:text-yellow'>
                            <NavLink>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <button className='border-2 hover:bg-yellow transition-all duration-300 hover:text-black px-4 py-2 rounded-3xl'>Contact us</button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* responsive */}
                <div className='md:hidden block'>
                    <FaBars className='md:text-4xl text-3xl'/>
                </div>

            </div>
        </div>
    );
};

export default Navber;