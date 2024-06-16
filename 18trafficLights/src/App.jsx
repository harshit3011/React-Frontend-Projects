import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const trafficStates = [
    {
      state: "red",
      duration: 4000,
      backgroundColor: "red",
      next: "green"
    },
    {
      state: "yellow",
      duration: 500,
      backgroundColor: "yellow",
      next: "red"
    },
    {
      state: "green",
      duration: 3000,
      backgroundColor: "green",
      next: "yellow"
    }
  ];
  const [currentColor,setCurrentColor] = useState("red")

  useEffect(() => {
    const currentState = trafficStates.find(state => state.backgroundColor === currentColor);
    if (currentState) {
      const timer = setTimeout(() => {
        setCurrentColor(currentState.next);
      }, currentState.duration);
      return () => clearTimeout(timer); // Clean up the timeout on component unmount
    }
  }, [currentColor]);
  return (
    <div className='wrapper'>
      <div className='traffic-light-container'>
        {trafficStates.map((value,index)=>(
            <div key={index} className="traffic-light" style={{backgroundColor: value.backgroundColor==currentColor && value.backgroundColor}}>
              
            </div>
        ))}
    </div>
    </div>
  )
}

export default App
