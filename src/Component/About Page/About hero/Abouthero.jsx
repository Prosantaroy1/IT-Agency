import abouthero from '../../../assets/about/abouthero.png'

const Abouthero = () => {
    return (
        <div className="md:py-20 py-16">
            <div className="container px-3 md:px-28 flex md:gap-2 gap-8 md:flex-row flex-col-reverse items-center justify-between font-fontpp mx-auto">
                {/* titie part*/}
                <div className="space-y-4">
                    <p className="font-medium text-xl">About us</p>
                    <h3 className="text-4xl font-semibold">
                        Our designs solve<br /> problems
                    </h3>
                    <p className="font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/> do eiusmod
                        tempor incididunt ut labore et dolore magna<br/> aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
                {/* img part */}
                <div>
                    <img src={abouthero} alt="" className='w-full'/>
                </div>
            </div>
        </div>
    );
};

export default Abouthero;