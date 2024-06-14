import { createContext, useEffect, useReducer } from 'react';

export const AuthContext = createContext();

const initialState = {
  user: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user?.token;

    if (user) {
      const isTokenExpired = () => {
        try {
          const { exp } = JSON.parse(atob(token.split('.')[1]));
          return Date.now() >= exp * 1000;
        } catch (e) {
          return false;
        }
      };

      if (isTokenExpired()) {
        dispatch({ type: 'LOGOUT' });
        localStorage.removeItem('user');
      } else {
        dispatch({ type: 'LOGIN', payload: user });
      }
    }
  }, []);

  console.log('Auth State: ', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
