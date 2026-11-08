import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center p-3">
        <Link to="/"><h1>Logo</h1></Link>
        <ul className='flex gap-6'>
            <li className='font-bold text-yellow-950'> <Link to="/service">Services</Link></li>
            <li className='font-bold text-yellow-950'><Link to="/work">Work</Link></li>
            <li className='font-bold text-yellow-950'><Link to="/process">Process</Link></li>
            <li className='font-bold text-yellow-950'><Link to="/about">About</Link></li>
        </ul>
        <Link to="/forms"><button className="text-white bg-black p-3 rounded-3xl font-mono cursor-pointer text-xs">Start a project</button></Link>
    </div>
  )
}

export default Navbar