import React from "react";
import { AppUI } from "./appUI";



// import './App.css';

// const defaultTodos = [
//   {text:'cortar cebollas', completed:false },
//   {text:'Tomar el curso de react', completed:true },
//   {text:'llorar con la llorona', completed:true },
// ];

function App() { //los componentes comienzan con MAYUSCULA

  // LOCAL STORAGE, persistencia de datos
  // por default comenzamos el local storage con el 'TODOS_V1'
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  //parsedTodos sera enviado a estado de los todos de react
  let parsedTodos;

  //verificamos si los usuarios son nuevos(que no haya informacion en localStorage)

    // si localStorageTodos es null, 0, und, etc
  if(!localStorageTodos){
    //creamos un por defecto de la lista de TODOS.
    // le asignamos que por defecto va a ser un array vacio
    //le tenemos que enviar un string, por que lo convertimos al array vacion con JSON.stringify
    //local storage solo acepta strings
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos = [];
  }else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

    //agregando estado a nuestro componente
    //React.useState nos devuelve un array de 2 posiciones [state, setState()]

    //agregando state a los TODOs
    const [todos,setTodos] = React.useState(parsedTodos);

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


    //FUNCION PUENTE DE COMPLETE Y DELETE TODOS HACIA EL LOCAL STORAGE Y EL ESTADO
    const saveTodos = (newTodos) =>{
      //convertir los TODOs en strings
      const stringifiedTodos = JSON.stringify(newTodos);
      localStorage.setItem('TODOS_V1',stringifiedTodos);
      setTodos(newTodos);
    };

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
        saveTodos(newTodos)
      }else{  
        newTodos[todoIndex].completed = true;
        //llamamos a la funcion que va a guardar la informacion en localStorage y hacer el cambio en el estado
        saveTodos(newTodos)
      }
    }

    //elimiando TODOs
    const deleteTodo =(text) =>{
      const newTodos = [...todos]
      const todoIndex = todos.findIndex(todo => todo.text ===text);
      newTodos.splice(todoIndex,1);
      //llamamos a la funcion que va a guardar la informacion en localStorage y hacer el cambio en el estado
      saveTodos(newTodos)
    }

  return (
    <AppUI
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue ={searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo ={deleteTodo}
    />
  );
}

export default App;
//filtrar la cantidad de TODOs dependiendo en searchValue la cantidad de TODO que aparecen 
//palabras semejantes

// si searchValue es igual a alguna de las letras del todo, mostrarlo