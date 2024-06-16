import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [selectedStarCount, setSelectedStarCount] = useState(0);
  const [hoverStarCount, setHoverStarCount] = useState(0)
  return (
    <div className='App'>
      Star rating
      <div className="stars">
      {[...Array(5)].map((_,index)=>{
        return <span key={index} 
        className={`${index+1<=selectedStarCount? "selected":""} ${index+1<=hoverStarCount? "selected":""}`}
        onMouseOver={()=>{
          setHoverStarCount(index+1)
        }}
        onMouseOut={()=>{
          setHoverStarCount(0)
        }}
        onClick={()=>{
          setSelectedStarCount(index+1)
        }}>&#9733;</span>
      })}
      </div>
      Rating count = {selectedStarCount}
    </div>
  )
}

export default App
