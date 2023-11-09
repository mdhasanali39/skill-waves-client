const Banner = () => {
    return (
        <div className="mb-14">
            <div className="bg-banner-bg rounded-md bg-cover h-[86vh] flex items-center">
                {/* text-content  */}
                <div className="flex justify-center w-full rounded-md text-center md:text-left flex-col text-white space-y-4 bg-banner-text-gradient pl-[14px] sm:pl-10 h-[86vh]">
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold">Find the <span className="text-white lg:text-action-primary-clr lg:bg-white p-2 lg:bg-opacity-60">right jobs</span> <br/> for you</h2>
                    <h4 className="text-3xl md:text-4xl font-medium text-gray-300">Way we gives</h4>
                </div>
            </div>
        </div>
    );
};

export default Banner;