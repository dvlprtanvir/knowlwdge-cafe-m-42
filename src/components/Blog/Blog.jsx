import propTypes from 'prop-types'; 
// import { FaBeer } from 'react-icons/fa';
import { FcBookmark } from "react-icons/fc";


const Blog = ({blog, handleAddBookmark,handleMarkAsRead }) => {
    // console.log(blog)
    const {title, cover, author, author_img, posted_date, reading_time, hashtags, id} = blog;
    return (
        <div className='mb-20 border-8 rounded-2xl space-y-4'>
            <img className='w-full' src={cover} alt={`cover pic of the ${title}`} />
            <div className='flex justify-between'>
                <div className='flex '>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h1 className="text-2xl font-bold ">{author}</h1>
                        <h1 className="text-lg">{posted_date}</h1>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddBookmark(blog) } className='ml-2 text-2xl'><FcBookmark /></button>
                </div>
            </div>
            <h1 className="text-4xl my-5">{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a> </span> )
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(id, reading_time)}            
            className='text-purple-700 font-bold  underline'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes={
    blog: propTypes.object.isRequired
}

export default Blog;