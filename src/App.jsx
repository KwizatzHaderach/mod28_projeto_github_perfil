//para importar 1 importação 2 código 

import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";


function App(){
  const [formularioEstaVisivel, setFromularioEstaVisivel] = useState(true)

  return (
      <>
        <Perfil nome="Mauricio" endereco="https://github.com/KwizatzHaderach.png" />
        <ReposList/>
        
        {/* {formularioEstaVisivel && (
          <Formulario/>
        )}
        <button onClick={()=> setFromularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
      </>
    )
}


export default App
