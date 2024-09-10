import Faq from "../../Home Page/FAQ/FAQ";
import Benefit from "../Benefit/Benefit";
import Featurehero from "../Feature Hero/Featurehero";
import Logosec from "../Logo sec/Logosec";
import Support from "../Support Details/Support";

const Feature = () => {
    return (
        <div className="mb-14">
            <Featurehero/>
            <Logosec/>
            <Benefit/>
            <Support/>
            <Faq/>
        </div>
    );
};

export default Feature;