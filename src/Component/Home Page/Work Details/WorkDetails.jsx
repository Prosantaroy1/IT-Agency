import { useEffect, useState } from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const WorkDetails = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    return (
        <>
            <div className="bg-blue mb-8">
                <div className="container text-white py-28 font-fontpp mx-auto">
                    <h3 className="text-3xl text-center font-semibold">Our Work Portfolio</h3>
                    <p className="text-xl pt-5 font-medium text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Alias,
                        nemo! Placeat quos corrupti officia.
                    </p>
                </div>
            </div>
            {/* data cart */}
            <div className="container font-fontpp mb-9 mx-auto">
                <h4 className="text-4xl font-semibold  text-center mb-5 pt-8">Our Work</h4>
                {/* card */}
                <div className="grid xl:grid-cols-3 md:grid-cols-2 px-4 grid-cols-1 gap-8 items-center">
                    {
                        data.map((item) => <div key={item.id}>
                            <div className="card card-compact bg-base-100 h-96 w-full shadow-xl">
                                <figure>
                                    <img
                                        src={item.img}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body p-3 space-y-4 py-3">
                                    <h3 className="text-2xl font-fontpp">{item.title}</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                                        Iure, praesentium quos. Expedita, minima!</p>
                                    <NavLink to={`/item/${item.id}`}>
                                        <p className="text-xl cursor-pointer text-rellayellow flex items-center gap-2 font-medium">
                                            View More <TbArrowNarrowRight className="text-2xl" />
                                        </p>
                                    </NavLink>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default WorkDetails;