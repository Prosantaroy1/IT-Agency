import Blogcard from "../../Blog Page/Blog Card/Blogcard";
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
            <Faq />
            <ContactFrom />
            <div className="py-8">
                <h4 className="text-center text-4xl pb-6 font-fontpp font-semibold">Our Blog</h4>
                <Blogcard />
            </div>
        </div>
    );
};

export default Home;