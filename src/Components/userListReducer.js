  // Este es un reducer que toma dos argumentos: state (estado actual) y action (acción a realizar)
export const reducer = (state, action) => {
    // Aquí comienza una estructura de control switch basada en el tipo de acción proporcionada
    switch (action.type) {
        case 'ADD_REQUEST':
            // Cuando el tipo de acción es 'ADD_REQUEST', se realiza lo siguiente:
            // - Se crea un nuevo objeto de estado con una propiedad 'users' que contiene
            //   una copia del arreglo 'state.users' y se agrega 'action.payload' al final del arreglo.
            return { users: [...state.users, action.payload] };

        default:
            // Esto es útil para detectar acciones desconocidas o no manejadas.
            throw new Error();
    }
}
