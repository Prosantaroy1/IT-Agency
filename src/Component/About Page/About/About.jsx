import Abouthero from "../About hero/Abouthero";
import AboutPlan from "../About Plan/AboutPlan";
import OurMission from "../Our Mission/OurMission";
import OurTeam from "../Our Team/OurTeam";
import Whoare from "../Who are you/Whoare";

const About = () => {
    return (
        <div>
            <Abouthero/>
            <Whoare/>
            <AboutPlan/>
            <OurMission/>
            <OurTeam/>
        </div>
    );
};

export default About;