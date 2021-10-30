// siempre el retorno de la ultima funcion dentro del HOC tiene que ser un componente de React
// Utilizando high Order Function (HOC)
// Se utiliza with por convencion

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/index.js';


ReactDOM.render( //renderizando el componente app
    <App/>,
    document.getElementById("root")
);

