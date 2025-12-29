import { useState } from 'react'
// IMPORTING !
import UseStateBasic from './01-usestate/usestate_basics'
import NavBar from './API\'s/components/nav'
import { Route, Routes } from 'react-router-dom'
import { Home, Article, About, Product } from "./API's/pages/"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* USE STATE BASICS */}
      {/* <UseStateBasic /> */}
      <NavBar />
      <main>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/articles' element={<Article/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
