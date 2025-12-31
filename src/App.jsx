// import { useState } from 'react'
// IMPORTING !
import UseStateBasic from './01-usestate/usestate_basics'
import NavBar from './API\'s/components/nav'
import { Route, Routes } from 'react-router-dom'
import { Home, Article, About, Product } from "./API's/pages/"

// FOR CONTEXT API
import College from './context-api/components/College'
import ChangeToSubject from './context-api/index'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* USE STATE BASICS */}
      {/* <UseStateBasic /> */}
      <NavBar />
      {/* <main>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/articles' element={<Article/>}/>
        </Routes>
      </main> */}




      {/* FOR CONTEXT API */}
      <div className='bg-gray-700 p-10' >
        <ChangeToSubject />
      </div>
    </>
  )
}

export default App
