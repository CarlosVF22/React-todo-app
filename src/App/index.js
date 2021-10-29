import React from "react";
import {useTodos} from "./useTodos";
import { TodoCounter } from "../TodoCounter/";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import{ Modal } from "../Modal";
import {TodoHeader} from "../TodoHeader";
import {TodoForm} from "../TodoForm";


function App() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        addTodo,
    } = useTodos();
    return(
    // React.Fragment es una etiqueta invisible que contiene nuestros componentes
    //solo se puede enviar una etiqueta por componente
    <React.Fragment> 
        <TodoHeader>
            <TodoCounter
                totalTodos={totalTodos}
                completedTodos ={completedTodos}
            />
            <TodoSearch
                searchValue ={searchValue}
                setSearchValue={setSearchValue}
            />
        </TodoHeader>


        <TodoList
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            totalTodos = {totalTodos}
            searchText = {searchValue}
            // Utilizando renders props
            onError={() => <p>Hubo un error</p>}
            onLoading={() =><p>Estamos cargando </p>}
            onEmptyTodos={()=><p>Crea tu primer TODOs</p>}
            onEmptySearchResults={
                (searchText)=><p>No hay resultados para {searchText}</p>
            }

            // Esto es una render props
            // render={todo => (
            //     <TodoItem
            //     key={todo.text} 
            //     text={todo.text} 
            //     completed={todo.completed}
            //     onComplete ={() => completeTodo(todo.text)}
            //     onDelete ={() => deleteTodo(todo.text)}
            // />
            // )}
        >

            {/* Esto es una renden function */}
            {todo => ( 
                <TodoItem
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete ={() => completeTodo(todo.text)}
                    onDelete ={() => deleteTodo(todo.text)}
                />
            )}

            
        </TodoList>
        {!!openModal && (
            <Modal>
                <TodoForm
                addTodo={addTodo}
                setOpenModal={setOpenModal}
                />
            </Modal>
        )}
        <CreateTodoButton 
            setOpenModal ={setOpenModal}
        />
    </React.Fragment>
    );
}

export default App;