import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProprietariosApi from '../api/ProprietariosApi';

function ProprietariosPage() {
  const { id } = useParams();
  const [proprietarios, setProprietarios] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await ProprietariosApi.getProprietarios();
        setProprietarios(data);
      } catch (error) {
        console.error('Erro ao carregar os dados dos proprietários:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Proprietários</h1>
      <ul>
        {proprietarios.map((proprietario) => (
          <li key={proprietario.id}>{proprietario.nome}</li>
        ))}
      </ul>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default ProprietariosPage;
