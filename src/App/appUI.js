import React from "react";
import { TodoCounter } from "../TodoCounter/";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos, 
    searchValue,
    setSearchValue, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
}){
    return(
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
        {/* useeffect - Estados de carga */ }
        {error && <p>Hubo un error</p> }
        {loading && <p>Estamos cargando </p> }
        {/* si no esta cargando Y searchedTodos no tiene informacion ENTONCES(&&) crea tu primer todo */}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODOs</p>} 
        

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

export{AppUI}