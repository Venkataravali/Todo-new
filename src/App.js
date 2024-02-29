

import React,{useState} from 'react';
import "./App.css";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {

  // create states

  const [todo,setTodo] = useState(""); //to create single todo
  const [todos,setTodos] = useState([]); // for all todos 
  const [editid,setEditId] = useState(0)

  const handleSubmit = (e)=>{
    e.preventDefault(); //to prevent refresh issues

    if(editid){
      const editTodo = todos.find((i)=>i.id === editid)

      const updatedTodos = todos.map((t)=>t.id === editTodo.id
      ?(t={id:t.id,todo})
      
      :{id: t.id,todo:t.todo}
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return ;
    }
    if(todo!== ''){
      setTodos([{id:`${todo}-${Date.now()}}`,todo},...todos])
      //if user enters two todos with same name how to differentiate them
      //Date.now current time in milliseconds it's unique
      //todos take all todos already inside the array and adding this one 
   setTodo("");
     
    }

    //whenever we writtern something it should store into todo

  }

//when you click on submit button it will fire handleSubmit function

const handleDelete = (id)=>{
  const deleteTodo = todos.filter((to)=>
  to.id!==id
  );
  setTodos([...deleteTodo])
}

const handleEdit = (id)=>{

  const editTodo = todos.find((i)=>i.id==id);
  setTodo(editTodo.todo) // id and as well as todo
  setEditId(id)  //id of var that we need to edit 

}


  return (
    <div className="App">
      <div className="container">
        <h1>Todo Lis App</h1>
        <TodoForm 
        handleSubmit={handleSubmit}
         todo={todo}
          setTodo={setTodo}
           editid={editid}/>
      <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete}/>

      </div>
    </div>
  )
}

export default App


// if you want to use curly braces then use return keyword 
//key is used to identify any modification in list