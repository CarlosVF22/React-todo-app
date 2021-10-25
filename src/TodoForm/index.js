import React from "react";
import "./TodoForm.css";

function TodoForm({addTodo,setOpenModal}){

    const [newTodoValue,setNewTodoValue] = React.useState("");

    const onChange = (event) =>{
        setNewTodoValue (event.target.value);
    };

    const onCancel = () =>{
        setOpenModal(false);
    };
    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };


    return(
        <form className="TodoForm" onSubmit={onSubmit}>
            <label className="TodoFormLabel">Agrega un nuevo TODO</label>
            <textarea
                className="TodoFormTextarea"
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe el TODO que quieras agregar"
            />
            <div className="TodoFormButtonContainer">
                <button
                    className="TodoButtonCancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoButtonAdd"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export{TodoForm};