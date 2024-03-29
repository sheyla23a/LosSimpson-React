import { Button, Container, Image, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";
import logo from "./img/The_Simpsons_yellow_logo.svg.png"

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      //mostrar el spinner
      setMostrarSpinner(true);
      //hacer una peticion get a la api
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const datos = await respuesta.json();
      console.log(datos[0]);
      setPersonaje(datos[0]);
      //ocultar el spinner
      setMostrarSpinner(false);
    } catch (error) {
      console.log(error);
      //agregar un mensaje para el usuario final
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Espere un momento por favor!",
      });
    }
  };

  const mostrarComponente = mostrarSpinner ? (
    <div className="my-4">
      <Spinner animation="border" variant="light"></Spinner>
    </div>
  ) : (
    <Frase personaje={personaje}></Frase>
  );

  return (
    <>
      <Container className="text-center my-5">
        <Image
          className="losSimpson mt-2"
          src={logo}
          alt="Logo los Simpson"
          fluid
        />
        {mostrarComponente}
      </Container>
      <section className="d-flex justify-content-center mb-5">
        <Button
          onClick={consultarAPI}
          className="bg-warning border border-warning text-dark fs-5 "
        >
          Obtener frase
        </Button>
      </section>
    </>
  );
}

export default App;
