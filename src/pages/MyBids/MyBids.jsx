import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import MyBidsRow from "./MyBidsRow";
import useAxiosNoCredentials from "../../hooks/useAxiosNoCredentials";

const MyBids = () => {
  const axiosSecure = useAxios();
  const axios = useAxiosNoCredentials();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: bidJobs } = useQuery({
    queryKey: ["bidsdata", status],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/bid/all?user-email=${user?.email}`
      );
      return res.data;
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["bidsdata"],
    mutationFn: (id) => {
      return axios.patch(`/bid/update-specific/${id}`, { status: "completed" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bidsdata"] });
    },
  });

  return (
    <div className="overflow-x-auto min-h-[86vh] mb-14">
      <table className="table table-xs">
        <thead>
          <tr>
            <th className="text-lg">Job Title</th>
            <th className="text-lg">Email</th>
            <th className="text-lg">Deadline</th>
            <th className="text-lg">Status</th>
            <th className="text-lg">Action</th>
          </tr>
        </thead>
        <tbody>
          {bidJobs?.map((job) => (
            <MyBidsRow key={job?._id} job={job} mutate={mutate}></MyBidsRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBids;
