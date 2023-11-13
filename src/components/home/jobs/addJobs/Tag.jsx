import PropTypes from "prop-types";

const Tag = ({ text, onDelete }) => {
    return (
        <div className="text-sm text-[#008848] rounded-full px-2.5 py-1 bg-secondaryColor/60 font-semibold inline-block me-1">
            {text}
            <button
                onClick={onDelete}
                className="ml-2 text-errorColor/90 focus:outline-none"
            >
                x
            </button>
        </div>
    );
};

export default Tag;
Tag.propTypes = {
    text: PropTypes.string,
    onDelete: PropTypes.func,
};
