import React from 'react';
import { withStorageListener } from './withStorageListener';
import './sincronizeContainer.css'

function ChangeAlert({show,toggleShow}) {
    if (show){
        return (
            <div className="sincronizeContainer">
                <p>Hubo cambios, vuelve a cargar</p>
                <button
                    onClick={() => toggleShow(false)}
                >
                    Volver a cargar la información
                </button>
            </div>
        ); 
    } else{
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export {ChangeAlertWithStorageListener};