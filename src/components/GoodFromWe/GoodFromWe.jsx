import Title from "../../utils/Title";
import { AiFillCheckCircle } from "react-icons/ai";

const GoodFromWe = () => {
    return (
        <div>
            <Title title="The finest aspect" describe="All expenses adhere to your budget"></Title>
            <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1">
                <div className="space-y-6 w-3/4">
                    <h2 className="flex gap-2">
                    <span className="text-3xl text-action-primary-clr"><AiFillCheckCircle/></span>
                    <span className="text-xl text-gray-600 font-semibold">Locate the ideal service for each pricing range. There are only project-based prices, not hourly charges.</span>
                    </h2>
                    <h2 className="flex gap-2">
                    <span className="text-3xl text-action-primary-clr"><AiFillCheckCircle/></span>
                    <span className="text-xl text-gray-600 font-semibold">In just a few minutes, turn your assignment over to a skilled freelancer and receive results that will last.</span>
                    </h2>
                    <h2 className="flex gap-2">
                    <span className="text-3xl text-action-primary-clr"><AiFillCheckCircle/></span>
                    <span className="text-xl text-gray-600 font-semibold">No surprises when quotes are given up front. Payments are only disbursed upon your approval.</span>
                    </h2>
                    <h2 className="flex gap-2">
                    <span className="text-3xl text-action-primary-clr"><AiFillCheckCircle/></span>
                    <span className="text-xl text-gray-600 font-semibold">Our 24/7 support staff is here to assist you whenever and wherever you need it.</span>
                    </h2>
                </div>
            </div>
            <div className="flex-1">
                <img className="rounded-md" src="https://i.ibb.co/VmMY5z8/standard-quality-control-concept-m.jpg" alt="good from we image"/>
            </div>
            </div>
        </div>
    );
};

export default GoodFromWe;