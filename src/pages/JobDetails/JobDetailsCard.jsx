import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";

const JobDetailsCard = ({ job }) => {
  const { user } = useAuth();
  const navigate = useNavigate()

  const {
    employer_email,
    job_title,
    job_deadline,
    category,
    min_price,
    max_price,
    description,
  } = job || {};

  //   handle bid job
  const handleBidJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = parseFloat(form.price.value);
    const deadline = form.deadline.value;
    const employee_email = form["email-employee"].value;
    const job_owner_email = form["email-job-owner"].value;

    // check price 
    if (isNaN(price) || price < 1) {
      toast.error(
        "Please enter valid price. Price should not be string nor less than 0"
      );
      e.target.price.focus();
      return;
    }

    console.log(price, deadline, employee_email, job_owner_email);

    const bidJob = {
        status: "pending",
        job_title,
        price,
        deadline,
        employee_email,
        job_owner_email
    }

    axios.post('https://skill-waves-server.vercel.app/api/v1/job/bid-job', bidJob)
    .then(res =>{
      if(res.data.acknowledged){
        toast.success('Your bid request successful')
          navigate("/my-bids")
      }
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })

  };

  return (
    <div className="border rounded-md p-7 pt-10">
      <div>
        <div className="flex justify-between items-center">
          {/* title  */}
          <h2 className="text-gray-600 text-2xl font-semibold mb-2">
            {job_title}
          </h2>
          {/* price range  */}
          <p className="text-gray-600 text-[17px] font-semibold flex gap-1">
            <span className="mr-1">${min_price}</span>-<span>${max_price}</span>
          </p>
        </div>
        {/* job deadline  */}
        <p className="text-end mb-3">
          <span className="font-medium text-gray-600">End Date:</span>{" "}
          {job_deadline}
        </p>
        <p style={{ lineHeight: "2" }}>{description}</p>
      </div>
      <div className="space-y-3">
        {/* place your bid  */}
        <div>
          {/* form  */}
          <form onSubmit={handleBidJob}>
            {/* price  */}
            <div className="flex flex-col  p-3 rounded-md">
              <label
                htmlFor="price"
                className="text-lg font-semibold text-gray-600 mb-1"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                required
                className="outline-none border placeholder-black px-3 py-4 rounded-md"
              />
            </div>
            {/* Deadline */}
            <div className="flex flex-col  p-3 rounded-md">
              <label
                htmlFor="deadline"
                className="text-lg font-semibold text-gray-600 mb-1"
              >
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                id="deadline"
                placeholder="Deadline"
                required
                className=" outline-none border placeholder-black px-3 py-4 rounded-md"
              />
            </div>
            {/* Email of the employee  */}
            <div className="flex flex-col  p-3 rounded-md">
              <label
                htmlFor="email-employee"
                className="text-lg font-semibold text-gray-600 mb-1"
              >
                You Email
              </label>
              <input
                type="text"
                name="email-employee"
                id="email-employee"
                defaultValue={user?.email}
                readOnly
                className="outline-none border placeholder-black  px-3 py-4 rounded-md"
              />
            </div>
            {/* Email of the job owner  */}
            <div className="flex flex-col  p-3 rounded-md">
              <label
                htmlFor="email-job-owner"
                className="text-lg font-semibold text-gray-600 mb-1"
              >
                Email of the owner
              </label>
              <input
                type="text"
                name="email-job-owner"
                id="email-job-owner"
                defaultValue={employer_email ? employer_email : "not found"}
                readOnly
                className="outline-none border placeholder-black  px-3 py-4 rounded-md"
              />
            </div>

            {/* bid now button  */}
            {
              <div className="text-center py-7">
                <button
                  type="submit"
                  name="bid-on-the-job"
                  className={`${
                    user?.email === employer_email &&
                    "pointer-events-none bg-opacity-20"
                  } text-lg text-white font-semibold px-3 py-2 rounded-lg bg-action-primary-clr border hover:bg-white hover:text-action-primary-clr hover:border-action-primary-clr transition ease-linear duration-300 `}
                >
                  Bid on the job
                </button>
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  );
};
JobDetailsCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobDetailsCard;
