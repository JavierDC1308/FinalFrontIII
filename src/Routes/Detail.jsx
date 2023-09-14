import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext'

const Detail = () => {
  const [lista, setLista] = useState({});
  const { theme } = useTheme();
  const params = useParams();

  const url = `https://jsonplaceholder.typicode.com/users/` + params.id;

  useEffect(() => {
    let isMounted = true; // Variable para rastrear si el componente está montado

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          // Verifica si el componente aún está montado antes de actualizar el estado
          setLista(data);
        }
      });

    return () => {
      // Función de limpieza que se ejecuta cuando el componente se desmonta
      isMounted = false;
    };
  }, [url]); // Agrega url al array de dependencias

  return (
    <><div className={theme === 'dark' ? 'dark' : 'light'}>
      <h1>Detalle del dentista</h1>
      <table className="card table-style" style={{ margin: '20' }}>
        <tbody>
          <tr>
            <td colSpan="3" className="centered-cell">ID: {lista.id}</td>
          </tr>
          <tr>
            <td rowSpan="5"><img src="/images/doctor.jpg" alt="Doctor" className="doctor-image" /></td>
            <td>Nombre:</td>
            <td>{lista.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{lista.email}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{lista.phone}</td>
          </tr>
          <tr>
            <td>Website:</td>
            <td>{lista.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Detail;
