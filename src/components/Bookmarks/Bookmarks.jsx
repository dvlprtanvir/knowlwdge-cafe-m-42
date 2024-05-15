import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-300 m-4 rounded-xl">
            <div>
                <h3 className="text-xl text-center">Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-2xl text-center">Bookmarks:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;