import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark = blog =>{
    const newBookMarks = [...bookmarks, blog]
    setBookmarks(newBookMarks);
  }
  const handleReadingTime = time =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }
  return (
    <>
     <Header></Header>
     <main className='md:flex gap-10 px-8 container mx-auto my-8'>
     <Blogs  handleAddBookmark={handleAddBookmark} handleReadingTime ={handleReadingTime}></Blogs>
     <Bookmarks readingTime = {readingTime} bookmarks= {bookmarks}></Bookmarks>
     </main>
    </>
  )
}

export default App
