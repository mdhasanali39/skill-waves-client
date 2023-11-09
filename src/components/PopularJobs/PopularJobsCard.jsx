import PropTpes from "prop-types";
import { Link } from "react-router-dom";

const PopularJobsCard = ({ job }) => {
  const { _id, job_title, job_deadline, min_price, max_price, description } =
    job || {};

  return (
    <div className="flex flex-col lg:flex-row border rounded-md bg-action-primary-clr bg-opacity-25 p-4">
      {/* left  */}
      <div className="flex-[4]">
        <h2 className="text-gray-600 text-lg font-semibold mb-2">
          {job_title}
        </h2>
        <p>{description.slice(0, 300) + "..."}</p>
      </div>
      {/* right  */}
      <div className="flex-2 space-y-2 mt-8 lg:mt-0">
        {/* price range  */}
        <p className="text-gray-600 text-[17px] font-semibold flex gap-1">
          <span className="mr-1">${min_price}</span>-<span>${max_price}</span>
        </p>
        <p>
          <span className="font-medium text-gray-600">End Date:</span>{" "}
          {job_deadline}
        </p>
        <div className="text-end">
        <Link to={`job/${_id}`}>
        <button
            className="text-lg text-white font-semibold px-3 py-2 rounded-lg bg-action-primary-clr border hover:bg-white hover:text-action-primary-clr hover:border-action-primary-clr transition ease-linear duration-300"
          >
            View
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};
PopularJobsCard.propTypes = {
  job: PropTpes.object.isRequired,
};

export default PopularJobsCard;
