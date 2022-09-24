import React, { useState, useEffect } from 'react';
// import react from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AutchContextProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const storedLoggedUserInformation = localStorage.getItem('isLoggedIn');

    if (storedLoggedUserInformation === '1') {
      setLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setLoggedIn(false);
  };
  const logonHanlder = () => {
    localStorage.setItem('isLoggedIn', 1);
    setLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: logonHanlder,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
