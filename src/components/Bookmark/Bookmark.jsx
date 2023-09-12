import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-white my-2 p-2 rounded">
            <h2 className="text-xl">{title}</h2>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
  }
export default Bookmark;