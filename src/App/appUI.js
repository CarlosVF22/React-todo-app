import React from "react";
import { TodoCounter } from "../TodoCounter/";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";

function AppUI({
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