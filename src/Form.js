/**
 * Form.js
 */

import React from "react";

/**
 * this component will create a 'dropdown' with proprietarios' data
 */
const ChooseProprietario = (props) => {
    const options = props.proprietariosDataIN.map((row) => {
        return <option value={row.id}>{row.nome}</option>
    })
    return (
        <select className="form-select"
            onChange={props.choosedProprietarioOUT} >
            <option value="">Choose an proprietario, please</option>
            {options}
        </select>
    )
}





class Form extends React.Component {
    newCarro = {
        carroMatricula: "",
        carroTipo: "",
        carroCor: "",
        carroMarca: "",
       // animalPhoto: null,
        carroProprietario: "",
    }

    state = this.newCarro;

    /**
     * function to handle data provided by 'input' field
     * @param {*} event 
     */
    handleAdd = (event) => {
        // read the data available at 'event'
        const { name, value } = event.target
        // assign to the state identified by 'name' withe the 'value' writed by user
        this.setState({
            [name]: value,
        })
    }

    /**
     * read the selected proprietario
     * @param {*} event 
     */
    handleProprietarioChange = (event) => {
        this.setState({ carroProprietario: event.target.value });
    }

    /**
     * add the photo file to state
     */
   // handlePhotoChange = (event) => {
    //    this.setState({ animalPhoto: event.target.files[0] })
   // }

    /**
     * Sends data collect by the Form to API
     * @param {*} event 
     */
    handleForm = (event) => {
        // this statement will prevent Form to submit do Server the data
        event.preventDefault();

        // specefy an objet to transport data to API
        let formData = {
            Matricula: this.state.carroMatricula,
            Tipo: this.state.carroTipo,
            Cor: this.state.carroCor,
            Marca: this.state.carroMarca,
            //uploadPhoto: this.state.animalPhoto,
            Proprietario: this.state.carroProprietario,
        }
        // export data to <App />
        this.props.newCarroOUT(formData);

    }



    render() {
        // read the state and props values
        const { carroMatricula, carroCor, carroMarca, carroTipo } = this.state;
        const { proprietariosIN } = this.props;

        return (
            <form method="POST"
                encType="multipart/form-data"
                onSubmit={this.handleForm}
            >
                <div className="row">
                    <div className="col-md-4">
                        Name: <input type="text"
                            required
                            className="form-control"
                            name="carroMatricula"
                            value={carroMatricula}
                            onChange={this.handleAdd}
                        /><br />
                        Weight: <input type="text"
                            required
                            className="form-control"
                            name="carroCor"
                            value={carroCor}
                            onChange={this.handleAdd}
                        />
                    </div>
                    <div className="col-md-4">
                        Specie: <input type="text"
                            required
                            className="form-control"
                            name="carroMarca"
                            value={carroMarca}
                            onChange={this.handleAdd}
                        /><br />
                        Breed: <input type="text"
                            required
                            className="form-control"
                            name="carroTipo"
                            value={carroTipo}
                            onChange={this.handleAdd}
                        />
                    </div>
                    <div className="col-md-4">
                        Photo: <input type="file"
                            //required
                            //name="animalPhoto"
                            //accept=".jpg,.png"
                            //className="form-control"
                            //onChange={this.handlePhotoChange}
                        /><br />
                        {/* o componente 'EscolheDono' irá ter dois parâmetros:
                            - dadosDonos: serve para introduzir no componente a lista dos donos a representar na dropdown
                            - idDonoEscolhido: serve para retirar do componente, o ID do dono que o utilizador escolheu,
                          que será entregue ao 'handlerDonoChange' */}
                        Owner: <ChooseProprietario proprietariosDataIN={proprietariosIN}
                            choosedProprietarioOUT={this.handleProprietarioChange} />                         <br />
                    </div>
                </div>
                <input type="submit"
                    value="Add new animal"
                    className="btn btn-outline-primary" />
            </form>
        )
    }
}

export default Form;