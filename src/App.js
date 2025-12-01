import React from 'react';
import { useAuth } from './AuthContext';
import UserInfo from './components/UserInfo'; // Importa o hook customizado

// Componente simples para exibir a informação do usuário logado
// const UserInfo = () => {
//   const { user } = useAuth();
  
//   if (!user) return null;
  
//   return (
//     <div style={{ marginTop: '20px', padding: '10px', border: '1px solid green', backgroundColor: '#e6ffe6' }}>
//       <p>✨ **Bem-vindo, {user.name}!**</p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

function App() {
  // Consome os valores do contexto
  const { isLoggedIn, login, logout } = useAuth();

  // Função de exemplo para simular o envio de credenciais
  const handleLogin = () => {
    // Simula o sucesso da autenticação com dados de um usuário
    const userData = { 
      id: 101, 
      name: 'Maria Silva', 
      email: 'maria@exemplo.com' 
    };
    login(userData);
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Painel de Autenticação Global</h2>
      <p>Status: **{isLoggedIn ? 'LOGADO' : 'DESLOGADO'}**</p>

      {isLoggedIn ? (
        // Botão de Logout se estiver logado
        <button 
          onClick={logout}
          style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Sair (Logout)
        </button>
      ) : (
        // Botão de Login se estiver deslogado
        <button 
          onClick={handleLogin}
          style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Entrar (Login)
        </button>
      )}

      {/* Renderiza as informações do usuário se estiver logado */}
      <UserInfo />
      
      <hr style={{ marginTop: '40px' }} />
      <p style={{ fontSize: '0.9em', color: '#666' }}>
        Tanto o `App` quanto o `UserInfo` consomem o mesmo contexto de autenticação global.
      </p>
    </div>
  );
}

export default App;