/**
 * Formulario.js
 */

import React from "react";

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

class Formulario extends React.Component {

    novoCarro = {
        marcaCarro: "",
        tipoCarro: "",
        corCarro: "",
        modeloCarro: "",
        fotografiaCarro: "",
        proprietarioCarroFK: ""
    }

    state = this.novoCarro;

    handleAdicao = (evento) => {
        const { name, value } = evento.target;

        this.setState({
            [name]: value,
        })
    }

    handleFotoCarro = (evento) => {
        this.setState({ fotografiaCarro: evento.target.files[0] });
    }

    handleProprietarioChange = (evento) => {
        this.setState({ proprietarioCarroFK: evento.target.value });
    }

    handleFormSubmit = (evento) => {
        evento.preventDefault();

        let dadosForm = {
            marca: this.state.marcaCarro,
            tipo: this.state.tipoCarro,
            cor: this.state.corCarro,
            modelo: this.state.modeloCarro,
            fotografia: this.state.fotografiaCarro,
            proprietario: this.state.proprietarioCarroFK,
        }

        this.props.carroOUT(dadosForm);
    }

    render() {
        const { marcaCarro, tipoCarro, corCarro, modeloCarro } = this.state;
        const { proprietariosIN } = this.props;

        return (
            <form encType="multipart/form-data"
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
                <input type="submit" value="Adicionar carro" className="btn btn-outline-primary" />
            </form>
        )
    }
}

export default Formulario;
