import { useState } from 'react'
import './App.css'

function App() {
  const [date,setDate] = useState('')
  const [age, setAge] = useState(0)
  const handleClick=()=>{
   const dob = new Date(date)
   const today = new Date()
   let age = today.getFullYear()-dob.getFullYear()
   const monthdiff = today.getMonth()-dob.getMonth()
   if(monthdiff<0 || (monthdiff===0 && today.getDate()<dob.getDate())){
    age--;
   }
   setAge(age)
  }
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="bg-black shadow-lg rounded p-10 w-96">
      <h1 className="text-3xl font-bold mb-4 text-white">Age Calculator</h1>
      <input type="date"
      value={date}
      onChange={(e)=>setDate(e.target.value)}
      className="w-full p-2 mb-4"
      placeholder="Enter your date of birth"
      />
      <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded" onClick={handleClick}>Generate Age</button>
      <button className="bg-orange-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
        setDate('')
        setAge(0)
      }}>Reset</button>
      <p className="bg-purple-500 text-xl font-bold text-white py-2 px-3 mt-4">Your age is: {age} </p>
    </div>
  </div>
  )
}

export default App
