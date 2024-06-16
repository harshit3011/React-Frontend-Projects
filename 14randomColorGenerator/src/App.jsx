import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('white')
  const body = document.querySelector('body')
  body.style.backgroundColor = color

  const handleHEX=()=>{
    let hex = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log(hex)
    setColor(hex)
  }

  const handleRGB=()=>{
    let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb= `rgb(${r}, ${g}, ${b})`;
  console.log(rgb)
  setColor(rgb)
  }

  const handleRandom=()=>{
    const letters = '0123456789ABCDEF';
  let rand = '#';
  for (let i = 0; i < 6; i++) {
    rand += letters[Math.floor(Math.random() * 16)];
  }
  console.log(rand)
  setColor(rand)
  }
  

  return (
    <div className="flex items-center justify-center min-h-scree bg-white p-6 rounded-lg shadow-lg">
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" onClick={handleHEX}>Create HEX Color</button>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700" onClick={handleRGB}>Create RGB Color</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700" onClick={handleRandom}>Random Color</button>
      </div>
    </div>
  )
}

export default App
