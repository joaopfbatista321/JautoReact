import React, { useEffect, useState } from 'react';
import CarrosApi from '../api/CarrosApi';
import ProprietariosApi from '../api/ProprietariosApi';

function HomePage() {
  const [carros, setCarros] = useState([]);
  const [proprietarios, setProprietarios] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const carrosData = await CarrosApi.getCarros();
      const proprietariosData = await ProprietariosApi.getProprietarios();
      setCarros(carrosData);
      setProprietarios(proprietariosData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Página Inicial</h1>
      {/* Renderize os dados dos carros e proprietários aqui */}
    </div>
  );
}

export default HomePage;
