import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[joke,setJoke] = useState('')
  const[loading,setLoading] =useState(true)

  const handleClick=()=>{
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();})
    .then(data=>{
      setJoke(data.joke)
      setLoading(false)
    })
    .catch(error => {
      setLoading(true)
        console.error('There has been a problem with your fetch operation:', error);
    });
  }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Random Joke Generator</h1>
        <div className="mb-4 text-gray-700">
          <p className="text-center">Click the button below to get a random joke!</p>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleClick}>
            Get Joke
          </button>
        </div>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-inner">
          {loading ? <p className="text-gray-800 italic">Your random joke will appear here...</p>: <p className="text-gray-800 italic">{joke}</p>}
        </div>
      </div>
    </div>
  )
}

export default App
