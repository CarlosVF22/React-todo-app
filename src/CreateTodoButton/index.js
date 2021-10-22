import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState); //devolviendo la negacion del estado anterior
    };
    return(
        <button 
        className="CreateTodoButton"
        onClick={onClickButton} //tenemos que envolver una funcion lo que esperamos que se ejecute cuando ocurra el evento
        >
            +
        </button>
    );
}

export {CreateTodoButton};