import React from "react";
import { TodoCounter } from "../TodoCounter/";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";



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

    //Creando el array que contendra los Todos buscados
    let searchedTodos =[];

    //en caso de que searchValue.length(cantidad de letras escritas) NO sea mayoe o igual a 1
    if(!searchValue.length >=1){
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo =>{
          // volvemos el valor de texto de todo a minuscula y lo guardamos
          const todoText = todo.text.toLocaleLowerCase();
          //volvemos el valor buscado que esta en searchValue en minuscula y lo guardamos
          const searchText = searchValue.toLocaleLowerCase();
          // retornar falso o verdadero si searchText(letras buscadas) esta includo en el texto del todo
          return todoText.includes(searchText);
          
      });
    }

    //complete TODOs
    const completeTodo = (text) =>{
      //creamos un clon de la lista TODOs
      const newTodos = [...todos]
      //buscamos el index del TODOs que se quiere completar
      const todoIndex = todos.findIndex(todo => todo.text ===text);
      if(newTodos[todoIndex].completed ===true){
        //cambiamos su propiedad completed
        newTodos[todoIndex].completed = false;
        //ACTUALIZAMOS EL ESTADO
        // RE-RENDER
        setTodos(newTodos)
      }else{  
        newTodos[todoIndex].completed = true;
        setTodos(newTodos)
      }
    }

    //elimiando TODOs
    const deleteTodo =(text) =>{
      const newTodos = [...todos]
      const todoIndex = todos.findIndex(todo => todo.text ===text);
      newTodos.splice(todoIndex,1);
      setTodos(newTodos)
    }

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
        {/* recorremos el array que ya fue filtrado de TODOs */}
        {searchedTodos.map(todo =>(
          <TodoItem
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete ={() => completeTodo(todo.text)}
            onDelete ={() => deleteTodo(todo.text)}
            />
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
//filtrar la cantidad de TODOs dependiendo en searchValue la cantidad de TODO que aparecen 
//palabras semejantes

// si searchValue es igual a alguna de las letras del todo, mostrarlo