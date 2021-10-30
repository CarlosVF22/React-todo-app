import React from "react";
import { useLocalStorage } from "./useLocalStorage";

    //MANEJO DEL ESTADO----------------
    //cuando llamemos a la funcion setState re Renderizamos nuestro componente con el nuevo estado
    //con setSearchValue actualizamos el valor del estado
    //EL ESTADO NOS DEVUELVE UN ARRAY [state,setState]
    //los componentes comienzan con MAYUSCULA

function useTodos(){
    const {
        item:todos,
        saveItem:saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1',[]);

    const [searchValue,setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);
    
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

    //Añadiendo TODOs
    const addTodo =(text) =>{
        const newTodos = [...todos]//creamos un clon de la lista TODOs
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos) //llamamos a la funcion que va a guardar la informacion en localStorage y hacer el cambio en el estado
    }

    return(
        // propiedades que queramos compartir con nuestro contexto tiene que estar en value
        {
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal,
            sincronizeTodos,
        }
    );
}

export {useTodos};