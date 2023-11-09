import Progressbar from "../../components/ProgressBar/ProgressBar";
import PropTypes from "prop-types";


const BidRequestsRow = ({bidJob, handleReject, handleAccept}) => {
    

    const {
        _id,
        status,
        job_title,
        price,
        deadline,
        employee_email,
      } = bidJob || {};


    return (
        <tr>
            <td className="text-[14px]">{job_title}</td>
            <td className="text-[17px]">{employee_email}</td>
            <td className="text-[17px]">{price}</td>
            <td className="text-[17px]">{deadline}</td>
            <td className="text-[17px]">{status === "canceled" ? "rejected": status}</td>
            {status === "canceled" ? '' :
             status === "in-progress" ? <Progressbar percent={75}></Progressbar> : status === "completed" ? <Progressbar percent={100}></Progressbar> :
               <td className="text-[17px]">
              <div className="flex gap-2 justify-center">
                {/* Accept button  */}
                <button
                onClick={()=>handleAccept(_id, {status: "in-progress"})}
                 className="text-lg text-white font-semibold px-3 py-1 rounded-lg bg-green-500 border hover:bg-white hover:text-action-primary-clr hover:border-action-primary-clr transition ease-linear duration-300">
                  Accept
                </button>
                {/* reject button */}
                <button
                onClick={()=>handleReject(_id,{status: "canceled"})}
                 className="text-lg text-white font-semibold px-3 py-1 rounded-lg bg-action-primary-clr border hover:bg-white hover:text-action-primary-clr hover:border-action-primary-clr transition ease-linear duration-300">
                  Reject
                </button>
              </div>
            </td>}
          </tr>
    );
};
BidRequestsRow.propTypes = {
    bidJob: PropTypes.object.isRequired,
    handleReject: PropTypes.func.isRequired,
    handleAccept: PropTypes.func.isRequired,
}
export default BidRequestsRow;