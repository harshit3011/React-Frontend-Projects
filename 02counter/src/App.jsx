import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] =useState(0)
  function addValue(){
    setCounter(counter+1);
  }
  function decValue(){
    setCounter(counter-1);   
  }

  return (
    <>
      <h1>React Project 2</h1>
      <h2>Counter Value = {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
