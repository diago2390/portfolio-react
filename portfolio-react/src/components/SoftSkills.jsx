import React from 'react';
import '../style/App.css'; // Asegurate que los estilos estén ahí

function SoftSkills() {
  const skills = ["Responsabilidad", "Trabajo en equipo", "Comunicación"];

  return (
    <section id="softskills">
      <h2>Soft Skills</h2>
      <ul className="skills-grid">
        {skills.map((skill, index) => (
          <li key={index}>
            <p>{skill}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SoftSkills;
