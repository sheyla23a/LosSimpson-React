import { Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Frase from "../components/Frase";

function App() {
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
        <Frase></Frase>
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
