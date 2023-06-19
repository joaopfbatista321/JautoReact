import React from "react";
import Tabela from "../Tabela";
import Formulario from '../Formulario';


async function getCarros() {
  let dados = await fetch("api/CarrosApi/");
  console.log('sim',dados)
  if (!dados.ok) {
    console.error(dados)
    throw new Error("Não foi possível aceder à API e ler os dados dos Carros. Código: ", dados.status)
  }
  return await dados.json();
}

async function getProprietarios() {
  let dados = await fetch("api/ProprietariosApi/");
  if (!dados.ok) {
    console.error(dados)
    throw new Error("Não foi possível aceder à API e ler os dados dos Proprietários. Código: ", dados.status)
  }
  return await dados.json();
}

async function InsereCarro(carro) {
  let formData = new FormData();
  formData.append("Marca", carro.Marca);
  formData.append("Tipo", carro.Tipo);
  formData.append("Cor", carro.Cor);
  formData.append("Modelo", carro.Modelo);
  formData.append("uploadFotoCarro", carro.Fotografia);
  formData.append("Proprietario", carro.Proprietario);
  let resposta = await fetch("api/carrosapi", {
    method: "POST",
    body: formData
  });
  if (!resposta.ok) {
    console.error(resposta);
    throw new Error("Ocorreu um erro na adição dos dados do Carro", resposta.status)
  }
}

async function AtualizaCarro(idCarro, carro) {
  let formData = new FormData();
  formData.append("Id", idCarro);
  formData.append("Marca", carro.Marca);
  formData.append("Tipo", carro.Tipo);
  formData.append("Cor", carro.Cor);
  formData.append("Modelo", carro.Modelo);
  //formData.append("uploadFotoCarro", carro.Fotografia);
  formData.append("Proprietario", carro.Proprietario);
  let resposta = await fetch("api/carrosapi/" + idCarro, {
    method: "PUT",
    body: formData
  });
  if (!resposta.ok) {
    console.error(resposta);
    throw new Error("Ocorreu um erro na atualização dos dados do Carro", resposta.status)
  }
}

async function ApagaCarro(idCarro) {
  let formData = new FormData();
  formData.append("id", idCarro);
  let resposta = await fetch("api/carrosapi" + idCarro, {
    method: "DELETE",
    body: formData
  });
  if (!resposta.ok) {
    console.error(resposta);
    throw new Error("Ocorreu um erro na eliminação dos dados do Carro", resposta.status)
  }
}

class App extends React.Component {
  state = {
    carros: [],
    proprietarios: []
  }

  componentDidMount() {
    this.LoadCarros();
    this.LoadProprietarios();
  }

  async LoadCarros() {
    try {
      let dadosDosCarros = await getCarros();
      this.setState({ carros: dadosDosCarros });
      console.log(dadosDosCarros)
    } catch (erro) {
      console.error("Aconteceu um erro no acesso aos dados dos carros. ", erro)
    }
  }

  async LoadProprietarios() {
    try {
      let dadosDosProprietarios = await getProprietarios();
      this.setState({ proprietarios: dadosDosProprietarios });
    } catch (erro) {
      console.error("Aconteceu um erro no acesso aos dados dos proprietários. ", erro)
    }
  }

  handleNovoCarro = async (carro) => {
    try {
      await InsereCarro(carro);
      this.LoadCarros();
    } catch (error) {
      console.error("Ocorreu um erro com a adição do carro (" + carro.Marca + ")");
    }
  }

  handleAtualizaCarro = async (idCarro, carro) => {
    try {
      await AtualizaCarro(idCarro, carro);
      this.LoadCarros();
    } catch (error) {
      console.error("Ocorreu um erro com a atualização do carro.");
    }
  }

  handleApagaCarro = async (idCarro) => {
    try {
      await ApagaCarro(idCarro);
      this.LoadCarros();
    } catch (error) {
      console.error("Ocorreu um erro com a eliminação do carro.");
    }
  }

  render() {
    const { carros, proprietarios } = this.state;

    return (
      <div className="container">
        <h1>Carros</h1>
        <h4>Novo carro:</h4>
        <Formulario proprietariosIN={proprietarios} carroOUT={this.handleNovoCarro} />

        <br />
        <h4>Lista de carros</h4>
        <Tabela dadosCarrosIN={carros} apagaCarroOUT={this.handleApagaCarro} />

        <br /><br />
      </div>
    )
  }
}

export default App;

