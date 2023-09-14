import React from 'react';
import { useOdontoStates } from '../Context/Context';
import Card from '../Components/Card';
import { useTheme } from '../Context/ThemeContext'; // Importa el contexto del tema

const Home = () => {
  const { odontologos, favs, setFavs } = useOdontoStates();
  const { theme } = useTheme(); // Obtiene el tema actual desde el contexto del tema

  const addToFavs = (odontologoToAdd) => {
    if (!favs.some((fav) => fav.id === odontologoToAdd.id)) {
      setFavs([...favs, odontologoToAdd]);
    }
  };

  const removeFromFavs = (odontologoToRemove) => {
    const updatedFavs = favs.filter((fav) => fav.id !== odontologoToRemove.id);
    setFavs(updatedFavs);
  };

  return (
    <main className={theme === 'dark' ? 'dark' : 'light'}>
      <h1>Home</h1>
      <div className='card-grid'>
        {odontologos.map((odontologo) => (
          <Card
            odontologo={odontologo}
            key={odontologo.id}
            onAddToFavs={addToFavs}
            onRemoveFromFavs={removeFromFavs}
            isFav={favs.some((fav) => fav.id === odontologo.id)}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
