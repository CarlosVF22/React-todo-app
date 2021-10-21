import React from "react";
import { AppUI } from "./appUI";



// import './App.css';

// const defaultTodos = [
//   {text:'cortar cebollas', completed:false },
//   {text:'Tomar el curso de react', completed:true },
//   {text:'llorar con la llorona', completed:true },
// ];

//CUSTOM REACT HOOKE, LOCAL STORAGE Y MANEJO DEL ESTADO
function useLocalStorage(itemName, initialValue){ //Creando un custom react hook, comienza con use

  //SIMULANDO UNA API
  const [loading,setLoading] = React.useState(true);
  const [error,setError] = React.useState(false);

   //llamando al estado
  const [item,setItem] = React.useState(initialValue);//agregando estado al componente -setTodos funcion para cambiar estado


  React.useEffect(() =>{
    setTimeout(() =>{
      try{
        const localStorageItem = localStorage.getItem(itemName); //default 'itemName'
        let parsedItem; //parsedTodos sera enviado a estado de los todos de react

      if(!localStorageItem){ //verificamos si los usuarios son nuevos(que no haya informacion en localStorage)-si localStorageTodos es null, 0, und, etc
        localStorage.setItem(itemName,JSON.stringify(initialValue));//le tenemos que enviar un string, por que lo convertimos al array vacion con JSON.stringify-    //local storage solo acepta strings
        parsedItem = initialValue;
      }else {
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);
      setLoading(false);
      } catch(error){
        setError(error);
      }
    },1000); //esperar x tiempo para ejecutar codigo
  });

  //FUNCION PUENTE DE COMPLETE Y DELETE TODOS HACIA EL LOCAL STORAGE Y EL ESTADO
  const saveItem = (newItem) =>{
    try{
      const stringifiedItem = JSON.stringify(newItem);   //convertir los TODOs en strings
      localStorage.setItem(itemName,stringifiedItem);
      setItem(newItem);
    }catch(error){
      setError(error);
    }
  };

  return { //por convencion si tenemos mas de 2 estados para enviar es mejor enviar un objetos
    item,
    saveItem,
    loading,
    error,
  };
}

  //MANEJO DEL ESTADO----------------
    //cuando llamemos a la funcion setState re Renderizamos nuestro componente con el nuevo estado
    //con setSearchValue actualizamos el valor del estado
    //EL ESTADO NOS DEVUELVE UN ARRAY [state,setState]
//los componentes comienzan con MAYUSCULA

function App() {
  
  const {
    item:todos,
    saveItem:saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1',[]);

  const [searchValue,setSearchValue] = React.useState('');

    //contando TODOs totales y TODOs completed 
    const completedTodos = todos.filter(todo => !!todo.completed).length;     //utilizamos ! para verificar que la variable es falsa y doble !! es para verificar si es verdadera
    const totalTodos = todos.length;   //cuales todos tienen la propiedad completed como true
    let searchedTodos =[];//Creando el array que contendra los Todos buscados

    //en caso de que searchValue.length(cantidad de letras escritas) NO sea mayor o igual a 1
    if(!searchValue.length >=1){
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo =>{
          const todoText = todo.text.toLocaleLowerCase();// volvemos el valor de texto de todo a minuscula y lo guardamos
          const searchText = searchValue.toLocaleLowerCase();//volvemos el valor buscado que esta en searchValue en minuscula y lo guardamos
          return todoText.includes(searchText);// retornar falso o verdadero si searchText(letras buscadas) esta includo en el texto del todo
      });
    }

    //complete TODOs
    const completeTodo = (text) =>{
      const newTodos = [...todos] //creamos un clon de la lista TODOs
      const todoIndex = todos.findIndex(todo => todo.text ===text); //buscamos el index del TODOs que se quiere completar
      if(newTodos[todoIndex].completed ===true){
        newTodos[todoIndex].completed = false; //cambiamos su propiedad completed
        saveTodos(newTodos)//llamamos a la funcion que va a guardar la informacion en localStorage y hacer el cambio en el estado
      }else{  
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos) //llamamos a la funcion que va a guardar la informacion en localStorage y hacer el cambio en el estado
      }
    }

    //elimiando TODOs
    const deleteTodo =(text) =>{
      const newTodos = [...todos]//creamos un clon de la lista TODOs
      const todoIndex = todos.findIndex(todo => todo.text ===text);
      newTodos.splice(todoIndex,1);//eliminamos TODOs que este recibiendo el evento
      saveTodos(newTodos) //llamamos a la funcion que va a guardar la informacion en localStorage y hacer el cambio en el estado
    }

      //MANEJO DE EFECTOS



    // console.log("render(antes del useeffect");

    // React.useEffect(() =>{
    //   console.log('use effect');
    // },[totalTodos]); //el array nos permite definir cuando ejecutar nuestro UseEffect, con el array vacio solo se renderiza una vez

    // console.log("render(despues del useeffect");


  return (
    <AppUI
      loading={loading}
      error={error}
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