import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let  [counter, setCounter] = useState(0)
  //  let counter =20

   const addValue =() => {
    console.log("Clicked",counter);
    setCounter(counter + 1)

   }

   const removeValue =() =>{
    console.log("Clicked ", counter)
    setCounter(counter -1)
   }


  return (
    <>
    <h2>Chai Aur React</h2>
    <h3>Counter Value:{counter}</h3>

    <button onClick={addValue}>Add Value {counter}</button>  

    <button onClick={removeValue}>Remove Value{counter}</button>
   
    </>

  )
}

export default App
