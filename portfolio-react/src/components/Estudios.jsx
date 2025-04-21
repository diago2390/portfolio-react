import React from 'react';
import '../style/App.css';
import unt from '../fotos/unt.jpg'
import udemy from '../fotos/udemy.png'
import ed from '../fotos/ed.jpg'
function Estudios() {
  const estudios = [
    {
      titulo: "Estudio 1",
      descripcion: "Tecnicatura Universitaria en Programación - UTN",
      imagen: unt
    },
    {
      titulo: "Estudio 2",
      descripcion: "Curso de Desarrollo Web - Udemy",
      imagen: udemy
    },
    {
      titulo: "Estudio 3",
      descripcion: "Base de datos SQL - EDteam",
      imagen: ed
    }
  ];

  return (
    <section id="estudios">
      <h2>Estudios</h2>
      <ul className="estudios-grid">
        {estudios.map((estudio, index) => (
          <li key={index}>
            <img src={estudio.imagen} alt={estudio.titulo} />
            <p>{estudio.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Estudios;
