import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = blog =>{
    console.log("object");
  }
  return (
    <>
     <Header></Header>
     <main className='md:flex gap-10 px-8 container mx-auto my-8'>
     <Blogs  handleAddBookmark={handleAddBookmark}></Blogs>
     <Bookmarks></Bookmarks>
     </main>
    </>
  )
}

export default App
