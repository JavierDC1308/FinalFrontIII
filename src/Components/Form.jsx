import React, { useState, useReducer } from "react";
import { reducer } from "./userListReducer";
import { useTheme } from '../Context/ThemeContext';
import '../index.css';

const Form = () => {
  const [state, dispatch] = useReducer(reducer, {
    users: [] // Inicializado como un array vacío
  });

  const [newUser, setNewUser] = useState({
    message: '',
    email: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { theme } = useTheme();
  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (newUser.message.length <= 5 || !/^\S+@\S+\.\S+$/.test(newUser.email)) {
      setError("Por favor verifique su información nuevamente");
      setSuccess(null);
      return;
    }

    // Si pasa las validaciones, muestra el mensaje de éxito
    setSuccess(`Gracias ${newUser.message}, te contactaremos cuando antes vía mail`);
    setError(null);

    // Envía los datos al reducer (aquí puedes hacer lo que necesites con los datos)
    dispatch({ type: 'ADD_REQUEST', payload: newUser });

    // Limpia los campos del formulario
    setNewUser({
      message: '',
      email: ''
    });
  };

  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <div>
        <form onSubmit={handleSubmit} className="my-form" >
          <label>
            Nombre y apellido
            <input type="text" name="message" onChange={handleChange} value={newUser.message} autoComplete="name"/>
          </label>
          <label>
            Email
            <input type="email" name="email" onChange={handleChange} value={newUser.email} autoComplete="email"/>
          </label>
          <button>Submit</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success">{success}</p>}
        <div className={`user-list ${theme === 'dark' ? 'dark' : 'light'}`}>
          {state.users.map((user, index) => (
            <div key={index} className="user-item">
              <p className="user-message">Nombre : {user.message}</p>
              <p className="user-email">Email: {user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
