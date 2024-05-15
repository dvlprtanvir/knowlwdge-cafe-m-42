
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark = blog => {
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (id, time) => {
    // console.log('marking as readdddddddddd', time);
    // setReadingTime(readingTime + time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // console.log('remove bookmark', id);
    const remaningBookmarks = bookmarks.filter(bookmark=> bookmark.id !== id);
    setBookmarks(remaningBookmarks);
  }

  return (
    <>

      <Header></Header>

      <div className='flex max-w-7xl mx-auto '>
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>



    </>
  )
}

export default App
