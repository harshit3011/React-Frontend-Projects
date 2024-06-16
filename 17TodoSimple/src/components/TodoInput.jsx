import React, { useState } from 'react'


function TodoInput({addTodo}) {

    const[input,setInput] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!input) return
        addTodo(input.trim())
        setInput("")
    }
    
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Add a todo"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Todo
      </button>
    </form>
  )
}

export default TodoInput