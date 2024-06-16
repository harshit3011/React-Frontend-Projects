import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import FavouritesPage from './pages/FavouritesPage'

function App() {

  return (
    <div className='flex'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}/>
        <Route path='/favourites' element={<FavouritesPage></FavouritesPage>}/>
      </Routes>
    </div>
  )
}

export default App
