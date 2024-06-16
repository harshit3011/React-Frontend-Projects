import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [location, setLocation] = useState("")
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function fetchData(param) {
    setLoading(true)
    setError("")
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`)
      const data = await response.json()

      if (data.cod === 200) {
        setWeather(data)
      } else {
        setWeather(null)
        setError("Please enter a valid location")
      }
    } catch (error) {
      console.log(error)
      setWeather(null)
      setError("An error occurred while fetching the data")
    }
    setLoading(false)
  }

  function handleSearch() {
    fetchData(location)
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchData('london')
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="mt-4">
          <span className="block text-gray-600 text-sm mt-5">{getCurrentDate()}</span>
          <div className="bg-gray-100 p-6 rounded-lg shadow-inner text-gray-700 mt-7">
            {loading ? (
              <div className="text-center">
                <p className="text-xl font-bold">Loading...</p>
              </div>
            ) : weather ? (
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">{weather?.name}</h1>
                <p className="font-semibold mb-4">Weather Details:</p>
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-bold text-lg">Temperature:</h2>
                    <p className="text-xl">{weather?.main.temp}°K</p>
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">Description:</h2>
                    <p className="text-xl">{weather?.weather[0].description}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <h2 className="font-bold text-lg">Humidity:</h2>
                    <p className="text-xl">{weather?.main.humidity}%</p>
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">Wind Speed:</h2>
                    <p className="text-xl">{weather?.wind.speed} m/s</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-xl font-bold">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
