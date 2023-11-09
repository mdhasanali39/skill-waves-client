import PropTypes from 'prop-types'

const Title = ({title, describe}) => {
    return (
        <div className="text-center mb-10">
            <h4 className="text-3xl uppercase font-bold text-gray-600 opacity-30">
            {title}
          </h4>
          <h2 className="text-3xl font-bold text-gray-600">
            {describe}
          </h2>
        </div>
    );
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
  describe: PropTypes.string.isRequired,
}
export default Title;