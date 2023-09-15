import React from 'react';
import { useTheme } from '../Context/ThemeContext'; // Importa el contexto del tema


const Footer = () => {
  const { theme } = useTheme(); // Obtiene el tema actual desde el contexto del tema

  return (
    <footer className={theme === 'dark' ? 'dark' : 'light'}>
      <p>Copyright 2023 - Del Castillo, Luis Javier.</p>
      <img src="../images/DH.png" alt="DH-logo" />
      {/* Agrega los íconos de las redes sociales */}
      <div className="redes-sociales">
        <a href="https://www.facebook.com/JDCTecnologia/" target="_blank" rel="noopener noreferrer">
          <img src="../images/ico-facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/javier.del.castillo/" target="_blank" rel="noopener noreferrer">
          <img src="../images/ico-instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.tiktok.com/@javier.del.castillo" target="_blank" rel="noopener noreferrer">
          <img src="../images/ico-tiktok.png" alt="Tiktok" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=+54911%203776%207946&text=hola.+que+necesita%3F" target="_blank" rel="noopener noreferrer">
          <img src="../images/ico-whatsapp.png" alt="Whatsapp" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

