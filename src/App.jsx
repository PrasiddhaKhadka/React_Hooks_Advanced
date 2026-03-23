// import { useState } from 'react'
// IMPORTING !
import UseStateBasic from './01-usestate/usestate_basics'
import NavBar from './API\'s/components/nav'
import { Route, Routes } from 'react-router-dom'
import { Home, Article, About, Product } from "./API's/pages/"

// FOR CONTEXT API
import College from './context-api/components/College'
import ChangeToSubject from './context-api/index'
import { FirstPage } from './react_memo/first_page'
import MemoFirstPage from './use_memo/m_first_page'
import MemoProjectPage from './use_memo_small_project/mp_page'
import UFirstPage from './use_callbacks/u_first_page'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* USE STATE BASICS */}
      {/* <UseStateBasic /> */}
      {/* <NavBar /> */}
      {/* <main>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/articles' element={<Article/>}/>
        </Routes>
      </main> */}




      {/* FOR CONTEXT API */}
      {/* <div className='bg-gray-700 p-10' >
        <ChangeToSubject />
      </div> */}



      {/* IMPORTANT HOOKS */}
      {/* <FirstPage /> */}
      {/* <MemoFirstPage /> */}
      {/* <MemoProjectPage /> */}
      <UFirstPage />
    </>
  )
}

export default App
