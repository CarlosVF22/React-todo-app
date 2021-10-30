import React from "react";

//CUSTOM REACT HOOKE, LOCAL STORAGE Y MANEJO DEL ESTADO
function useLocalStorage(itemName, initialValue){ //Creando un custom react hook, comienza con use

    //SIMULANDO UNA API
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);
     //llamando al estado
    const [item,setItem] = React.useState(initialValue);//agregando estado al componente -setTodos funcion para cambiar estado
    const [sincronizedItem, setSincronizedItem] = React.useState(true);

    React.useEffect(() =>{
        setTimeout(() =>{
        try{
            const localStorageItem = localStorage.getItem(itemName); //default 'itemName'
            let parsedItem; //parsedTodos sera enviado a estado de los todos de react

            if(!localStorageItem){ //verificamos si los usuarios son nuevos(que no haya informacion en localStorage)-si localStorageTodos es null, 0, und, etc
                localStorage.setItem(itemName,JSON.stringify(initialValue));//le tenemos que enviar un string, por que lo convertimos al array vacion con JSON.stringify-    //local storage solo acepta strings
                parsedItem = initialValue;
            }else {
                parsedItem = JSON.parse(localStorageItem);
            }

            setItem(parsedItem);
            setLoading(false);
            setSincronizedItem(true)

        } catch(error){
            setError(error);
        }
      },2000); //esperar x tiempo para ejecutar codigo
    },[sincronizedItem]); //con el array vacio solo se ejecuta 1 ve nuestro efecto
    //FUNCION PUENTE DE COMPLETE Y DELETE TODOS HACIA EL LOCAL STORAGE Y EL ESTADO
    const saveItem = (newItem) =>{
        try{
            const stringifiedItem = JSON.stringify(newItem);   //convertir los TODOs en strings
            localStorage.setItem(itemName,stringifiedItem);
            setItem(newItem);
        }catch(error){
            setError(error);
        }
    };

    const sincronizeItem = () => {
        setLoading(true);
        setSincronizedItem(false);
    };

    return { //por convencion si tenemos mas de 2 estados para enviar es mejor enviar un objetos
        item,
        saveItem,
        loading,
        error,
        sincronizeItem,
    };
}

export {useLocalStorage};