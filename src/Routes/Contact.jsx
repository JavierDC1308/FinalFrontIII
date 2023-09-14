import React from 'react';
import { useTheme } from '../Context/ThemeContext'; // Importa el contexto del tema
import Form from '../Components/Form';

const Contact = () => {
  const { theme } = useTheme(); // Obtiene el tema actual desde el contexto del tema

  return (
    <div className={`content-wrapper ${theme === 'dark' ? 'dark' : 'light'}`}>
      <h1>Contacto</h1>
      <p>¿Qué necesitas? Déjanos tu mensaje</p>
      <p>Envíanos tus preguntas y nos pondremos en contacto contigo</p>
      <Form />
    </div>
  );
}

export default Contact;
