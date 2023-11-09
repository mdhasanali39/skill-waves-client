import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import BidRequestsRow from "./BidRequestsRow";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosNoCredentials from "../../hooks/useAxiosNoCredentials";

const BidRequests = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const axios = useAxiosNoCredentials();
  const queryClient = useQueryClient()

  const { data: bidRequestsData } = useQuery({
    queryKey: ["bidrequestsdata", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/bid/all?employer-email=${user?.email}`
      );
      return res.data;
    },
  });
  const { mutate } = useMutation({
    mutationKey: ["bidrequestsdata"],
    mutationFn: async (obj) => {
      console.log(obj);
      const res = await axios.patch(`/bid/update-specific/${obj?.id}`, obj?.status);
      return res;
    },
    onSuccess: ()=>{
      queryClient.invalidateQueries({queryKey: ["bidrequestsdata"]})
    }
  });

  //   handle accept
  const handleAccept = async (id, status) => {
    console.log(id);
    mutate({ id, status});
  };

  //   handle reject
  const handleReject = async (id, status) => {
    console.log(id);
    mutate({id, status});
  };

  return (
    <div className="overflow-x-auto min-h-[86vh] mb-14">
      <table className="table table-xs">
        <thead>
          <tr>
            <th className="text-lg">Job Title</th>
            <th className="text-lg">Email</th>
            <th className="text-lg">Price</th>
            <th className="text-lg">Deadline</th>
            <th className="text-lg">Status</th>
            <th className="text-lg text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {bidRequestsData?.map((bidJob) => (
            <BidRequestsRow
              key={bidJob?._id}
              bidJob={bidJob}
              handleReject={handleReject}
              handleAccept={handleAccept}
            ></BidRequestsRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidRequests;
