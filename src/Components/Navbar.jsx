import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext'; // Importa el contexto del tema

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Obtiene el tema actual y la función para cambiar el tema

  const enlaces = [
    { titulo: 'Home', route: '/' },
    { titulo: 'Destacado', route: '/destacado' },
    { titulo: 'Contacto', route: '/contacto' }
  ];

  return (
    <nav className={theme === 'dark' ? 'dark' : 'light'} style={{ display: 'flex' }}> 
      {enlaces.map((enlace, indice) => (
        <Link to={enlace.route} key={indice}>
          <h4 style={{ margin: 10 }}>{enlace.titulo}</h4>
        </Link>
      ))}
      <button onClick={toggleTheme}>Cambiar tema</button>
    </nav>
  );
};

export default Navbar;
