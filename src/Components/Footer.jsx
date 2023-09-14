import React from 'react';
import { useTheme } from '../Context/ThemeContext'; // Importa el contexto del tema

const Footer = () => {
  const { theme } = useTheme(); // Obtiene el tema actual desde el contexto del tema

  return (
    <footer className={theme === 'dark' ? 'dark' : 'light'}>
      <p>Copyright 2023 - Del Castillo, Luis Javier.</p>
      <img src="../images/DH.png" alt="DH-logo" />
    </footer>
  );
}

export default Footer;

