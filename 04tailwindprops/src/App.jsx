import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  const addValue =()=>{
    console.log("Add", count)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount =>prevCount + 1)
    setCount(prevCount =>prevCount+ 1)
    setCount(prevCount =>prevCount + 1)
  }
  const removeValue =()=>{
    console.log("remove", count)
    setCount(count - 1)
  }

  return (
    <>
    <button onClick={addValue}>Add {count}</button>
    <br/><br/>
    <button onClick={removeValue}>Remove {count}</button>

    </>
  )
}

export default App
