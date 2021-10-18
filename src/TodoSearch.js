import React from "react";
import './TodoSearch.css';


function TodoSearch (){

    //agregando estado a nuestro componente
    //React.useState nos devuelve un array de 2 posiciones [state, setState()]
    //cuando llamemos a la funcuon setState re Renderizamos nuestro componente con el nuevo estado

    //con setSearchValue actualizamos el valor del estado
    const [searchValue,setSearchValue] = React.useState(''); //creamos el estado y enviamos el estado inicial que guardamos en la
    //variable searchValue

    //cada vez que el usuario realice un cambio llamamos a la funcion setSearchValue
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return [
        <input 
        className="TodoSearch" 
        placeholder="Cebolla"
        //conectando el compoente con el valor del estado
        value={searchValue}
        //al realizar un cambio ejecutar la funcion onSearchValueChange
        onChange={onSearchValueChange}
        />,
        <p>{searchValue}</p>
    ];
}

export {TodoSearch};