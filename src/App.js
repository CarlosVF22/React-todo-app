import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";



// import './App.css';

const todos = [
  {text:'cortar cebollas', completed:false },
  {text:'Tomar el curso de react', completed:false },
  {text:'llorar con la llorona', completed:false },

  
];

function App() { //los componentes comienzan con MAYUSCULA
  return (
    // React.Fragment es una etiqueta invisible que contiene nuestros componentes
    //solo se puede enviar una etiqueta por componente
    <React.Fragment> 
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
