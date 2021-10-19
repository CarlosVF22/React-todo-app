import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";



// import './App.css';

const defaultTodos = [
  {text:'cortar cebollas', completed:false },
  {text:'Tomar el curso de react', completed:true },
  {text:'llorar con la llorona', completed:true },
];

function App() { //los componentes comienzan con MAYUSCULA

    //agregando estado a nuestro componente
    //React.useState nos devuelve un array de 2 posiciones [state, setState()]

    //agregando state a los TODOs
    const [todos,setTodos] = React.useState(defaultTodos);

    //cuando llamemos a la funcion setState re Renderizamos nuestro componente con el nuevo estado
    //con setSearchValue actualizamos el valor del estado
    const [searchValue,setSearchValue] = React.useState(''); //creamos el estado y enviamos el estado inicial que guardamos en la
    //variable searchValue

    //contando TODOs totales y TODOs completed
    //utilizamos ! para verificar que la variable es falsa y doble !! es para verificar si es verdadera
    //cuales todos tienen la propiedad completed como true
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

  return (
    // React.Fragment es una etiqueta invisible que contiene nuestros componentes
    //solo se puede enviar una etiqueta por componente
    <React.Fragment> 
      <TodoCounter 
        total = {totalTodos}
        completed = {completedTodos}
      />

      <TodoSearch 
        //agregamos las props que seran enviadas al componente TodoSearch
        searchValue ={searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        {todos.map(todo =>(
          <TodoItem
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
//filtrar la cantidad de TODOs dependiendo en searchValue la cantidad de TODO que aparecen 
//palabras semejantes
