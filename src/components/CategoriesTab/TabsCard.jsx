import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TabsCard = ({ job }) => {
  const {_id, job_title, job_deadline, min_price, max_price, description } =
    job || {};
  return (
    <div className="flex flex-col md:flex-row gap-6 border rounded-md p-5">
      <div className="flex-[3]">
        <h2 className="text-gray-600 text-lg font-semibold mb-2">
          {job_title}
        </h2>
        <p>{description.slice(0, 300) + "..."}</p>
      </div>
      <div className="flex-[1] space-y-3">
        {/* price range  */}
        <p className="text-gray-600 text-[17px] font-semibold flex gap-1">
          <span className="mr-1">${min_price}</span>-<span>${max_price}</span>
        </p>
        <p>
          <span className="font-medium text-gray-600">End Date:</span>{" "}
          {job_deadline}
        </p>
        {/* bid now button  */}
        <div>
        <Link to={`/job/${_id}`}>
          <button
            className="text-lg text-white font-semibold px-3 py-2 rounded-lg bg-action-primary-clr border hover:bg-white hover:text-action-primary-clr hover:border-action-primary-clr transition ease-linear duration-300"
          >
            Bid Now
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};
TabsCard.propTypes = {
    job: PropTypes.object.isRequired,
};
export default TabsCard;
