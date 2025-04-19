import React from 'react';

function softSkills() {
  const skills = ["Responsabilidad", "Trabajo en equipo", "Comunicación"];

  return (
    <ul>
      {skills.map((skill, index) => <li key={index}>{skill}</li>)}
    </ul>
  );
}

export default softSkills;
