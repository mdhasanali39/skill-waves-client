import { useEffect } from "react";
import { useState } from "react";
import useAxiosNoCredentials from "../../hooks/useAxiosNoCredentials";
import PopularJobsCard from "./PopularJobsCard";
import Title from "../../utils/Title";

const PopularJobs = () => {
  const axios = useAxiosNoCredentials();
  const [popularJobs, setPopularJobs] = useState([]);

  console.log(popularJobs);

  useEffect(() => {
    axios
      .get("/jobs")
      .then((res) => {
        setPopularJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axios]);

  return (
    <div className="my-20">
        <Title title="popular" describe="popular jobs are create vibes"></Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {popularJobs.slice(0, 6).map((job) => (
          <PopularJobsCard key={job?._id} job={job}></PopularJobsCard>
        ))}
      </div>
    </div>
  );
};

export default PopularJobs;
