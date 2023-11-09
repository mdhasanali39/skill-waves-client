import { ProgressBar } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import PropTypes from "prop-types";

const Progressbar = ({ percent }) => {
  return (
    <td className="mt-2">
      <ProgressBar
        percent={percent}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      />
    </td>
  );
};
Progressbar.propTypes = {
    percent: PropTypes.number,
}
export default Progressbar;
