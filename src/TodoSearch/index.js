import React from "react";
import './TodoSearch.css';


//Actualizar estado por medio de props
//el componente que llame al componente TodoSEarch debe enviar 2 props ({searchValue,setSearchValue})
function TodoSearch ({searchValue,setSearchValue}){
    //cada vez que el usuario realice un cambio llamamos a la funcion setSearchValue
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return (
        <input 
        className="TodoSearch" 
        placeholder="Filtra tus TODOs"
        //conectando el compoente con el valor del estado
        value={searchValue}
        //al realizar un cambio ejecutar la funcion onSearchValueChange
        onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch};