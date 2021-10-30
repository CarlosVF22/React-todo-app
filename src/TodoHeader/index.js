//React.Children.toArray siempre nos devolvera un array con los elementos de los children
import React from "react";


function TodoHeader({children, loading}){

    return(
        <header>
            { //enviamos nvlas propiedades que queremos que tenga el clon 
            React.Children
            .toArray(children)
            .map(child => React.cloneElement(child,{loading}))
            } 
        </header>
    );
}

export{TodoHeader};