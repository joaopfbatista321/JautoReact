const CarroForm = ({ onAddCarro }) => {
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const carroData = {
        modelo,
        marca,
      };
      onAddCarro(carroData);
      setModelo('');
      setMarca('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Modelo:
          <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
        </label>
        <label>
          Marca:
          <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
        </label>
        <button type="submit">Adicionar Carro</button>
      </form>
    );
  };
  