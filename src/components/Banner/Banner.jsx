const Banner = () => {
    return (
        <div className="mb-14">
            <div className="bg-banner-bg bg-cover h-[86vh] flex items-center">
                {/* text-content  */}
                <div className="flex justify-center flex-col text-white space-y-4 bg-banner-text-gradient pl-10 h-[86vh]">
                    <h2 className="text-7xl font-bold">Find the <span className="text-action-primary-clr bg-white p-2 bg-opacity-60">right jobs</span> <br/> for you</h2>
                    <h4 className="text-4xl font-medium text-gray-300">Way we gives</h4>
                </div>
            </div>
        </div>
    );
};

export default Banner;