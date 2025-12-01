import React, { createContext, useState, useContext } from 'react';

//Cria o Context
const AuthContext = createContext();

// Cria um hook customizado para facilitar o consumo
export const useAuth = () => {
  return useContext(AuthContext);
};

//Cria o Provider, onde o estado é armazenado
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Função para simular o login
  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData); // Ex: { name: 'João', email: 'joao@exemplo.com' }
    console.log("Usuário logado:", userData);
  };

  // Função para simular o logout
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    console.log("Usuário deslogado.");
  };

  // Objeto de valores que será passado para os componentes
  const contextValue = {
    isLoggedIn,
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};