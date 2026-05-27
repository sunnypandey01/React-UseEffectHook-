import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [count,setCounter]=useState(5)



  // let count=5;
  const addValue=()=>{
    console.log("Clicked",count)
  count=count+1;
  setCounter(count)
  }
  const removeValue=()=>{
   setCounter(count-1)
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value : {count}</h2>
    <button onClick={addValue}> Add value{count}</button>
    <br />
    <button onClick={removeValue}>Remove Value{count}</button>
    <p>footer:{count}</p>
    </>
      
  )
}

export default App
