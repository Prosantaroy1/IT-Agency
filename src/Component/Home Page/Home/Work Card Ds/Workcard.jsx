import {  useParams } from "react-router-dom";

import { data } from "../../../../data/data";

const Workcard = () => {

    const { id } = useParams();
    // all data
    // const card = useLoaderData();

    // 
    const datas = data.find((item) => item.id == id)

    return (
        <div className="py-28 md:px-3 px-5">
            <div className="container font-fontpp mx-auto">
                {/* title */}
                <div className="space-y-4 pt-5">
                    <h4 className="text-xl">Web design and development</h4>
                    <h3 className="text-5xl font-semibold">
                        Finsweet Design case<br /> studies
                    </h3>
                    <p className="text-xl font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit<br />
                        Pariatur laudantium ab voluptate,
                        dolorem nihil alias expedita ut.<br /> Tempora numquam tenetur dolorum ab!
                    </p>
                </div>
                {/* img */}
                <div className="mt-7">
                    <img src={datas.img} alt="" className=" w-[1050px]" />
                    <h3 className="pt-4 text-2xl font-medium">{datas.title}</h3>
                </div>
                {/* about */}
                <div className="pt-7 px-3 space-y-6 md:px-16">
                    <h3 className="font-semibold text-3xl">About the project</h3>
                    <p className="text-xl font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
                        sequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    {/* list */}
                    <ul className="px-6 text-xl font-normal list-disc">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    </ul>
                </div>
                {/*  */}
                <div className="pt-4 px-3 space-y-6 md:px-16">
                    <h3 className="font-semibold text-3xl">How we do it</h3>
                    <p className="text-xl font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
                        sequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    {/* list */}
                    <ul className="px-6 text-xl font-normal list-disc">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    </ul>
                    <ul className="text-xl flex items-center gap-8 flex-wrap font-medium">
                        <li className="text-rellayellow font-semibold">Keywords</li>
                        <li>Design </li>
                        <li>Wireframing</li>
                        <li>Development</li>
                        <li>webflow</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Workcard;