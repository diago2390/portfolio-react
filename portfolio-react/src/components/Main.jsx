import React from 'react';
import Estudios from './Estudios';
import '../style/App.css';
import SoftSkills from './SoftSkills';

function Main() {
  return (
    <main>
      <div>
        <p className='presentacion'>Hola, mi nombre es Cesar Brandan y soy estudiante de Programación en la Facultad Regional Tucumán.
        Me apasiona el desarrollo de software y estoy en constante aprendizaje para mejorar mis habilidades técnicas y personales. Este portfolio refleja mi formación, 
        mis proyectos y mi compromiso con la tecnología.</p>
        <h2 id="estudios"><Estudios /></h2>
        
        <h2 id="softskills"><SoftSkills /></h2>
        
      </div>
    </main>
  );
}

export default Main;