import { useLoaderData, useLocation } from "react-router-dom";
import JobDetailsCard from "./JobDetailsCard";
import Title from "../../utils/Title";

const JobDetails = () => {
  const job = useLoaderData();
  // console.log(job);
  const location = useLocation()
  if(location?.pathname){
    document.title = `SkillWaves | job-details | ${job?.job_title}`
  }

  return (
    <div className="my-14">
      <div>
        <img className="w-3/4 mx-auto" src='https://i.ibb.co/hRnB1NZ/9798367-4236127.jpg' alt="add job image" />
      </div>
      <Title title="Job details" describe="see details info here and can bid"></Title>
      <div className="lg:w-3/5 mx-auto min-h-[86vh]">
        {<JobDetailsCard job={job}></JobDetailsCard>}
      </div>
    </div>
  );
};

export default JobDetails;
