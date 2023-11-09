import { useState } from "react";
import addJobImg from "../../assets/images/add-job-page-bg.svg";
import useAuth from "../../hooks/useAuth";
import Title from "../../utils/Title";
import { useLoaderData, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosNoCredentials from "../../hooks/useAxiosNoCredentials";

const UpdateJob = () => {
  const { user } = useAuth();
  const job = useLoaderData();
  const [category, setCategory] = useState(job?.category);
  const axios = useAxiosNoCredentials();
  const location = useLocation()



  if(location?.pathname){
    document.title = `SkillWaves | Update-job | ${job?.job_title}`
  }
  
  console.log(job);

  // handle update job
  const handleUpdateJob = (e) => {
    e.preventDefault();

    const form = e.target;
    const employer_email = form["email-of-the-employer"].value;
    const job_title = form["job-title"].value;
    const job_deadline = form["job-deadline"].value;
    const min_price = parseFloat(form["job-min-price"].value);
    const max_price = parseFloat(form["job-max-price"].value);
    const description = form["job-description"].value;

    // condition

    if (isNaN(min_price) || min_price < 1) {
      toast.error(
        "Please enter valid price. Price should not be string nor less than 0"
      );
      e.target["job-min-price"].focus();
      return;
    }
    if (isNaN(max_price) || max_price < 1) {
      toast.error(
        "Please enter valid price. Price should not be string nor less than 0"
      );
      e.target["job-max-price"].focus();
      return;
    }

    const updateJob = {
      employer_email,
      job_title,
      job_deadline,
      category,
      min_price,
      max_price,
      description,
    };

    axios.put(`/job/update-job/${job?._id}`, updateJob)
    .then((res) => {
      if(res.data.modifiedCount >0){
        toast.success("Your job updated successfully")
      }
      console.log(res.data);
    }).catch((err) => {
      console.error(err)
    });

    // console.log(
    //   employer_email,
    //   job_title,
    //   job_deadline,
    //   min_price,
    //   max_price,
    //   description,
    //   'category', category
    // );
  };

  return (
    <div>
      <div>
        <img className="w-3/4 mx-auto" src={addJobImg} alt="add job image" />
      </div>
      <div className="lg:w-3/4 mx-auto min-h-[86vh] my-14 relative">
        {/* add job title  */}
        <Title
          title={"Update Job"}
          describe={"Update your job, efficiently"}
        ></Title>
        <form onSubmit={handleUpdateJob}>
          <div className="space-y-4 border shadow-lg bg-action-primary-clr bg-opacity-25 rounded-lg p-8">
            {/* Email of the employer  */}
            <div className="flex flex-col  p-3 rounded-md">
              <label
                htmlFor="email-employer"
                className="text-lg font-semibold text-gray-600 mb-1"
              >
                Email of the employer
              </label>
              <input
                type="text"
                name="email-of-the-employer"
                id="email-employer"
                defaultValue={user?.email}
                readOnly
                className="outline-none border-none placeholder-black  px-3 py-4 rounded-md"
              />
            </div>
            {/* job title  */}
            <div className="flex flex-col  p-3 rounded-md">
              <label
                htmlFor="job-title"
                className="text-lg font-semibold text-gray-600 mb-1"
              >
                Job title
              </label>
              <input
                type="text"
                name="job-title"
                id="job-title"
                placeholder="Job title"
                defaultValue={job?.job_title}
                required
                className=" outline-none border-none placeholder-black px-3 py-4 rounded-md"
              />
            </div>
            {/* Deadline */}
            <div className="flex flex-col  p-3 rounded-md">
              <label
                htmlFor="job-deadline"
                className="text-lg font-semibold text-gray-600 mb-1"
              >
                Job Deadline
              </label>
              <input
                type="date"
                name="job-deadline"
                id="job-deadline"
                placeholder="Deadline"
                defaultValue={job?.job_deadline}
                required
                className=" outline-none border-none placeholder-black px-3 py-4 rounded-md"
              />
            </div>
            {/* categories */}
            <div className="flex flex-col  p-3 rounded-md">
              <label
                htmlFor="job-deadline"
                className="text-lg font-semibold text-gray-600 mb-1"
              >
                Select Category
              </label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                defaultValue={job?.category}
                className="outline-none border-none px-3 py-4 rounded-md"
              >
                <option disabled>select one</option>
                <option defaultValue={"web development"}>
                  web_development
                </option>
                <option defaultValue={"digital marketing"}>
                  digital_marketing
                </option>
                <option defaultValue={" graphics design"}>
                  {" "}
                  graphics_design
                </option>
              </select>
            </div>
            {/* min price */}
            <div className="flex flex-col  p-3 rounded-md">
              <label
                htmlFor="job-min-price"
                className="text-lg font-semibold text-gray-600 mb-1"
              >
                Minimum price
              </label>
              <input
                type="text"
                name="job-min-price"
                id="job-min-price"
                placeholder="Minimum price"
                defaultValue={job?.min_price}
                required
                className=" outline-none border-none placeholder-black px-3 py-4 rounded-md"
              />
            </div>
            {/* max price */}
            <div className="flex flex-col  p-3 rounded-md">
              <label
                htmlFor="job-max-price"
                className="text-lg font-semibold text-gray-600 mb-1"
              >
                Maximum price
              </label>
              <input
                type="text"
                name="job-max-price"
                id="job-max-price"
                placeholder="Maximum price"
                defaultValue={job?.max_price}
                required
                className=" outline-none border-none placeholder-black px-3 py-4 rounded-md"
              />
            </div>
            {/* description */}
            <div className="flex flex-col  p-3 rounded-md">
              <label
                htmlFor="job-description"
                className="text-lg font-semibold text-gray-600 mb-1"
              >
                Job Description
              </label>
              <textarea
                type="text"
                name="job-description"
                id="job-description"
                placeholder="Enter description of your job"
                defaultValue={job?.description}
                required
                className=" outline-none border-none placeholder-black px-3 py-4 rounded-md"
              ></textarea>
            </div>
            {/* add job button  */}
            <div className="text-center py-7">
              <button
                type="submit"
                className="text-lg text-white font-semibold px-7 py-2 rounded-lg bg-action-primary-clr border border-action-primary-clr hover:bg-white hover:text-action-primary-clr hover:border-action-primary-clr transition ease-linear duration-300"
              >
                Update Job
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
