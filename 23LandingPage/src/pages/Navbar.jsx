import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center p-3">
        <h1>Logo</h1>
        <ul className='flex gap-6'>
            <li className='font-bold text-yellow-950'>Services</li>
            <li className='font-bold text-yellow-950'>Work</li>
            <li className='font-bold text-yellow-950'>Process</li>
            <li className='font-bold text-yellow-950'>About</li>
        </ul>
        <button className="text-white bg-black p-3 rounded-3xl font-mono cursor-pointer text-xs">Start a project</button>
    </div>
  )
}

export default Navbar