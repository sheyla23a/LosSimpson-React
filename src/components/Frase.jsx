import React from "react";
import { Card, Container } from "react-bootstrap";

const Frase = ({personaje}) => {
  return (
    <Container className="text-center my-4">
      <h2 className="mt-4">{personaje.character}</h2>
      <hr></hr>
      <img src={personaje.image} alt={personaje.character} />
      <section className="py-5 px-4">
      <Card >
        <p className="px-4 py-3 fs-5 fst-italic">
        {personaje.quote}
        </p>
      </Card>
      </section>
    </Container>
  );
};

export default Frase;
