import React from "react";
import { Card, Container } from "react-bootstrap";

const Frase = () => {
  return (
    <Container className=" border border-danger border-3 text-center my-4">
      <h2 className="mt-4">Lisa Simpson</h2>
      <hr></hr>
      <img src="img/Lisa_Simpson.webp" alt="Lisa Simpson" />
      <section className="py-5 px-4">
      <Card >
        <p className="px-4 py-3 fs-5 fst-italic">
         " -¡Usted está mal! ¡Todo el maldito sistema está mal! 
          -¿No hay una historia de amor que tenga un final feliz? 
          -Es más sencillo ser amiga de muchas personas en línea que de una persona en persona. 
          -¿Ser yo misma? He sido yo misma por 8 años y no ha funcionado."
          -Lisa Simpson 
        </p>

      </Card>
      </section>
    </Container>
  );
};

export default Frase;
