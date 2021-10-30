import React from 'react';
import { withStorageListener } from './withStorageListener';
import './sincronizeContainer.css'

function ChangeAlert({show,toggleShow}) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export {ChangeAlertWithStorageListener};