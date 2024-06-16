import React from 'react'

function TodoItem({todo,index,toggleTodo,deleteTodo}) {
  return (
    <li className="flex justify-between items-center mb-2 p-2 border rounded">
    <span
      className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}
      onClick={() => toggleTodo(index)}
    >
      {todo.text}
    </span>
    <button
      onClick={() => deleteTodo(index)}
      className="bg-red-500 text-white p-1 rounded"
    >
      Delete
    </button>
  </li>
  )
}

export default TodoItem
