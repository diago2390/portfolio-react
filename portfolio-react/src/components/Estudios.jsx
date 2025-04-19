import React from 'react';

function Estudios() {
  const estudios = [
    "Tecnicatura Universitaria en Programación - UTN",
    "Curso de Desarrollo Web - Plataforma X"
  ];

  return (
    <ul>
      {estudios.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
}

export default Estudios;
