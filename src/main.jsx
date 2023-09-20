//REACT => REACT DOM => FRONT-WEB NA WEB
//REACT NATIVE => FRONT-END NO MOBILE
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// import { PI as numeroPi, GTM_BRASIL as horarioBrasilia } from './teste'
// //importado usando export default
// import nomes from './nomes.js'

// função createRoot chamando o render // colocando root que é o container no html // 
ReactDOM.createRoot(document.getElementById('root')).render(
  // html fazendo o uso de tags
  //PARA FAZER O USO DOS RECURSOS DE TESTE, BASTA FAZER COMO SE FOSSE VARIÁVEIS NORMAIS
  <React.StrictMode>
    {/* {horarioBrasilia}
    {numeroPi}
    {nomes} */}
    <App />
  </React.StrictMode>,
)
