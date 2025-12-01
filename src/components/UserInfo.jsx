import React from 'react';
import { useAuth } from '../AuthContext';

function UserInfo() {
   const { user } = useAuth();
    
    if (!user) return null;
    
    return (
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid green', backgroundColor: '#e6ffe6' }}>
        <p>✨ **Bem-vindo, {user.name}!**</p>
        <p>Email: {user.email}</p>
      </div>
    );
}

export default UserInfo