import React from "react";
import { useParams } from "react-router-dom";

class EditaCarroFormulario extends React.Component {
  state = {
    carro: null
  };
  

  componentDidMount() {
    const id = this.props.match.params.id;
    // carrega os dados do carro pelo ID
  }

  handleSubmit = async event => {
    event.preventDefault();
    // atualiza o carro
  };

  handleChange = event => {
    // atualiza o estado do carro
  };

  render() {
    const { carro } = this.state;

    if (!carro) {
      return <div>Carregando...</div>;
    }

    const { marcaCarro, tipoCarro, corCarro, modeloCarro } = this.state;
        const { proprietariosIN } = this.props;

        const EscolheProprietario = (props) => {
            const opcoes = props.dadosProprietariosIN.map((item) => {
                return (<option value={item.id}>{item.nome}</option>)
            })
            return (
                <select required
                    className="form-select"
                    onChange={props.proprietarioEscolhidoOUT}>
                    <option value="">Selecione, por favor, um proprietário</option>
                    {opcoes}
                </select>
            )
        }
    return (

        
      <form onSubmit={this.handleSubmit}>
       method="Post"
                onSubmit={this.handleFormSubmit}>
                <div className="row">
                    <div className="col-md-4">
                        Marca: <input type="text"
                            required
                            className="form-control"
                            name="marcaCarro"
                            value={marcaCarro}
                            onChange={this.handleAdicao} /><br />
                        Tipo: <input type="text"
                            required
                            className="form-control"
                            name="tipoCarro"
                            value={tipoCarro}
                            onChange={this.handleAdicao} />
                    </div>
                    <div className="col-md-4">
                        Cor: <input type="text"
                            required
                            className="form-control"
                            name="corCarro"
                            value={corCarro}
                            onChange={this.handleAdicao} /><br />
                        Modelo: <input type="text"
                           required
                            className="form-control"
                            name="modeloCarro"
                            value={modeloCarro}
                            onChange={this.handleAdicao} />
                    </div>
                    <div className="col-md-4">
                        Fotografia: <input type="file"
                            
                            name="fotografiaCarro"
                            accept=".jpg,.png"
                            className="form-control"
                            onChange={this.handleFotoCarro} /><br />
                        Proprietário: <EscolheProprietario dadosProprietariosIN={proprietariosIN}
                            proprietarioEscolhidoOUT={this.handleProprietarioChange} />
                        <br />
                    </div>
                </div>
        <button type="submit">Salvar</button>
      </form>
    );
  }
}

export default EditaCarroFormulario;
