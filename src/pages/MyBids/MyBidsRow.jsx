import PropTypes from "prop-types";

const MyBidsRow = ({ job, mutate }) => {

    

  const {
    _id,
    status,
    job_title,
    deadline,
    employee_email,
  } = job || {};


  return (
    <tr>
      <td className="text-[14px]">{job_title}</td>
      <td className="text-[17px]">{employee_email}</td>
      <td className="text-[17px]">{deadline}</td>
      <td className="text-[17px] capitalize font-medium text-gray-600">{status}</td>
      <td className="text-[17px]">
        {
            status === "in-progress" && <button 
        onClick={()=>mutate(_id)}
        className="text-lg text-white font-semibold px-3 py-1 rounded-lg bg-green-500 border hover:bg-white hover:text-action-primary-clr hover:border-action-primary-clr transition ease-linear duration-300">
          Complete
        </button>}
      </td>
    </tr>
  );
};
MyBidsRow.propTypes = {
  job: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired,
};

export default MyBidsRow;
