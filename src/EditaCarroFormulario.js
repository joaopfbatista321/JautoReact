import React, { useState, useEffect } from "react";

const EscolheProprietario = (props) => {
  const opcoes = props.dadosProprietariosIN.map((item) => {
    return (<option key={item.id} value={item.id}>{item.nome}</option>)
  });
  return (
    <select required
      className="form-select"
      onChange={props.proprietarioEscolhidoOUT}>
      <option value="">Selecione, por favor, um proprietário</option>
      {opcoes}
    </select>
  )
};

const EditaCarroFormulario = () => {
  const [carro, setCarro] = useState(null);
  const [proprietarios, setProprietarios] = useState(null);

  useEffect(() => { 
   
    fetch(`/api/Carrosapi/23`)
      .then(res => res.json())
      .then(data => setCarro(data));

    fetch(`/api/Proprietariosapi/`)  // replace with your actual endpoint
      .then(res => res.json())
      .then(data => setProprietarios(data));

  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    fetch(`/api/Carrosapi/${carro.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(carro)
    }).then(res => {
      if (res.ok) {
        // Update was successful, handle accordingly
      } else {
        // Update failed, handle error
      }
    });
  };

  const handleChange = event => {
    setCarro({ ...carro, [event.target.name]: event.target.value });
  };

  const handleProprietarioChange = event => {
    const proprietarioId = event.target.value;
    setCarro({ ...carro, proprietarioFK: proprietarioId });
  };

  if (!carro || !proprietarios) {
    return <div>Carregando...</div>;
  }

  const { marca, tipo, cor, modelo } = carro;


  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-4">
          Marca: <input type="text"
              required
              className="form-control"
              name="marca"
              value={marca}
              onChange={handleChange} /><br />
          Tipo: <input type="text"
              required
              className="form-control"
              name="tipo"
              value={tipo}
              onChange={handleChange} />
        </div>
        <div className="col-md-4">
          Cor: <input type="text"
              required
              className="form-control"
              name="cor"
              value={cor}
              onChange={handleChange} /><br />
          Modelo: <input type="text"
             required
              className="form-control"
              name="modelo"
              value={modelo}
              onChange={handleChange} />
        </div>
        <div className="col-md-4">
          Proprietário: 
          <EscolheProprietario dadosProprietariosIN={proprietarios} 
                               proprietarioEscolhidoOUT={handleProprietarioChange} />
          <br />
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default EditaCarroFormulario;
