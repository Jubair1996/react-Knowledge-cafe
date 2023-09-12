import PropTypes from "prop-types";
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAddBookmark}) => {
    const {cover,title,author_img,author,posted_date,reading_time,hashtags} = blog;
  return(
    <div className="my-8">
        <img className="w-full rounded" src={cover} alt={`Cover Picture of the ${title}`}/>
        <div className="flex justify-between items-center my-4">
          <div className="flex gap-4 justify-center items-center my-2">
            <img className="w-16" src={author_img} alt="" />
            <div>
                <h3 className="text-2xl font-medium">{author}</h3>
                <p className="text-xl">{posted_date}</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="text-xl">{reading_time} min read</span>
            <button onClick={handleAddBookmark} className="text-red-600 text-xl"><FaBookmark /></button>
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-4"> {title}</h2>
        {
          hashtags.map((hash,idx) => <span className="me-4 text-xl" key={idx}><a href="">#{hash}</a></span>)
        }
    </div>
  )
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
