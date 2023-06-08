const CarrosList = ({ carros, onDeleteCarro }) => {
    return (
      <ul>
        {carros.map((carro) => (
          <li key={carro.id}>
            {carro.modelo} - {carro.marca}
            <button onClick={() => onDeleteCarro(carro.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  