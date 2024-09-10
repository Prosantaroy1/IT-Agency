import { RiTwitterXLine } from 'react-icons/ri';
import footer from '../../../assets/header/Vector (2).png'
import { FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className="py-16 mt-7 bg-blue">
                <div className="container mx-auto">
                    <footer className="footer  text-neutral-content p-10">
                        <aside>
                            <img src={footer} alt="" />
                            <p className='text-xl pt-4'>
                                We are always open to discuss your
                                <br /> project and improve your online presence.
                            </p>
                        </aside>
                        <nav>
                            <h6 className="text-4xl font-fontpp font-semibold text-white">Lets Talk!</h6>
                            <p className='pt-3 text-xl'>
                                We are always open to discuss your<br /> project, improve
                                your online presence and help with <br />your UX/UI design challenges.
                            </p>
                            <div className="pt-5">
                                <ul className='flex items-center gap-6'>
                                    <li><FaFacebook className='text-3xl' /></li>
                                    <li><FaYoutube className='text-3xl' /></li>
                                    <li><RiTwitterXLine className='text-3xl' /></li>
                                </ul>
                            </div>
                        </nav>
                    </footer>
                </div>
            </div>
            <div>
                <footer className="footer footer-center bg-base-300 text-base-content p-4">
                    <aside>
                        <p className='text-xl font-fontpp'>Copyright © {new Date().getFullYear()} - All right reserved by Finsweet Agency</p>
                    </aside>
                </footer>
            </div>
        </>
    );
};

export default Footer;