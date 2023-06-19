/**
 * Tabela.js
 */

import React from "react";
import { Link } from "react-router-dom";

function Cabecalho() {
    return (
        <thead>
            <tr>
                <th>Matricula</th>
                <th>Marca</th>
                <th>Tipo</th>
                <th>Cor</th>
                <th>Proprietário</th>
                <th>Fotografia</th>
                <th></th>
            </tr>
        </thead>
    );
}

const Corpo = (props) => {
    const linhas = props.dadosTabelaIN.map((carro) => {
        return (
            <tr key={carro.id}>
                <td>{carro.matricula}</td>
                <td>{carro.marca}</td>
                <td>{carro.tipo}</td>
                <td>{carro.cor}</td>
                <td>{carro.proprietario}</td>
                <td>
                    <img
                        src={'Carros/'+carro.fotografias[0].nomeFicheiro}
                        alt={'foto do ' + carro.nome}
                        title={carro.nome}
                        height="50000"
                    />
                </td>
                <td>
                    <Link to={`/editarCarro/${carro.id}`}>
                        <button className="btn btn-outline-secondary">Editar</button>
                    </Link>
                </td>
                <td>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => props.carroARemoverOUT(carro.id)}
                    >
                        Apagar
                    </button>
                </td>
            </tr>
        );
    });

    return <tbody>{linhas}</tbody>;
};

class Tabela extends React.Component {
    render() {
        const { dadosCarrosIN, apagaCarroOUT } = this.props;

        return (
            <table className="table table-striped">
                <Cabecalho />
                <Corpo dadosTabelaIN={dadosCarrosIN} carroARemoverOUT={apagaCarroOUT} />
            </table>
        );
    }
}

export default Tabela;
