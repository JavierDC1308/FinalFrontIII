export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_REQUEST':
            return {users: [...state.users, action.payload]}
        default: 
            throw new Error()
    }
  }