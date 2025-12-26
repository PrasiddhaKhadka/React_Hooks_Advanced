import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// IMPORTING !
import UseStateBasic from './01-usestate/usestate_basics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* USE STATE BASICS */}
      <UseStateBasic />
    </>
  )
}

export default App
