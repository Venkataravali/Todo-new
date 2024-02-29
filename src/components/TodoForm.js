import React from 'react'

const TodoForm = ({handleSubmit,setTodo,todo,editid}) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
    <input type="text"
    value={todo}
     onChange={(e)=>setTodo(e.target.value)} />
    <button type="submit">{editid ? "Edit": "Go"}</button>
  </form>
  )
}

export default TodoForm