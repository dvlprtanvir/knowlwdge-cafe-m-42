
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  return (
    <>

      <Header></Header>

      <div className='flex max-w-7xl mx-auto '>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>



    </>
  )
}

export default App
