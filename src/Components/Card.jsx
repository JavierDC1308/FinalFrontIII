import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';

const Card = ({ odontologo, isFav, onAddToFavs, onRemoveFromFavs }) => {
  const handleClickAddToFavs = () => {
    onAddToFavs(odontologo);
  };

  const handleClickRemoveFromFavs = () => {
    onRemoveFromFavs(odontologo);
  };

  const { theme } = useTheme(); // Obtiene el tema actual desde el contexto del tema

  return (
    <div className={`card ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={`/recipe/` + odontologo.id}>
          <img src="/images/doctor.jpg" alt="Card" width={200} />
          <p>ID: {odontologo.id}</p>
          <p>Nombre y apellido: {odontologo.name}</p>
        </Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {isFav ? (
          <button onClick={handleClickRemoveFromFavs} className="favButton">❌</button>
        ) : (
          <button onClick={handleClickAddToFavs} className="favButton">⭐</button>
        )}
      </div>
    </div>

  );
};

export default Card;





