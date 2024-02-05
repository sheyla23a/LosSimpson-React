import { Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Frase from "../components/Frase";
import { useEffect,useState } from "react";

function App() {

  const[personaje,setPersonaje] = useState({});

  useEffect(()=>{
   consultarAPI();
  },[])

 const consultarAPI = async() =>{
  //hacer una peticion get a la api
  const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
  const datos = await respuesta.json();
  console.log(datos[0]);
  setPersonaje(datos[0])

 }

  return (
    <>
      <section>
        <div className="w-100 d-flex justify-content-center">
          <Image
            className="losSimpson mt-2"
            src="img/The_Simpsons_yellow_logo.svg.png"
            alt="Logo los Simpson"
            fluid
          />
        </div>
        <Frase personaje={personaje}></Frase>
      </section>
      <section className="d-flex justify-content-center mb-5">
        <Button className="bg-warning border border-warning text-dark fs-5 ">
          Obtener frase
        </Button>
      </section>
    </>
  );
}

export default App;
