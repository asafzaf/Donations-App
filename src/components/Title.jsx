import PropTypes from 'prop-types';
import "../styles.css";

const Title = ({ title }) => {
    return (
        <div className='titleSpace'>
        <h1 className='title'>{title}</h1>
        </div>
    );
    }

    Title.propTypes = {
        title: PropTypes.string.isRequired,
    };

export default Title;