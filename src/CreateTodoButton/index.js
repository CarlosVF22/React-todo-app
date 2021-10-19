import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props){
    const onClickButton = (msg) => {
        alert(msg);
    }
    return(
        <button 
        className="CreateTodoButton"
        onClick={() => onClickButton('Aqui deberia aparecer el modal')} //tenemos que envolver una funcion lo que esperamos que se ejecute cuando ocurra el evento
        >
            +
        </button>
    );
}

export {CreateTodoButton};