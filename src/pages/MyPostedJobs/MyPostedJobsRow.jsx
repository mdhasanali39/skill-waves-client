import { BiEdit } from "react-icons/bi";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types'

const MyPostedJobsRow = ({job, handleDeleteJob}) => {

    const {
        _id,
        employer_email,
        job_title,
        job_deadline,
        category,
        min_price,
        max_price,
        description
      } = job || {}

    return (
        <tr>
            <td className="text-[14px] w-[200px]">{job_title}</td>
            <td className="text-[14px]">{employer_email}</td>
            <td className="text-[14px]">{job_deadline}</td>
            <td title={description} className="text-[14px] w-[200px]">{description.slice(0,100)+'...'}</td>
            <td className="text-[14px]">{category}</td>
            <td className="text-[14px]">{min_price}</td>
            <td className="text-[14px]">{max_price}</td>
            <td className="text-[14px]">
                <div className="flex gap-3">
                    {/* delete  */}
                    <span
                    onClick={()=>handleDeleteJob(_id)}
                     className="text-2xl cursor-pointer text-action-primary-clr"><FaTrash/></span>
                    {/* update  */}
                    <Link to={`/update-job/${_id}`}><span className="text-2xl cursor-pointer text-green-500"><BiEdit/></span></Link>
                </div>
            </td>
          </tr>
    );
};

MyPostedJobsRow.propTypes = {
    job: PropTypes.object.isRequired,
    handleDeleteJob: PropTypes.func.isRequired,
}

export default MyPostedJobsRow;