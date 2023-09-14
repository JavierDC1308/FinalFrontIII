import React from "react";
import { useOdontoStates } from "../Context/Context";
import Card from "../Components/Card";
import { useTheme } from '../Context/ThemeContext';

const Favs = () => {
  const { favs, setFavs } = useOdontoStates();
  const { theme } = useTheme();

  // funccion de boton X para eliminar de destacado
  const removeFromFavs = (odontologoToRemove) => {
    const updatedFavs = favs.filter((fav) => fav.id !== odontologoToRemove.id);
    setFavs(updatedFavs);
  };

  return (
    <>
      <div className={theme === 'dark' ? 'dark' : 'light'}>
        <h1>Dentistas Destacados</h1>
        <div className="card-grid">
          {favs.map((fav) => (
            <Card
              odontologo={fav}
              key={fav.id}
              onRemoveFromFavs={removeFromFavs} // Pasa la función removeFromFavs
              isFav={true} // Marcar como favorito
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favs;


