import React from 'react';
import { useStorageListener } from './useStorageListener';
import './sincronizeContainer.css'

function ChangeAlert({sincronize}) {
    const {show,toggleShow} = useStorageListener(sincronize);

    if (show){
        return (
            <div className="sincronizeContainer">
                <p>Parece que hubo cambios en otra pestaña o ventada del navegador ¿quieres volver a cargar la información?</p>
                <button
                    onClick={() => toggleShow(false)}
                >
                    SI
                </button>
            </div>
        ); 
    } else{
        return null;
    }
}

export {ChangeAlert};