import { TbCircleDashedNumber1, TbCircleDashedNumber2, TbCircleDashedNumber3, TbCircleDashedNumber4, TbCircleDashedNumber5 } from "react-icons/tb";

const AboutPlan = () => {
    return (
        <div className="py-20 mt-16">
            <div className="container overflow-x-auto font-fontpp px-20 mx-auto">
                <h3 className="text-4xl font-bold text-center py-6">The process we follow</h3>
                <div className="pt-8">
                    <ul className="timeline">
                        <li>
                            <div className="timeline-start timeline-box">
                                <h3 className="text-2xl font-semibold">Planning</h3>
                                <p className="font-normal pt-3">
                                    Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr.
                                </p>
                            </div>
                            <div className="timeline-middle">
                                <TbCircleDashedNumber1 className="text-4xl text-rellayellow" />
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <TbCircleDashedNumber2 className="text-4xl text-rellayellow" />
                            </div>
                            <div className="timeline-end timeline-box">
                                <h3 className="text-2xl font-semibold">Conception</h3>
                                <p className="font-normal pt-3">
                                    Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr.
                                </p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">
                                <h3 className="text-2xl font-semibold">Design</h3>
                                <p className="font-normal pt-3">
                                    Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr.
                                </p>
                            </div>
                            <div className="timeline-middle">
                                <TbCircleDashedNumber3 className="text-4xl text-rellayellow" />
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <TbCircleDashedNumber4 className="text-4xl text-rellayellow" />
                            </div>
                            <div className="timeline-end timeline-box">
                                <h3 className="text-2xl font-semibold">Development</h3>
                                <p className="font-normal pt-3">
                                    Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr.
                                </p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">
                                <h3 className="text-2xl font-semibold">Deploy</h3>
                                <p className="font-normal pt-3">
                                    Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr.
                                </p>
                            </div>
                            <div className="timeline-middle">
                                <TbCircleDashedNumber5 className="text-4xl text-rellayellow" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPlan;