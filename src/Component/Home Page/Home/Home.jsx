import Banner from "../Banner/Banner";
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
        </div>
    );
};

export default Home;