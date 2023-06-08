import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/account/register', {
        UserName: username,
        Password: password,
        ConfirmPassword: confirmPassword
      });

      // Registro bem-sucedido
      console.log('Registro realizado com sucesso!');
      
      // Redirecionar para a página de login ou exibir mensagem de sucesso
    } catch (error) {
      // Tratar erros de registro
      console.error('Erro no registro:', error);
    }
  };

  return (
    <div>
    <h2>Registro</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Nome de Usuário:</label>
        <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Senha:</label>
        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirmar Senha:</label>
        <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Registrar</button>
    </form>
  </div>
  );
}

export default RegisterForm;
