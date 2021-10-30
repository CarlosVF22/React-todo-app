import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/index.js';


function App(props){
    return(
        <h1>¡{props.saludo}, {props.nombre}!</h1>
    );
}

// siempre el retorno de la ultima funcion dentro del HOC tiene que ser un componente de React
// Utilizando high Order Function (HOC)
// Se utiliza with por convencion
function withSaludo (WrappedComponent){
    return function WrappedComponentWithSaludo(saludo) {
        return function ComponenteDeVerdad(props) {
            return (
                <React.Fragment>
                    <WrappedComponent {...props} saludo={saludo}/>
                    <p>Estamos acompañando al Al WrappedComponent</p>
                </React.Fragment>
            );
        }
    }
}

const AppWithSaludo = withSaludo(App)('Hola');


ReactDOM.render( //renderizando el componente app
    <AppWithSaludo nombre="Juanita"/>,
    // <App saludo="Buenas" nombre="Nath" />,
    document.getElementById("root")
);

