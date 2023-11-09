import useAuth from "../../hooks/useAuth";
import MyPostedJobsRow from "./MyPostedJobsRow";
import Swal from "sweetalert2";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";

const MyPostedJobs = () => {
    const {user}  = useAuth()
    const axiosSecure = useAxios()
    const queryClient = useQueryClient()

    const {data: jobs} = useQuery({
      queryKey: ['jobsdata'],
      queryFn: async()=>{
        const res = await axiosSecure.get(`/jobs/posted-jobs?user-email=${user?.email}`);
        return res;
      }
    })

    // console.log(JobsData);
    // console.log(displayData);

    const {mutate} = useMutation({
      mutationKey: ['jobsdata'],
      mutationFn: async(id)=>{
            return axiosSecure.delete(`https://skill-waves-server.vercel.app/api/v1/job/delete-job/${id}`)
          },
      onSuccess: ()=>{
        Swal.fire({
          title: "Deleted!",
          text: "Your Job has been deleted.",
          icon: "success"
        });
        queryClient.invalidateQueries({queryKey: ['jobsdata']})
      }
    })

    // handle delete job 
    const handleDeleteJob = (id) =>{

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          mutate(id)
        }
      });

        
    }

  return (
    <div className="overflow-x-auto min-h-[86vh] mb-14">
      <table className="table table-xs">
        <thead>
          <tr>
            <th className="text-lg">Job Title</th>
            <th className="text-lg">Email</th>
            <th className="text-lg">Deadline</th>
            <th className="text-lg">Description</th>
            <th className="text-lg">Category</th>
            <th className="text-lg">Min Price</th>
            <th className="text-lg">Max Price</th>
            <th className="text-lg">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            jobs?.data?.map(job => <MyPostedJobsRow 
            key={job._id} 
            job={job}
            handleDeleteJob={handleDeleteJob}
            ></MyPostedJobsRow>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyPostedJobs;
