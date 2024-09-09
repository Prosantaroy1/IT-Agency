import Banner from "../Banner/Banner";
import ContactFrom from "../Contact From/ContactFrom";
import Faq from "../FAQ/FAQ";
import Features from "../Features/Features";
import ItWork from "../It Work/ItWork";
import Ourwork from "../Our work/Ourwork";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner />
            <ItWork />
            <Ourwork />
            <Features />
            <Testimonial />
            <Faq/>
            <ContactFrom/>          
        </div>
    );
};

export default Home;