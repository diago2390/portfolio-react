import React from 'react';
import imagen from '../fotos/cesarFoto.jpeg'
import '../style/App.css'
function Header() {
  return (
    <header >
      <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Quien Soy</a></li>
                <li><a href="#">Estudios</a></li>
                <li><a href="#">Soft Skills</a></li>
            </ul>
        </nav>
      <img src={imagen} alt="Foto personal" />
      <h1 id = 'nombre'>Cesar Armando Brandan</h1>
      <h2>Legajo:61832</h2>
    </header>
  );
}

export default Header;