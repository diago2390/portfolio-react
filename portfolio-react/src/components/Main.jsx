import React from 'react';
import Estudios from './Estudios';
import '../style/App.css';
import SoftSkills from './SoftSkills';

function Main() {
  return (
    <main>
      <div>
        <p>Soy Cesar Brandan, estudiante de Programación en la Facultad Regional Tucumán...</p>
        <h2 id="estudios">Estudios</h2>
        <Estudios />
        <h2 id="softskills">Soft Skills</h2>
        <SoftSkills />
      </div>
    </main>
  );
}

export default Main;